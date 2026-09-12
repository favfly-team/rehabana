---
name: clickup-timesheet
description: |
  Reconstruct what was actually built in a month from Claude session transcripts and
  git history, then upload it to ClickUp as tasks with tracked time. Use when the user
  asks to update ClickUp with this month's work, log hours, reconcile a timesheet,
  catch up on unlogged time, or wants a summary of tasks done this month or last month.
  Always presents the summary for approval BEFORE writing anything to ClickUp.
allowed-tools:
  - Bash
  - Read
  - Write
  - Glob
  - Grep
  - AskUserQuestion
  - mcp__clickup__clickup_filter_tasks
  - mcp__clickup__clickup_get_task
  - mcp__clickup__clickup_get_time_entries
  - mcp__clickup__clickup_get_custom_fields
  - mcp__clickup__clickup_create_task
  - mcp__clickup__clickup_update_task
  - mcp__clickup__clickup_add_time_entry
  - mcp__clickup__clickup_create_task_comment
---

# ClickUp Timesheet

Turn real evidence — session transcripts and git commits — into ClickUp tasks with tracked time.

**Two phases, with a hard stop between them.** Phase A reports. Phase B writes. Never run B without explicit approval.

---

## Phase A — Investigate and report

### A1. Resolve the project

Work out which project this is. If it is not unambiguous, **stop and ask** — do not guess.

The project is clear if the user named it, or if the working directory maps to exactly one ClickUp list. Otherwise ask, offering the candidates you found.

Once resolved, pin down three things and state them back:

| Thing | How to find it |
| --- | --- |
| Repo path | Usually the cwd. Check for sibling repos if the project spans more than one. |
| Session directory | `~/.claude/projects/<slug>/` where `<slug>` is the absolute path with `:`, `\` and `/` all replaced by `-` (e.g. `d:\Favfly_myteam\smcjewels` → `d--Favfly-myteam-smcjewels`) |
| ClickUp list ID | See [Resolving the list](#resolving-the-list) |

### A2. Set the window

Default to **the current month plus the previous month** — the previous month is almost always partly unlogged. Confirm the window in your report.

### A3. Gather evidence from three sources

Run all three. Any one alone will miss work.

**Session transcripts** — `scripts/scan-sessions.mjs` walks every project's `.jsonl`, extracts timestamped user prompts, and reports per-day/per-project windows:

```bash
node .claude/skills/clickup-timesheet/scripts/scan-sessions.mjs <since-YYYY-MM-DD> [out.txt]
```

**Git history** — catches work done without Claude, which sessions cannot see:

```bash
git log --since=<start> --until=<end> --date=format:'%m-%d %H:%M' --pretty=format:'%ad %s'
```

Scan sibling repos too if the project spans several.

**ClickUp existing entries** — so you never double-log:

```
clickup_get_time_entries(start_date, end_date)
```

### A4. Compute time honestly

Two numbers come out of the scanner:

- **Active** — sum of gaps ≤12 min between events. A *floor*; it misses thinking, dashboard work and client messaging.
- **Wall clock** — first to last event that day.

**Report the wall-clock figure as the estimate**, and say so. Never invent a number that no evidence supports. Where git commits extend past the last session event, extend the window to the last commit.

The scanner's `DAY TOTALS` block prints two columns. `sum-of-projects` double-counts when two projects were worked in the same window; `elapsed-span` is first to last event across everything that day and is **the ceiling for that day**. When a day is flagged `projects overlap`, apportion the span between the projects — never let the day's billed total exceed it.

### A5. Drop non-billable time

Exclude these from the total. Still *list* them so the decision is visible, marked as excluded:

- ClickUp admin — creating, deleting, re-uploading, reorganising tasks
- Turning a client feedback list into a backlog
- Estimating build times
- The timesheet reconciliation itself
- Drafting client update messages

If the project has a memory or rule file saying otherwise, that wins.

### A6. Report and stop

Present a table per day: project, task, time, and whether it is already logged. Then give:

- Total reconstructed
- Already in ClickUp
- **Still to upload**
- Which existing tasks can take the time, and which need creating
- Any day with zero evidence — flag it, never fill it in

**Then stop.** Ask for approval. Do not write to ClickUp yet.

---

## Phase B — Upload (only after approval)

### B1. Match before creating

For each item, search the list for an existing task covering the same page/section/area.

**If one exists, log the time there and add a dated comment.** Do not create a duplicate. Some tasks are standing buckets that accumulate forever (ongoing product uploads, retainer work) — these keep `status: to do` and a **blank time estimate**, because a fixed estimate on a perpetual task reads as over-run the moment the next batch lands.

Only create a task where nothing relevant exists.

### B2. Create with the required custom fields

A task created without the list's grouping and filter fields **will not appear in the Hours, Requests or Sprint views** — it silently lands nowhere. Read the fields off an existing task in the same list first:

```
clickup_get_task(task_id=<any existing task>, include=["custom_fields"])
```

Then set the same shape on yours. Pass the **option UUID** for dropdowns, not the orderindex. Typical set:

| Field | Purpose |
| --- | --- |
| `Task Type` | What the view filters on — Request / Deliverable / Report / Sprint |
| `MONTH` | What the view groups on — pick the option matching the work's month |
| `Cycle` | Short text, `YYYY-MM` |
| `Request Type` | Feature or Bug |
| `Request Stage` | Shipped, for completed work |
| `Target Route` | The affected route or file |
| `Acceptance Test` | One sentence stating what proves it done |

Also set: `status` (`complete` for finished work), `priority`, `assignees`, `due_date` (the day the work happened), and `time_estimate` matching the time you are about to log — except on standing buckets.

### B3. Log time, checked first

**Before every write**, read what is already on the task:

```
clickup_get_time_entries(task_id=<id>)
```

If an entry with the same date and duration exists, **skip it** — say you skipped it. Otherwise:

```
clickup_add_time_entry(task_id, start="YYYY-MM-DD HH:MM", duration="30m",
                       description=<short, plain>, billable=true)
```

Date each entry to **when the work actually happened**, not today. Keep entries within a day non-overlapping.

### B4. Verify and report

Re-read the entries back from the API. Report a table of task, estimate, tracked, and the month total. Say plainly what was skipped as a duplicate and what was left out as non-billable.

---

## Resolving the list

`clickup_get_workspace_hierarchy` returns an **empty tree** when the list lives in a "Shared with me" space, and `clickup_get_list` by name fails for the same reason. Do not conclude the list is missing.

Instead, find any task in the folder and read its `list` field:

```
clickup_filter_tasks(folder_ids=["<folder id>"], include_closed=true)
```

Or search by a known task name. Once you have the list ID, record it so the lookup is not repeated.

---

## Rules

1. **Never write in Phase A.** Report first, always.
2. **Never invent time.** Every figure traces to a session window or a commit span.
3. **Never double-log.** Read existing entries before every write.
4. **Never backfill an empty day.** Report it as empty and let the user decide.
5. **Prefer updating over creating.** A duplicate task is worse than a long one.
6. **Date to reality.** Entries carry the date the work happened.
