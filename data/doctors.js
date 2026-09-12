/**
 * Static doctor profiles.
 *
 * TEMPORARY DATA SOURCE — the stand-in for a future Prismic `doctor` custom
 * type. Every field maps 1:1 to a field we will create there, so swapping this
 * out later is a data-layer change only.
 *
 * PROVENANCE — everything below is real, taken from content the client has
 * already published in Prismic:
 *   - the `author` document `dr-kaustav-basu-thakur` (name, credentials, photo)
 *   - the `service_page` document `pmr-rehab-physician`, whose team_section
 *     "details" slice carries his full bio, memberships, publications and
 *     workshop history
 * Wording is lightly tidied (typos, journal abbreviations) but no fact has been
 * added, inferred or embellished.
 *
 * STILL MISSING — every one of these renders the literal text "To be added" or
 * is left empty until the client supplies it. Nothing is invented to fill them:
 *   - medical council registration number
 *   - languages spoken
 *   - consulting days / hours
 *   - year the MD was completed, and years for the two posts in `experience`
 *   - awards (none are mentioned anywhere in the existing content)
 *   - degree / certificate scans, and DOIs or links for the publications
 *   - LinkedIn profile URL
 */

export const doctors = [
  {
    // ==== IDENTITY ====
    slug: "dr-kaustav-basu-thakur",
    authorUid: "dr-kaustav-basu-thakur",
    name: "Dr Kaustav Basu Thakur",
    credentials: "MBBS, MD – PMR",
    eyebrow: "Consultant Physiatrist",
    designation: "Physical Medicine & Rehabilitation (PMR) Specialist, Kolkata",
    headline:
      "Special interests in stroke rehabilitation, spinal cord injury rehabilitation, rheumatological rehab and musculoskeletal medicine.",

    image: {
      url: "https://images.prismic.io/rehabana/aZvDh8FoBIGEgoiU_DSC_2293.JPG?auto=format,compress&rect=1000,0,4000,4000&w=800&h=1000",
      alt: "Dr Kaustav Basu Thakur, MBBS, MD – PMR in Kolkata",
      width: 800,
      height: 1000,
    },

    // ==== BOOKING CARD ====
    // Awaiting the client — shown as "To be added" rather than guessed.
    quickFacts: [
      { label: "Registration", value: "To be added" },
      { label: "Languages", value: "To be added" },
      { label: "Availability", value: "To be added" },
    ],

    // ==== HEADLINE STATS ====
    // All three are derived from facts in the source content: MBBS 2012,
    // five published papers, and the two Rehabana centres in the site footer.
    stats: [
      { value: "14+", label: "Years since qualifying (MBBS, 2012)" },
      { value: "5", label: "Peer-reviewed publications" },
      { value: "2", label: "Rehabana centres — Saltlake & Kalighat" },
    ],

    // ==== CONDITIONS TREATED ====
    // His stated special interests, mapped to the matching Prismic
    // `service_page` so each tile shows real photography and links through.
    // "Rheumatological rehabilitation" has no service page yet, so it renders
    // as a plain tile.
    specialities: [
      {
        label: "Stroke Rehabilitation",
        serviceUid: "stroke-rehabilitation-in-kolkata",
      },
      {
        label: "Spinal Cord Injury Rehabilitation",
        serviceUid: "spinal-cord-rehabilitation-in-kolkata",
      },
      {
        label: "Musculoskeletal Medicine",
        serviceUid: "physiotherapy-in-kolkata",
      },
      {
        label: "Interventional Pain Management",
        serviceUid: "pain-spasticity",
      },
      { label: "Rheumatological Rehabilitation", serviceUid: "" },
    ],

    // ==== ABOUT ====
    lead: "Dr Basu Thakur — known to many as Dr KBT — is a physiatrist at Rehabana, Kolkata, working across neurorehabilitation, spasticity and interventional pain management.",
    about: [
      "He qualified MBBS from Bankura Sammilani Medical College in 2012, and completed his postgraduate degree in Physical Medicine & Rehabilitation at the Regional Institute of Medical Sciences (RIMS), Imphal, Manipur. During that tenure he attended multiple hands-on workshops on ultrasound-guided specialised injections, spasticity and pain management.",
      "After his MD he served as Senior Resident at the All India Institute of Medical Sciences (AIIMS), Bhubaneswar, where he gained experience in fluoroscopy-guided and ultrasound-guided pain interventions, robotic neurorehabilitation and surgical rehabilitation.",
      "He has two papers in a national journal as first author and several more as co-author in national and international journals. As a consultant at Rehabana he aims to provide high-quality, advanced neurorehabilitation to every patient.",
    ],

    // ==== PROCEDURES / INTERVENTIONS ====
    // Drawn from the experience described in his bio — nothing added.
    // `icon` is a key, not a component, so this stays plain serialisable data
    // and maps onto a Prismic select field later. Keys live in PROCEDURE_ICONS
    // in components/doctor/index.jsx; an unknown key falls back to a neutral
    // medical icon.
    procedures: [
      {
        label: "Ultrasound-guided specialised injections",
        icon: "injection",
      },
      {
        label: "Fluoroscopy-guided pain interventions",
        icon: "imaging",
      },
      { label: "Spasticity management", icon: "joint" },
      { label: "Interventional pain management", icon: "diagnostics" },
      { label: "Robotic neurorehabilitation", icon: "robotics" },
      { label: "Surgical rehabilitation", icon: "orthotics" },
    ],

    // ==== EDUCATION ====
    // Optional per entry: `credentialId`, `credentialUrl`, and `certificate`
    // ({ url, alt }) for a scan — an image opens in a lightbox, a .pdf opens in
    // a new tab. All three are empty until the client sends documents.
    education: [
      {
        degree: "MD — Physical Medicine & Rehabilitation",
        institution:
          "Regional Institute of Medical Sciences (RIMS), Imphal, Manipur",
        period: "Year to be added",
        credentialId: "",
        credentialUrl: "",
        certificate: null,
      },
      {
        degree: "MBBS",
        institution: "Bankura Sammilani Medical College",
        period: "2012",
        credentialId: "",
        credentialUrl: "",
        certificate: null,
      },
    ],

    // ==== EXPERIENCE ====
    experience: [
      {
        role: "Consultant Physiatrist",
        organisation: "Rehabana Neuro Rehab Centre, Kolkata",
        period: "Present",
        description:
          "Provides advanced neurorehabilitation, spasticity management and interventional pain care across the Saltlake and Kalighat centres.",
      },
      {
        role: "Senior Resident, Physical Medicine & Rehabilitation",
        organisation:
          "All India Institute of Medical Sciences (AIIMS), Bhubaneswar",
        period: "Years to be added",
        description:
          "Gained experience in fluoroscopy-guided and ultrasound-guided pain interventions, robotic neurorehabilitation and surgical rehabilitation.",
      },
    ],

    // ==== CERTIFICATIONS & TRAINING ====
    certifications: [
      {
        title: "Fellowship in Pain Management",
        issuer: "Aesculap Academy, Germany — at Daradia Pain Clinic",
        period: "2021",
        credentialId: "",
        credentialUrl: "",
        certificate: null,
      },
    ],

    // ==== PUBLICATIONS & RESEARCH ====
    // Citations as published on the PMR service page.
    //
    // `url` should always be https://doi.org/<doi> — the DOI resolver is
    // permanent, unlike a journal's own domain. (The Indian Journal of PMR's
    // old domain, ijpmr.com, has lapsed and now redirects to a gambling site,
    // so never link a journal homepage.)
    //
    // Only entries with a verified DOI carry a link; the rest render without a
    // button rather than with a guessed one that dead-ends or, worse, resolves
    // to somebody else's paper.
    publications: [
      {
        // Verified: DOI resolves to this article at cisejournal.org, and
        // Kaustav Basu Thakur is listed as an author (AIIMS Bhubaneswar).
        // Title corrected to the one actually published — the service-page
        // citation had an earlier working title.
        title:
          "Can platelet-rich plasma injections provide better pain relief and functional outcomes in persons with common shoulder diseases: a meta-analysis of randomized controlled trials",
        source: "Clinics in Shoulder and Elbow · 25(1):73–89",
        period: "2022",
        doi: "10.5397/cise.2021.00353",
        url: "https://doi.org/10.5397/cise.2021.00353",
      },
      {
        title:
          "Efficacy of intradiscal ozone nucleolysis in improving pain and function in patients with lumbar prolapsed intervertebral disc",
        source: "Global Journal for Research Analysis · 8(5):1–4",
        period: "2019",
        doi: "",
        url: "",
      },
      {
        title:
          "Correlation of radio-anatomic site of stroke with motor recovery and functional outcome in ischaemic stroke patients: a hospital-based prospective cohort study",
        source:
          "Indian Journal of Physical Medicine & Rehabilitation · 28(4):115–121",
        period: "2017",
        doi: "",
        url: "",
      },
      {
        title:
          "Efficacy of single-dose intra-articular injection of high-molecular-weight hyaluronic acid in patients suffering from primary osteoarthritis of the knee",
        source:
          "Indian Journal of Physical Medicine & Rehabilitation · 28(3):89–94",
        period: "2017",
        doi: "",
        url: "",
      },
      {
        title:
          "Prevalence of disability in low back pain: a hospital-based study",
        source: "Global Journal for Research Analysis · 6(9):13–15",
        period: "2017",
        doi: "",
        url: "",
      },
    ],

    // ==== MEMBERSHIPS ====
    memberships: [
      "Life Member, Indian Association of Physical Medicine & Rehabilitation (IAPMR)",
      "Life Member, Indian Society for the Study of Pain (ISSP)",
      "Life Member, Indian Federation of Neurorehabilitation (IFNR)",
      "Life Member, International Society for Musculoskeletal Ultrasound in Pain Medicine (ISPM)",
      "Life Member, St. John Ambulance Association & Indian Red Cross Society (2015)",
    ],

    // ==== AWARDS & RECOGNITION ====
    // TO BE ADDED — no awards appear anywhere in the existing content, so this
    // stays empty. The section hides itself rather than showing a bare heading.
    awards: [],

    // ==== WORKSHOPS & TRAINING ====
    // His "Professional Development" list, verbatim. Deliberately not labelled
    // "Talks" — these are workshops he attended, not sessions he delivered.
    workshops: [
      {
        title: "Cadaveric needling and volunteer scanning",
        issuer: "ICMU 2023 — Musculoskeletal Ultrasound in Pain, Bengaluru",
        period: "2023",
      },
      {
        title: "Botulinum toxin injections in upper and lower limb spasticity",
        issuer: "IFNRCON 2023, Mumbai",
        period: "2023",
      },
      {
        title: "Intensive musculoskeletal ultrasonography",
        issuer: "IRACON 2022, Indore",
        period: "2022",
      },
      {
        title: "Lifestyle disease rehabilitation and prolotherapy",
        issuer: "IAPMRCON 2020, Kozhikode",
        period: "2020",
      },
      {
        title: "Radiofrequency ablation in interventional pain management",
        issuer: "RIMS, Imphal",
        period: "2018",
      },
      {
        title:
          "Ultrasound-guided interventions in spasticity and regional pain",
        issuer: "IAPMRCON 2017, Kolkata",
        period: "2017",
      },
      {
        title: "Fluoroscopy-guided interventional pain management",
        issuer: "IAPMRCON 2017, Kolkata",
        period: "2017",
      },
      {
        title: "Percutaneous vertebroplasty",
        issuer: "IAPMRCON 2016, Imphal",
        period: "2016",
      },
    ],

    // ==== LINKS ====
    social: {
      linkedin: "",
    },

    // ==== SEO ====
    seo: {
      title:
        "Dr Kaustav Basu Thakur — PMR & Rehabilitation Physician in Kolkata | Rehabana",
      description:
        "Dr Kaustav Basu Thakur, MBBS, MD – PMR, is a consultant physiatrist at Rehabana Kolkata specialising in stroke and spinal cord injury rehabilitation, spasticity and interventional pain management.",
    },
  },
];

/** Profile pages live under the team section: /team/<slug>. */
export const DOCTOR_BASE_PATH = "/team";

const SITE_URL = "https://rehabana.com";

/** Site-relative path to a doctor's profile page. */
export const getDoctorPath = (doctor) => `${DOCTOR_BASE_PATH}/${doctor.slug}`;

/** Absolute URL to a doctor's profile page, for canonicals and schema. */
export const getDoctorUrl = (doctor) => `${SITE_URL}${getDoctorPath(doctor)}`;

/** Look up a doctor by their page slug. */
export const getDoctorBySlug = (slug) =>
  doctors.find((doctor) => doctor.slug === slug) ?? null;

/**
 * Normalise a display name so team-grid titles coming from Prismic
 * ("Dr. Kaustav Basu Thakur", "dr kaustav basu thakur") still resolve.
 */
const normaliseName = (name = "") =>
  name
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

/** Look up a doctor by their display name, or null. */
export const getDoctorByName = (name) => {
  if (!name) return null;
  const target = normaliseName(name);
  return (
    doctors.find((doctor) => normaliseName(doctor.name) === target) ?? null
  );
};

/** Resolve a profile path from a team member's display name, or null. */
export const getDoctorPathByName = (name) => {
  const match = getDoctorByName(name);
  return match ? getDoctorPath(match) : null;
};

export default doctors;
