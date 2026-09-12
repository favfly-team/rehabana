/**
 * One-off content migration: data/doctors.js -> the Prismic `doctor` type.
 *
 * RUN IT WITH JITI, NOT PLAIN NODE:
 *
 *   node_modules/.bin/jiti scripts/migrate-doctor.js
 *
 * package.json has no `"type": "module"`, so a bare `node` run would read
 * data/doctors.js as CommonJS and choke on its `export` statements. jiti (a
 * Next.js dependency, already installed) transpiles both files on the fly.
 *
 * NEEDS A WRITE TOKEN. Add it to .env.local (NOT .env — that file is tracked
 * by git in this repo, so a secret placed there would be committed):
 *
 *   PRISMIC_WRITE_TOKEN=...
 *
 * Prismic dashboard -> Settings -> API & Security -> Migration API -> generate.
 * It is NOT the same as PRISMIC_ACCESS_TOKEN, which is read-only.
 *
 * SAFE TO RUN TWICE. If a `doctor` document already exists with the same UID,
 * the script updates it instead of creating a duplicate.
 *
 * WHAT IT LEAVES ALONE, deliberately:
 *   - Social profile URLs. data/doctors.js holds "#" placeholders, not real
 *     links; writing those would put dead anchors on a named physician's page.
 *     The page hides an empty social row, so it simply will not render.
 *   - Awards. There are none in the source content.
 *   - The TeamSection card link, which the user is setting by hand.
 *
 * Documents are created as DRAFTS. Nothing goes live until someone clicks
 * Publish in the editor.
 */

import dotenv from "dotenv";
import * as prismic from "@prismicio/client";

// .env.local first, and it wins — `.env` is tracked by git in this repo, so a
// write token put there would be committed. `.env*.local` is gitignored.
dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

import { doctors } from "../data/doctors.js";
import sm from "../slicemachine.config.json";

const REPOSITORY =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

/** Only this one doctor for now; pass a slug to target another. */
const TARGET_SLUG = process.argv[2] || "dr-kaustav-basu-thakur";

/**
 * data/doctors.js icon keys -> the Select options on the custom type.
 *
 * The editor picks a plain-English label; the component maps it back to an
 * icon. Keeping the two lists in step matters — an unrecognised value falls
 * back to the neutral medical icon rather than breaking the row.
 */
const ICON_LABELS = {
  injection: "Injection",
  imaging: "Scan / imaging",
  joint: "Bone / joint",
  diagnostics: "Diagnostics",
  orthotics: "Supportive care / orthotics",
  gait: "Walking / gait",
  robotics: "Robotics",
};
const DEFAULT_ICON_LABEL = "General medical";

/** A rich-text value: one node per paragraph. */
const richText = (paragraphs) =>
  (Array.isArray(paragraphs) ? paragraphs : [paragraphs])
    .filter(Boolean)
    .map((text) => ({ type: "paragraph", text, spans: [] }));

/** An external link value, or undefined so the field stays empty. */
const webLink = (url) =>
  url && url !== "#" ? { link_type: "Web", url, target: "_blank" } : undefined;

/** Pull a quick-fact value out by its label. */
const quickFact = (doctor, label) =>
  doctor.quickFacts?.find((fact) => fact.label === label)?.value || "";

async function main() {
  const doctor = doctors.find((entry) => entry.slug === TARGET_SLUG);
  if (!doctor) {
    throw new Error(
      `No doctor with slug "${TARGET_SLUG}" in data/doctors.js. ` +
        `Available: ${doctors.map((d) => d.slug).join(", ")}`,
    );
  }

  const writeToken = process.env.PRISMIC_WRITE_TOKEN;
  if (!writeToken) {
    throw new Error(
      "PRISMIC_WRITE_TOKEN is not set. Generate one at\n" +
        `  https://${REPOSITORY}.prismic.io/settings/\n` +
        "under API & Security -> Migration API, then add it to .env.",
    );
  }

  const client = prismic.createWriteClient(REPOSITORY, {
    writeToken,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  // ---- Resolve the documents we link to -------------------------------------
  //
  // Content relationships need real documents, so fetch them first and fail
  // loudly on anything missing rather than writing a dangling link.

  const serviceUids = doctor.specialities
    .map((item) => item.serviceUid)
    .filter(Boolean);

  const servicePages = serviceUids.length
    ? await client.getAllByUIDs("service_page", serviceUids)
    : [];
  const serviceByUid = new Map(servicePages.map((doc) => [doc.uid, doc]));

  for (const uid of serviceUids) {
    if (!serviceByUid.has(uid)) {
      console.warn(
        `  ! service_page "${uid}" not found — that tile will have no link.`,
      );
    }
  }

  let authorDoc;
  if (doctor.authorUid) {
    authorDoc = await client
      .getByUID("author", doctor.authorUid)
      .catch(() => undefined);
    if (!authorDoc) {
      console.warn(
        `  ! author "${doctor.authorUid}" not found — blog articles will not ` +
          "be linked to this profile.",
      );
    }
  }

  // Is there already a document for this person?
  const existing = await client
    .getByUID("doctor", doctor.slug)
    .catch(() => undefined);

  const migration = prismic.createMigration();

  // The portrait. doctor.image.url is the cropped 800x1000 render, which is
  // the framing the design expects — so the asset is created from that URL
  // rather than from the uncropped original on the author document.
  const photo = migration.createAsset(doctor.image.url, `${doctor.slug}.jpg`, {
    alt: doctor.image.alt,
  });

  const data = {
    // ---- Profile ----
    full_name: doctor.name,
    qualifications: doctor.credentials,
    role_label: doctor.eyebrow,
    job_title: doctor.designation,
    specialisation_summary: doctor.headline,
    profile_photo: photo,
    blog_author_profile: authorDoc,
    short_introduction: richText(doctor.lead),
    full_biography: richText(doctor.about),
    key_numbers: doctor.stats.map((stat) => ({
      number: stat.value,
      what_it_means: stat.label,
    })),

    // ---- Practice ----
    conditions_treated: doctor.specialities.map((item) => ({
      condition_name: item.label,
      service_page: item.serviceUid
        ? serviceByUid.get(item.serviceUid)
        : undefined,
    })),
    procedures: doctor.procedures.map((item) => ({
      procedure_name: item.label,
      icon: ICON_LABELS[item.icon] || DEFAULT_ICON_LABEL,
    })),
    registration_number: quickFact(doctor, "Registration"),
    languages_spoken: quickFact(doctor, "Languages"),
    consulting_hours: quickFact(doctor, "Availability"),

    // ---- Credentials ----
    education: doctor.education.map((item) => ({
      degree: item.degree,
      college_or_institute: item.institution,
      year: item.period,
      certificate_number: item.credentialId || "",
      verification_link: webLink(item.credentialUrl),
      certificate_file: undefined, // scans still to come from the client
    })),
    work_experience: doctor.experience.map((item) => ({
      role_title: item.role,
      hospital_or_organisation: item.organisation,
      period: item.period,
      description: item.description,
    })),
    certifications: doctor.certifications.map((item) => ({
      certification_title: item.title,
      issued_by: item.issuer,
      year: item.period,
      certificate_number: item.credentialId || "",
      verification_link: webLink(item.credentialUrl),
      certificate_file: undefined,
    })),
    publications: doctor.publications.map((item) => ({
      paper_title: item.title,
      journal_and_issue: item.source,
      year: item.period,
      doi: item.doi || "",
      article_link: webLink(item.url),
    })),

    // ---- Recognition & Links ----
    memberships: doctor.memberships.map((membership) => ({ membership })),
    awards: doctor.awards.map((item) => ({
      award_title: item.title,
      awarded_by: item.issuer,
      year: item.period,
    })),
    workshops: doctor.workshops.map((item) => ({
      workshop_title: item.title,
      conference_or_venue: item.issuer,
      year: item.period,
    })),
    // Social links stay empty on purpose — see the header comment.

    // ---- SEO ----
    meta_title: doctor.seo.title,
    meta_description: doctor.seo.description,
  };

  if (existing) {
    console.log(`Updating existing doctor document "${doctor.slug}".`);
    migration.updateDocument({ ...existing, data }, doctor.name);
  } else {
    console.log(`Creating new doctor document "${doctor.slug}".`);
    migration.createDocument(
      { type: "doctor", uid: doctor.slug, lang: "en-us", data },
      doctor.name,
    );
  }

  await client.migrate(migration, {
    reporter: (event) => console.log(`  ${event.type}`),
  });

  console.log(
    `\nDone. Open https://${REPOSITORY}.prismic.io and publish the draft.`,
  );
}

main().catch((error) => {
  console.error(`\nMigration failed: ${error.message}`);
  process.exitCode = 1;
});
