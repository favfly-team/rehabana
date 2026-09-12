#!/usr/bin/env node
/**
 * Scan Claude Code session transcripts and report per-day, per-project work windows.
 *
 *   node scan-sessions.mjs <since-YYYY-MM-DD> [outfile] [--project <slug-substring>]
 *
 * Prints, for every day since <since>, each project worked on that day with:
 *   - wall clock  : first to last event   <- use this as the time estimate
 *   - active      : sum of gaps <= 12 min <- a floor; misses thinking and dashboard work
 *   - the user's prompts, so you can name the tasks
 *
 * Env:
 *   TZ_OFFSET_MINUTES  local offset from UTC (default 330 = IST +5:30)
 *   CLAUDE_PROJECTS    override the projects directory
 */

import fs from 'fs';
import os from 'os';
import path from 'path';
import readline from 'readline';

const args = process.argv.slice(2);
const since = args[0];
if (!since || !/^\d{4}-\d{2}-\d{2}$/.test(since)) {
  console.error('usage: scan-sessions.mjs <since-YYYY-MM-DD> [outfile] [--project <substr>]');
  process.exit(1);
}

const projFlag = args.indexOf('--project');
const projFilter = projFlag !== -1 ? args[projFlag + 1] : null;
const outFile = args[1] && !args[1].startsWith('--') ? args[1] : null;

const OFFSET = Number(process.env.TZ_OFFSET_MINUTES ?? 330) * 60 * 1000;
const ROOT = process.env.CLAUDE_PROJECTS || path.join(os.homedir(), '.claude', 'projects');
const START = Date.parse(`${since}T00:00:00Z`) - OFFSET; // local midnight
const GAP = 12 * 60 * 1000;

const day = (ms) => new Date(ms + OFFSET).toISOString().slice(0, 10);
const hm = (ms) => new Date(ms + OFFSET).toISOString().slice(11, 16);
const short = (p) => p.replace(/^[a-z]--/i, '').replace(/^Favfly-myteam-/i, '');

const NOISE = [
  /<ide_opened_file>[\s\S]*?<\/ide_opened_file>/g,
  /<ide_selection>[\s\S]*?<\/ide_selection>/g,
  /<system-reminder>[\s\S]*?<\/system-reminder>/g,
  /<task-notification>[\s\S]*?<\/task-notification>/g,
  /\[Image:[^\]]*\]/g,
];

function clean(text) {
  let t = text;
  for (const re of NOISE) t = t.replace(re, '');
  return t.replace(/\s+/g, ' ').trim();
}

if (!fs.existsSync(ROOT)) {
  console.error(`no projects directory at ${ROOT}`);
  process.exit(1);
}

const events = [];
const projects = fs
  .readdirSync(ROOT)
  .filter((p) => {
    try {
      return fs.statSync(path.join(ROOT, p)).isDirectory();
    } catch {
      return false;
    }
  })
  .filter((p) => !projFilter || p.toLowerCase().includes(projFilter.toLowerCase()));

for (const proj of projects) {
  const dir = path.join(ROOT, proj);
  let files = [];
  try {
    files = fs.readdirSync(dir).filter((f) => f.endsWith('.jsonl'));
  } catch {
    continue;
  }

  for (const f of files) {
    const full = path.join(dir, f);
    // mtime is last write: a file untouched since START holds nothing we want
    let st;
    try {
      st = fs.statSync(full);
    } catch {
      continue;
    }
    if (st.mtimeMs < START) continue;

    const rl = readline.createInterface({
      input: fs.createReadStream(full),
      crlfDelay: Infinity,
    });

    for await (const line of rl) {
      if (!line.trim()) continue;
      let o;
      try {
        o = JSON.parse(line);
      } catch {
        continue;
      }
      if (!o.timestamp) continue;
      const ts = Date.parse(o.timestamp);
      if (Number.isNaN(ts) || ts < START) continue;
      if (o.type !== 'user' && o.type !== 'assistant') continue;

      let text = '';
      if (o.type === 'user' && o.message) {
        const c = o.message.content;
        if (typeof c === 'string') text = c;
        else if (Array.isArray(c)) {
          text = c.filter((x) => x.type === 'text').map((x) => x.text).join('\n');
        }
        text = clean(text);
        if (!text) continue; // tool-result-only turn
      }
      events.push({ proj: short(proj), ts, role: o.type, text });
    }
  }
}

if (!events.length) {
  console.log(`no session activity since ${since}`);
  process.exit(0);
}

events.sort((a, b) => a.ts - b.ts);

const grouped = {};
for (const e of events) {
  const d = day(e.ts);
  (grouped[d] ||= {});
  (grouped[d][e.proj] ||= { ts: [], prompts: [] });
  grouped[d][e.proj].ts.push(e.ts);
  if (e.role === 'user') grouped[d][e.proj].prompts.push({ t: e.ts, x: e.text });
}

let out = `Session scan since ${since}  (offset ${OFFSET / 60000}m from UTC)\n`;
out += `wall = first..last event  |  active = sum of gaps <= 12m (a floor)\n`;

const dayTotals = [];
for (const d of Object.keys(grouped).sort()) {
  out += `\n\n===== ${d} =====\n`;
  let dayWall = 0;
  const spans = [];
  for (const p of Object.keys(grouped[d]).sort()) {
    const o = grouped[d][p];
    const ts = o.ts.sort((a, b) => a - b);
    let active = 0;
    for (let i = 1; i < ts.length; i++) {
      const dt = ts[i] - ts[i - 1];
      if (dt <= GAP) active += dt;
    }
    const wall = ts.at(-1) - ts[0];
    dayWall += wall;
    spans.push([ts[0], ts.at(-1)]);
    const fmt = (ms) => `${Math.floor(ms / 3600000)}h${String(Math.round((ms % 3600000) / 60000)).padStart(2, '0')}m`;
    out += `\n--- ${p} | ${hm(ts[0])}-${hm(ts.at(-1))} | wall ${fmt(wall)} | active ${fmt(active)} | ${o.prompts.length} prompts\n`;
    for (const pr of o.prompts) {
      out += `  [${hm(pr.t)}] ${pr.x.slice(0, 300)}\n`;
    }
  }
  // union of the day's spans: projects worked in parallel must not be counted twice
  spans.sort((a, b) => a[0] - b[0]);
  let union = 0;
  let [cs, ce] = spans[0];
  for (const [s, e] of spans.slice(1)) {
    if (s <= ce) ce = Math.max(ce, e);
    else {
      union += ce - cs;
      [cs, ce] = [s, e];
    }
  }
  union += ce - cs;
  dayTotals.push([d, dayWall, union]);
}

const f = (ms) => `${Math.floor(ms / 3600000)}h ${String(Math.round((ms % 3600000) / 60000)).padStart(2, '0')}m`;
out += `\n\n===== DAY TOTALS =====\n`;
out += `date        sum-of-projects   elapsed-span\n`;
for (const [d, sum, union] of dayTotals) {
  const flag = sum - union > 15 * 60 * 1000 ? '   <- projects overlap' : '';
  out += `${d}  ${f(sum).padEnd(16)}  ${f(union)}${flag}\n`;
}
out += `
sum-of-projects double counts when two projects were worked in the same window.
elapsed-span is first to last event that day across everything - the real ceiling.
Apportion within the span; never bill more than it. Days with no session activity
are absent above - check git before assuming they were idle.
`;

if (outFile) {
  fs.writeFileSync(outFile, out);
  console.log(`wrote ${outFile} (${events.length} events, ${Object.keys(grouped).length} days)`);
} else {
  console.log(out);
}
