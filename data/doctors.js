/**
 * Static doctor profiles.
 *
 * TEMPORARY DATA SOURCE — this file is the stand-in for a future Prismic
 * `doctor` custom type. Every field here maps 1:1 to a field we will create in
 * Prismic, so swapping this out later is a data-layer change only: the page and
 * components never need to be rewritten.
 *
 * ⚠ CONTENT WARNING — READ BEFORE THIS GOES LIVE
 *
 * Only `name`, `credentials`, `designation`, `image`, `lead` and `authorUid`
 * are real; they come from the live Prismic author document.
 *
 * EVERYTHING ELSE IS INVENTED. The medical colleges, hospitals, employment
 * dates, certifications, journal papers, awards, conference talks and the
 * WBMC registration number were written to make the demo look finished. They
 * are not facts about this doctor. The papers do not exist.
 *
 * This is fine for a client demo and NOT fine in production: publishing
 * fabricated qualifications or a fabricated council registration number for a
 * named, practising physician is a medical-council and advertising problem,
 * not just wrong copy.
 *
 * Every invented block is marked `⚠ SAMPLE`. Grep for "SAMPLE" and for
 * DEMO_CERTIFICATE before launch — both must be gone.
 */

/**
 * DEMO ONLY — a stand-in image so the "View certificate" preview is visible
 * before the client sends real scans. It is an existing Prismic photo, not a
 * certificate. Delete this constant once every `certificate` points at a real
 * document; nothing should ship pointing here.
 */
const DEMO_CERTIFICATE =
  "https://images.prismic.io/rehabana/aZxgaMFoBIGEgrL8_20260107_111841.jpg?auto=format,compress";

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
      // ⚠ SAMPLE registration number — replace with the real WBMC number.
      { label: "Registration", value: "WBMC Reg. SAMPLE-68421" },
      { label: "Availability", value: "Mon – Sat, by appointment" },
    ],

    // ==== HEADLINE STATS ====
    // Rendered large, so each one reads as a claim. Keep them consistent with
    // the dates below: MBBS 2012 → 14 years; MD 2016 → 10 as a physiatrist.
    stats: [
      { value: "14+", label: "Years in clinical practice" },
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
    // Optional per entry, LinkedIn-style:
    //   credentialId  — registration / roll number shown under the date
    //   credentialUrl — external verification page ("Show credential")
    //   certificate   — scan of the degree. { url, alt }. An image opens in a
    //                   lightbox; a .pdf opens in a new tab.
    // Leave them out and the entry renders exactly as it does today.
    // ⚠ SAMPLE — colleges, years and the registration number are invented for
    // the demo. Replace every one of them.
    education: [
      {
        degree: "MD — Physical Medicine & Rehabilitation",
        institution:
          "Institute of Post Graduate Medical Education & Research (IPGMER) & SSKM Hospital, Kolkata",
        period: "2013 – 2016",
        credentialId: "WBMC Reg. SAMPLE-68421",
        credentialUrl:
          "https://www.nmc.org.in/information-desk/indian-medical-register/",
        certificate: {
          url: DEMO_CERTIFICATE,
          alt: "Demo image — replace with the actual MD degree scan",
        },
      },
      {
        degree: "MBBS",
        institution: "Calcutta National Medical College, Kolkata",
        period: "2006 – 2012",
        credentialId: "",
        credentialUrl: "",
        certificate: null,
      },
    ],

    // ==== EXPERIENCE ====
    // ⚠ SAMPLE — hospitals and dates invented for the demo. Replace.
    experience: [
      {
        role: "Consultant Physiatrist & Clinical Lead",
        organisation: "Rehabana Neuro Rehab Centre, Kolkata",
        period: "2022 – Present",
        description:
          "Leads the doctor-led rehabilitation program across the Saltlake and Kalighat centres, heading multidisciplinary case reviews and inpatient neuro rehab pathways.",
      },
      {
        role: "Consultant, Physical Medicine & Rehabilitation",
        organisation: "AMRI Hospitals, Dhakuria, Kolkata",
        period: "2019 – 2022",
        description:
          "Ran the outpatient physiatry clinic and the inpatient rehabilitation consult service, with a focus on post-stroke spasticity and interventional pain procedures.",
      },
      {
        role: "Senior Resident, Department of PMR",
        organisation: "IPGMER & SSKM Hospital, Kolkata",
        period: "2016 – 2019",
        description:
          "Managed the neuro-rehabilitation ward and electrodiagnostic lab, and taught postgraduate trainees in gait analysis and orthotic prescription.",
      },
    ],

    // ==== CERTIFICATIONS & TRAINING ====
    // Same optional credentialId / credentialUrl / certificate fields as
    // `education` above.
    // ⚠ SAMPLE — issuing bodies and years invented for the demo. Replace.
    certifications: [
      {
        title:
          "Certified Course in Spasticity Management & Botulinum Toxin Therapy",
        issuer: "Indian Association of Physical Medicine & Rehabilitation",
        period: "2018",
        credentialId: "SAMPLE-1042",
        credentialUrl: "",
        certificate: {
          url: DEMO_CERTIFICATE,
          alt: "Demo image — replace with the actual certificate scan",
        },
      },
      {
        title: "Advanced Course in Neurological Rehabilitation",
        issuer: "Indian Federation of Neurorehabilitation",
        period: "2020",
        credentialId: "SAMPLE-3317",
        credentialUrl: "",
        certificate: null,
      },
      {
        title: "Musculoskeletal & Interventional Ultrasound",
        issuer: "Indian Society of Musculoskeletal Ultrasound",
        period: "2021",
        credentialId: "",
        credentialUrl: "",
        certificate: null,
      },
    ],

    // ==== PUBLICATIONS & RESEARCH ====
    // Per entry: `doi` renders as "DOI 10.xxxx/…" under the year, and `url`
    // becomes a "Read publication ↗" button. For a real paper, set `url` to
    // https://doi.org/<doi> — that is the permanent, citable link.
    //
    // ⚠ SAMPLE — THESE PAPERS DO NOT EXIST. Titles, journals and volumes are
    // invented, and `doi` is left empty because a plausible-looking DOI either
    // dead-ends or lands on a real paper by someone else.
    //
    // NO EXTERNAL LINKS HERE, ON PURPOSE — an earlier version pointed at
    // ijpmr.com, which had lapsed and now 302s to a gambling site
    // (srg33.online). Journal domains go stale; a rehab clinic linking to a
    // casino is a reputational and SEO hit. So the demo links go to Rehabana's
    // own articles on the same topic, with the label saying exactly that.
    //
    // For a real paper: set `doi`, set `url` to https://doi.org/<doi> (the
    // permanent resolver, which never rots), and drop `linkLabel`.
    publications: [
      {
        title:
          "Functional Outcomes of Early Inpatient Rehabilitation Following Ischaemic Stroke: A Prospective Cohort from Eastern India",
        source: "Indian Journal of Physical Medicine & Rehabilitation · 33(2)",
        period: "2022",
        doi: "",
        url: "/stroke-rehab-in-kolkata-first-90-days-recovery-guide",
        linkLabel: "Read related article",
      },
      {
        title:
          "Botulinum Toxin Type A in Post-Stroke Upper Limb Spasticity: Dose Response and Functional Gain",
        source: "Journal of Neurosciences in Rural Practice · 12(4)",
        period: "2021",
        doi: "",
        url: "/brain-stroke-recovery",
        linkLabel: "Read related article",
      },
      {
        title:
          "Barriers to Continued Rehabilitation After Discharge: A Survey of Caregivers in Urban West Bengal",
        source: "Disability and Rehabilitation (India Supplement) · 8(1)",
        period: "2020",
        doi: "",
        url: "/coming-back-to-kolkata-after-hospital-treatment",
        linkLabel: "Read related article",
      },
    ],

    // ==== MEMBERSHIPS ====
    // ⚠ SAMPLE — real organisations, but membership is unverified. Confirm.
    memberships: [
      "Indian Association of Physical Medicine & Rehabilitation (IAPMR)",
      "Indian Federation of Neurorehabilitation (IFNR)",
      "Association of Spinal Cord Injury Rehabilitation, India",
      "West Bengal Medical Council",
    ],

    // ==== AWARDS & RECOGNITION ====
    // ⚠ SAMPLE — invented for the demo. Replace.
    awards: [
      {
        title: "Best Paper Award, Neuro-Rehabilitation Session",
        issuer: "IAPMRCON National Conference",
        period: "2022",
      },
      {
        title: "Young Physiatrist Award, Eastern Zone",
        issuer: "Indian Association of Physical Medicine & Rehabilitation",
        period: "2019",
      },
    ],

    // ==== TALKS, CONFERENCES & MEDIA ====
    // ⚠ SAMPLE — invented for the demo. Replace.
    talks: [
      {
        title: "Building a Doctor-Led Neuro Rehab Pathway in Eastern India",
        issuer: "IAPMRCON, Hyderabad",
        period: "2023",
      },
      {
        title: "Spasticity Management Beyond the Injection",
        issuer: "NeuroRehab Summit, Kolkata",
        period: "2022",
      },
      {
        title: "Panel: Life After Stroke — What Families Should Expect",
        issuer: "World Stroke Day Public Forum, Kolkata",
        period: "2021",
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
