/**
 * One-off: fill in a doctor document's social profile links.
 *
 *   node_modules/.bin/jiti scripts/set-doctor-socials.js
 *
 * Needs PRISMIC_WRITE_TOKEN in .env.local (.env is tracked by git here, so a
 * secret must not go in it).
 *
 * The URLs below are the ones the client had already published on the team
 * card in Prismic, with the app-generated tracking parameters stripped:
 * `utm_source=share...ios_app` off LinkedIn, and the `mibextid`/`share_url`
 * chain plus a trailing "#" off Facebook. Both belong in `sameAs` structured
 * data, where a tracking query string is noise.
 *
 * Writes a DRAFT. Publish it in the editor to make it live.
 */

import dotenv from "dotenv";
import * as prismic from "@prismicio/client";

dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

import sm from "../slicemachine.config.json";

const REPOSITORY =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

const UID = "dr-kaustav-basu-thakur";

/** Field name on the `doctor` type -> URL. */
const SOCIALS = {
  linkedin_url: "https://www.linkedin.com/in/dr-kaustav-basu-thakur-65515418",
  facebook_url: "https://www.facebook.com/painphysician87kbt",
};

const webLink = (url) => ({ link_type: "Web", url, target: "_blank" });

async function main() {
  const writeToken = process.env.PRISMIC_WRITE_TOKEN;
  if (!writeToken) {
    throw new Error(
      "PRISMIC_WRITE_TOKEN is not set — add it to .env.local. Generate one at\n" +
        `  https://${REPOSITORY}.prismic.io/settings/ (API & Security -> Migration API)`,
    );
  }

  const client = prismic.createWriteClient(REPOSITORY, {
    writeToken,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  const existing = await client.getByUID("doctor", UID);

  const migration = prismic.createMigration();

  migration.updateDocument(
    {
      ...existing,
      data: {
        ...existing.data,
        ...Object.fromEntries(
          Object.entries(SOCIALS).map(([field, url]) => [field, webLink(url)]),
        ),
      },
    },
    existing.data.full_name || UID,
  );

  for (const [field, url] of Object.entries(SOCIALS)) {
    console.log(`  ${field} -> ${url}`);
  }

  await client.migrate(migration, {
    reporter: (event) => console.log(`  ${event.type}`),
  });

  console.log(
    `\nDone — a draft is waiting in https://${REPOSITORY}.prismic.io. Publish it.`,
  );
}

main().catch((error) => {
  console.error(`\nFailed: ${error.message}`);
  process.exitCode = 1;
});
