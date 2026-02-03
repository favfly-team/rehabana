"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPlus,
  FaUser,
} from "react-icons/fa6";

// Profile Image Component
const ProfileImage = ({ src, alt }) => {
  return (
    <div className="cs_team_profile_img">
      <img src={src} alt={alt} />
    </div>
  );
};

// Social Links Component
const SocialLinks = ({ links }) => {
  const socialIcons = {
    facebook: FaFacebookF,
    youtube: FaYoutube,
    linkedin: FaLinkedinIn,
  };

  return (
    <div className="cs_team_social_links">
      {links.map((link, index) => {
        const Icon = socialIcons[link.type];
        return (
          <a
            key={index}
            href={link.url}
            className="cs_team_social_link"
            aria-label={link.label}
          >
            <Icon /> {link.label}
          </a>
        );
      })}
    </div>
  );
};

// Team Header Component
const TeamHeader = ({ category, name, specialty }) => {
  return (
    <div className="cs_team_header">
      <p className="cs_team_category cs_accent_color cs_fs_14 cs_medium">
        {category}
      </p>
      <h2 className="cs_team_name cs_fs_36 cs_heading_font">{name}</h2>
      <p className="cs_team_specialty">
        <FaUser className="cs_user_icon" size={16} />
        <span>{specialty}</span>
      </p>
    </div>
  );
};

// Team Bio Component
const TeamBio = ({ paragraphs }) => {
  return (
    <div className="cs_team_bio">
      {paragraphs.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
    </div>
  );
};

// Accordion Item Component
const AccordionItem = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className={`cs_accordion_item ${isOpen ? "active" : ""}`}>
      <div className="cs_accordion_header" onClick={onToggle}>
        <h3 className="cs_accordion_title">{title}</h3>
        <div className="cs_accordion_icon">
          <FaPlus />
        </div>
      </div>
      <div className="cs_accordion_content">
        <div className="cs_accordion_body">{children}</div>
      </div>
    </div>
  );
};

// Certifications Section Component
const CertificationsSection = () => {
  return (
    <>
      <p>
        <strong>
          Participated and trained at Kokilaben Dhirubhai Ambani Hospital,
        </strong>{" "}
        Mumbai in Improving Patients' Care in Spasticity Through Neurorehab
        Treatment (IMPACT III) program in October, 2018.
      </p>
      <p>
        <strong>Done Fellowship in Pain Management</strong> (Aesculap Academy,
        Germany) at Delhi Pain Management Centre in June, 2019.
      </p>

      <p>
        <strong>CERTIFICATES</strong>
      </p>
      <ol>
        <li>EULAR Certificate in Rheumatic Diseases</li>
        <li>EULAR Certificate in Imaging in RMDs</li>
        <li>EULAR Certificate in USG</li>
      </ol>

      <p>
        <strong>Life Member:</strong>
      </p>
      <ol>
        <li>Indian Association of Physical Medicine and Rehabilitation</li>
        <li>IAPMR WB Chapter</li>
        <li>Indian Medical Association</li>
        <li>
          International Society For Musculoskeletal Ultrasound in Pain Medicine
        </li>
      </ol>

      <p>
        <strong>Conferences Attended</strong>
      </p>
      <ol>
        <li>IAPRMCON 2016, Imphal</li>
        <li>IAPMR Midterm CME, Lucknow</li>
        <li>IAPRMCON 2017, Kolkata</li>
        <li>World Neurosciences Summit 2017, New Delhi</li>
        <li>IAPMR Midterm CME, Bhubaneswar</li>
        <li>IAPRMCON 2018, New Delhi</li>
        <li>World Congress of NeuroRehabilitation 2018, Mumbai</li>
        <li>IRACON 2018, Guwahati</li>
        <li>IAPMR Midterm CME 2019, Rishikesh</li>
        <li>IRACON 2019, JIPMER, Puducheri</li>
        <li>IAPRMCON 2021 Virtual</li>
        <li>IRACON 2021 Virtual</li>
        <li>India Pain Update 2021, Delhi</li>
        <li>IPNR 2022, Virtual</li>
        <li>EPIC 2022, MS Ramaiah Medical College, Bengaluru</li>
        <li>IRACON 2022, Indore</li>
        <li>World Rheumatology Summit, 2023, Jaipur</li>
        <li>IPNRCON 2023, Virtual</li>
        <li>
          International Conference on Musculoskeletal Ultrasound in Pain
          Medicine 2023, Bengaluru
        </li>
        <li>IRACON 2023, Hyderabad</li>
        <li>IAPMR Masterclass 2023, Spinal cord injury, AIIMS, Patna</li>
        <li>IAPRMCON, February 2024, Coimbatore</li>
        <li>Knee 360, February 2024, Kolkata</li>
        <li>IPNRCON, JIPMER, Puducherry, April 2024</li>
        <li>HOPECON, June 2024, Kolkata</li>
        <li>SOARCON, July 2024, Ahmedabad</li>
        <li>IRACON, November 2024, Bengaluru</li>
        <li>IAPMR WB Chapter, January 2025, Panjla</li>
        <li>Knee360, January 2025, Kolkata</li>
        <li>IAPRMCON, January 2025, Bengaluru</li>
        <li>
          World Orthopedic Concern, India Chapter Symposium, February, 2025
          Kolkata
        </li>
      </ol>
    </>
  );
};

// Publications Section Component
const PublicationsSection = () => {
  return (
    <ol>
      <li>
        Konar A, Pramanik R, Ghorai D, Banerjee A.{" "}
        <strong>
          Effect of Infliximab Therapy in Functional Improvement in Patients
          with Ankylosing Spondylitis.
        </strong>{" "}
        Indian J Phy Med Rehab 2017; 28(2): 59-63.
      </li>
      <li>
        Konar A, Pramanik R, Kamal F, et al.{" "}
        <strong>
          A Comparative Study on Efficacy of Suprascapular Nerve Block vs
          Subacromial Steroid Injection in Shoulder Impingement Syndrome.
        </strong>{" "}
        Indian J Phys Med Rehab 2019;30(4):96–100.
      </li>
      <li>
        Dey I, De S, Konar A, Halder Md AS,{" "}
        <strong>
          Effectiveness of total contact casting in leprotic vs diadetic planter
          foot ulcer: a comparative study.
        </strong>{" "}
        Indian Journal of Applied Research. Volume 11 | Issue 4 | April 2021.
      </li>
      <li>
        Dey I, Ghosal V, Konar A, Pramanik R.{" "}
        <strong>
          Comparison of the Therapeutic Efficacy of TENS vs Ultrasound-guided
          Genicular Nerve Block in Patients with Knee Osteoarthritis.
        </strong>{" "}
        Indian J Phy Med Rehab 2020; 31 (2):38-41.
      </li>
    </ol>
  );
};

// Default data when no props provided
const DEFAULT_SOCIAL_LINKS = [
  { type: "facebook", url: "#", label: "Follow on Facebook" },
  { type: "youtube", url: "#", label: "Follow on Youtube" },
  { type: "linkedin", url: "#", label: "Follow on LinkedIn" },
];

const DEFAULT_BIO_PARAGRAPHS = [
  'Dr. Ambar Konar, a dynamic and promising Interventional Physiatrist from Kolkata, completed his MBBS and housemanship in Rehabilitation Medicine from the prestigious <a href="#" class="cs_accent_color">Calcutta National Medical College</a>. He secured the University-topper rank in MD (Physical Medicine & Rehabilitation) from <a href="#" class="cs_accent_color">SSKM Hospital (IPGME&R)</a> in 2018 and later served three years as Senior Resident in Rehabilitation Medicine at North 24 Parganas District Hospital.',
  "Dr. Konar has presented in numerous national and international conferences, earning <strong>Best Paper Awards</strong> at both state and national levels, and has <strong>four publications</strong> in reputed medical journals.",
  "He underwent specialized <strong>NeuroRehab training (IMPACT III)</strong> at Kokilaben Dhirubhai Ambani Hospital, Mumbai, and completed a <strong>Fellowship in Pain Management</strong> from Aesculap Academy, Germany (Delhi Pain Management Center, 2019).",
  "His clinical interests include <strong>Neurorehabilitation, Musculoskeletal Medicine, and Interventional Pain Management</strong>. As the joint team leader of the Neuro Rehab team at <strong>Rehabana</strong>, he combines passion, empathy, and precision to deliver evidence-based, patient-centered care.",
];

/**
 * Team details section – single member profile.
 * @param {object} [data] - Optional data: { imageSrc, imageAlt, category, name, specialty, socialLinks, bioParagraphs, accordionItems }
 * @param {string} [data.imageSrc] - Profile image URL
 * @param {string} [data.imageAlt] - Profile image alt
 * @param {string} [data.category] - Category label (e.g. REHABANA PMR MDS)
 * @param {string} [data.name] - Full name and title
 * @param {string} [data.specialty] - Specialty line
 * @param {Array<{ type: string, url: string, label: string }>} [data.socialLinks]
 * @param {string[]} [data.bioParagraphs] - HTML strings for bio
 * @param {Array<{ title: string, content: React.ReactNode }>} [data.accordionItems]
 */
const TeamDetails = ({ data }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const imageSrc =
    data?.imageSrc ??
    "https://medixal-html.vercel.app/assets/img/team_details_1.jpeg";
  const imageAlt = data?.imageAlt ?? "Dr Ambar Konar";
  const category = data?.category ?? "REHABANA PMR MDS";
  const name = data?.name ?? "Dr Ambar Konar, MBBS, MD – PMR in Kolkata";
  const specialty =
    data?.specialty ??
    "Interventional Physiatrist | Neuro & Pain Rehabilitation Specialist";
  const socialLinks =
    Array.isArray(data?.socialLinks) && data.socialLinks.length > 0
      ? data.socialLinks
      : DEFAULT_SOCIAL_LINKS;
  const bioParagraphs =
    Array.isArray(data?.bioParagraphs) && data.bioParagraphs.length > 0
      ? data.bioParagraphs
      : DEFAULT_BIO_PARAGRAPHS;
  const accordionItems = data?.accordionItems;

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="cs_team_details_wrapper">
          <div className="row cs_gap_y_40">
            {/* Left Column - Image & Social Links */}
            <div className="col-lg-4">
              <ProfileImage src={imageSrc} alt={imageAlt} />
              <div className="cs_height_30 cs_height_lg_30" />
              <SocialLinks links={socialLinks} />
            </div>

            {/* Right Column - Content */}
            <div className="col-lg-8">
              <div className="cs_team_content">
                <TeamHeader
                  category={category}
                  name={name}
                  specialty={specialty}
                />

                <div className="cs_height_25 cs_height_lg_20" />

                <TeamBio paragraphs={bioParagraphs} />

                <div className="cs_height_40 cs_height_lg_30" />

                {/* Accordion Sections */}
                <div className="cs_team_accordion">
                  {accordionItems?.length > 0 ? (
                    accordionItems.map((acc, i) => (
                      <AccordionItem
                        key={i}
                        title={acc.title}
                        isOpen={openSection === acc.id}
                        onToggle={() => toggleSection(acc.id)}
                      >
                        {acc.content}
                      </AccordionItem>
                    ))
                  ) : (
                    <>
                      <AccordionItem
                        title="Certifications & Conferences attended"
                        isOpen={openSection === "certifications"}
                        onToggle={() => toggleSection("certifications")}
                      >
                        <CertificationsSection />
                      </AccordionItem>
                      <AccordionItem
                        title="Publications"
                        isOpen={openSection === "publications"}
                        onToggle={() => toggleSection("publications")}
                      >
                        <PublicationsSection />
                      </AccordionItem>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

export default TeamDetails;
