/**
 * Fills in the fields of a doctor document that were added after the original
 * migration — the social profile links and the closing call to action.
 *
 *   node_modules/.bin/jiti scripts/set-doctor-content.js
 *
 * Needs PRISMIC_WRITE_TOKEN in .env.local (.env is tracked by git here, so a
 * secret must not go in it).
 *
 * Re-running is harmless: it writes the same values over the same fields and
 * touches nothing else on the document.
 *
 * The Migration API writes into a MIGRATION RELEASE, not straight to the
 * document. After this finishes, open Prismic -> Releases -> "Migration
 * Release" and publish it, or nothing changes on the site.
 */

import dotenv from "dotenv";
import * as prismic from "@prismicio/client";

dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

import sm from "../slicemachine.config.json";

const REPOSITORY =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

const UID = "dr-kaustav-basu-thakur";

/**
 * Social profiles.
 *
 * These are the URLs the client had already published on the team card, with
 * the app-generated tracking parameters stripped — `utm_source=share...ios_app`
 * off LinkedIn, and the `mibextid`/`share_url` chain plus a trailing "#" off
 * Facebook. They end up in `sameAs` structured data, where a tracking query
 * string is noise.
 */
const SOCIALS = {
  linkedin_url: "https://www.linkedin.com/in/dr-kaustav-basu-thakur-65515418",
  facebook_url: "https://www.facebook.com/painphysician87kbt",
};

/**
 * Closing call to action — the wording the page has always shown, now stored
 * as content so it can be edited without a deploy.
 *
 * `{name}` is substituted with the doctor's name at render time, so this same
 * heading works on every profile.
 */
const CTA = {
  cta_heading: "Want {name} to review your case?",
  cta_description:
    "Share your reports and we will schedule an assessment at Rehabana Saltlake or Kalighat.",
  cta_button_label: "Book a Consultation",
  cta_secondary_button_label: "Back to Team",
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

  // The second button points at the Team page as a document link rather than
  // a typed "/team" — the route resolver then owns the URL, so moving the page
  // later cannot leave a dead button behind.
  const teamPage = await client.getSingle("team_page").catch(() => null);
  if (!teamPage) {
    console.warn("  ! team_page not found — the second button will fall back");
  }

  const data = {
    ...existing.data,
    ...Object.fromEntries(
      Object.entries(SOCIALS).map(([field, url]) => [field, webLink(url)]),
    ),
    ...CTA,
    ...(teamPage && {
      cta_secondary_button_link: prismic.documentToLinkField(teamPage),
    }),
  };

  const migration = prismic.createMigration();
  migration.updateDocument(
    { ...existing, data },
    existing.data.full_name || UID,
  );

  for (const [field, value] of Object.entries({ ...SOCIALS, ...CTA })) {
    console.log(`  ${field} -> ${value}`);
  }
  if (teamPage) console.log(`  cta_secondary_button_link -> team_page`);

  await client.migrate(migration, {
    reporter: (event) => console.log(`  ${event.type}`),
  });

  console.log(
    `\nDone. Now publish the Migration Release at\n` +
      `  https://${REPOSITORY}.prismic.io/releases`,
  );
}

main().catch((error) => {
  console.error(`\nFailed: ${error.message}`);
  process.exitCode = 1;
});
