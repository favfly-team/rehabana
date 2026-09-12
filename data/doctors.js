/**
 * Static doctor profiles.
 *
 * TEMPORARY DATA SOURCE — this file is the stand-in for a future Prismic
 * `doctor` custom type. Every field here maps 1:1 to a field we will create in
 * Prismic, so swapping this out later is a data-layer change only: the page and
 * components never need to be rewritten.
 *
 * NOTE ON CONTENT: `name`, `credentials`, `designation`, `image`, `lead` and
 * `authorUid` come from the live Prismic data. Everything else (education,
 * experience, certifications, publications, memberships, awards, registration
 * number, years of experience) is PLACEHOLDER content modelled on a LinkedIn
 * profile and MUST be replaced with the details the client sends over.
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
      "Rehabilitation physician focused on neuro recovery, spasticity management and long-term functional independence.",

    image: {
      url: "https://images.prismic.io/rehabana/aZvDh8FoBIGEgoiU_DSC_2293.JPG?auto=format,compress&rect=1000,0,4000,4000&w=800&h=1000",
      alt: "Dr Kaustav Basu Thakur, MBBS, MD – PMR in Kolkata",
      width: 800,
      height: 1000,
    },

    // Reserved for future use — the grid card deliberately shows name + role only
    cardSummary:
      "Leads Rehabana's doctor-led rehab programs for stroke, spinal cord injury and neuro-pain patients.",

    // ==== BOOKING CARD ====
    // Only facts that appear nowhere else on the page. Experience, speciality
    // and locations deliberately live in `stats` and the hero instead — having
    // them here too read as repetition.
    quickFacts: [
      { label: "Languages", value: "English, Bengali, Hindi" },
      { label: "Registration", value: "WBMC Reg. No. — to be added" },
      { label: "Availability", value: "By appointment" },
    ],

    // ==== HEADLINE STATS ====
    // Keep these factual — `value` is rendered large and reads as a claim.
    stats: [
      { value: "12+", label: "Years in rehabilitation medicine" },
      { value: "2", label: "Rehabana centres — Saltlake & Kalighat" },
      { value: "8", label: "Neuro & pain conditions treated" },
    ],

    // ==== CONDITIONS TREATED ====
    // `serviceUid` points at an existing Prismic `service_page`. When it
    // resolves, the tile shows that page's featured image and links to it —
    // real photography plus an internal link. Without one it renders plain.
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
        label: "Traumatic Brain Injury",
        serviceUid: "treatment-of-traumatic-brain-injury-in-kolkata",
      },
      {
        label: "Parkinson's Disease & Movement Disorders",
        serviceUid: "parkinsons-treatment-in-kolkata",
      },
      { label: "Pain & Spasticity Management", serviceUid: "pain-spasticity" },
      {
        label: "Musculoskeletal Rehabilitation",
        serviceUid: "physiotherapy-in-kolkata",
      },
      {
        label: "Post-operative Rehabilitation",
        serviceUid: "post-surgery-rehabilitation-centre",
      },
      {
        label: "Peripheral Neuropathy",
        serviceUid: "peripheral-neuropathy-treatment-in-kolkata",
      },
    ],

    // ==== ABOUT ====
    lead: "Dr Kaustav Basu Thakur is a specialist in Physical Medicine and Rehabilitation (PMR) based in Kolkata, focusing on patient recovery, rehabilitation planning, and long-term functional improvement.",
    about: [
      "As a rehabilitation physician, Dr Basu Thakur works at the point where medical treatment ends and real recovery begins. His practice centres on patients living with the after-effects of stroke, spinal cord injury, traumatic brain injury and progressive neurological conditions — people for whom progress is measured not in test reports but in standing up, walking again, speaking, and returning to the life they had.",
      "At Rehabana he leads the multidisciplinary review process: every patient's program is designed with physiotherapists, occupational therapists, speech-language pathologists, psychologists and rehab nurses, then reassessed at fixed intervals so families always know what is improving, what is not, and why. He believes rehabilitation goals must be written in the patient's own words, not in clinical shorthand.",
      "Alongside clinical work he is involved in training junior physiatrists and therapists, and in raising awareness of PMR as a specialty in Eastern India — a region where dedicated, doctor-led neuro rehabilitation is still uncommon.",
    ],

    // ==== PROCEDURES / INTERVENTIONS ====
    procedures: [
      "Botulinum toxin injection for focal spasticity",
      "Ultrasound and fluoroscopy-guided nerve blocks",
      "Intra-articular and soft tissue injections",
      "Electrodiagnostic evaluation (EMG / NCV)",
      "Prosthetic and orthotic prescription",
      "Gait and functional mobility assessment",
    ],

    // ==== EDUCATION ====
    education: [
      {
        degree: "MD — Physical Medicine & Rehabilitation",
        institution:
          "Institute of Post Graduate Medical Education & Research (IPGMER), Kolkata",
        period: "Placeholder — year to be confirmed",
      },
      {
        degree: "MBBS",
        institution: "Placeholder — medical college to be confirmed",
        period: "Placeholder — year to be confirmed",
      },
    ],

    // ==== EXPERIENCE ====
    experience: [
      {
        role: "Consultant Physiatrist & Clinical Lead",
        organisation: "Rehabana Neuro Rehab Centre, Kolkata",
        period: "Present",
        description:
          "Leads the doctor-led rehabilitation program across the Saltlake and Kalighat centres, heading multidisciplinary case reviews and inpatient neuro rehab pathways.",
      },
      {
        role: "Consultant, Physical Medicine & Rehabilitation",
        organisation: "Placeholder — previous hospital to be confirmed",
        period: "Placeholder",
        description:
          "Placeholder — responsibilities and focus areas to be supplied by the client.",
      },
      {
        role: "Senior Resident, PMR",
        organisation: "Placeholder — institution to be confirmed",
        period: "Placeholder",
        description:
          "Placeholder — responsibilities and focus areas to be supplied by the client.",
      },
    ],

    // ==== CERTIFICATIONS & TRAINING ====
    certifications: [
      {
        title:
          "Certified Course in Spasticity Management & Botulinum Toxin Therapy",
        issuer: "Placeholder — issuing body",
        period: "Placeholder",
      },
      {
        title: "Advanced Training in Neurological Rehabilitation",
        issuer: "Placeholder — issuing body",
        period: "Placeholder",
      },
      {
        title: "Musculoskeletal Ultrasound for Interventional Pain Management",
        issuer: "Placeholder — issuing body",
        period: "Placeholder",
      },
    ],

    // ==== PUBLICATIONS & RESEARCH ====
    publications: [
      {
        title: "Placeholder — paper title, exactly as published",
        source: "Journal name · Volume(Issue)",
        period: "Year",
        url: "",
      },
      {
        title: "Placeholder — second publication title",
        source: "Journal name · Volume(Issue)",
        period: "Year",
        url: "",
      },
    ],

    // ==== MEMBERSHIPS ====
    memberships: [
      "Indian Association of Physical Medicine & Rehabilitation (IAPMR)",
      "Placeholder — state / regional PMR association",
      "Placeholder — additional professional body",
    ],

    // ==== AWARDS & RECOGNITION ====
    awards: [
      {
        title: "Placeholder — award or recognition",
        issuer: "Placeholder — awarding body",
        period: "Year",
      },
    ],

    // ==== TALKS, CONFERENCES & MEDIA ====
    talks: [
      {
        title: "Placeholder — talk or conference session title",
        issuer: "Placeholder — conference / venue",
        period: "Year",
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
        "Dr Kaustav Basu Thakur, MBBS, MD – PMR, is a consultant physiatrist at Rehabana Kolkata specialising in stroke, spinal cord injury and neuro-pain rehabilitation.",
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
