import Image from "next/image";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import {
  FaLinkedinIn,
  FaPhone,
  FaCalendarCheck,
  FaTrophy,
} from "react-icons/fa6";
import RelatedBlogs from "./related-blogs";
import CredentialList from "./credential-list";
import BookConsultationButton from "./book-button";

/**
 * Doctor profile page body.
 *
 * Driven entirely by a plain object from `data/doctors.js`. Sections are built
 * from the data first and empty ones dropped, so the jump nav and the page
 * always agree and partially filled profiles still read as finished.
 */
const DoctorProfile = ({ doctor, blogs = [], conditions = [] }) => {
  if (!doctor) return null;

  const {
    name,
    credentials,
    eyebrow,
    designation,
    headline,
    image,
    quickFacts = [],
    stats = [],
    lead,
    about = [],
    procedures = [],
    education = [],
    experience = [],
    certifications = [],
    publications = [],
    memberships = [],
    awards = [],
    talks = [],
    social = {},
  } = doctor;

  const sections = [
    {
      id: "about",
      title: "About",
      show: Boolean(lead) || about.length > 0,
      content: (
        <>
          {lead && <p className="cs_doctor_lead">{lead}</p>}
          {about.map((paragraph, index) => (
            <p key={index} className="cs_doctor_paragraph">
              {paragraph}
            </p>
          ))}
        </>
      ),
    },
    {
      id: "conditions",
      title: "Conditions Treated",
      show: conditions.length > 0,
      content: <ConditionTiles conditions={conditions} />,
    },
    {
      id: "procedures",
      title: "Procedures & Interventions",
      show: procedures.length > 0,
      content: (
        <ul className="cs_doctor_cards">
          {procedures.map((item, index) => (
            <li key={index} className="cs_doctor_card_item">
              <span className="cs_doctor_card_num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="cs_doctor_card_label">{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: "experience",
      title: "Experience",
      show: experience.length > 0,
      content: (
        <TimelineList
          items={experience.map((item) => ({
            heading: item.role,
            subheading: item.organisation,
            period: item.period,
            description: item.description,
          }))}
        />
      ),
    },
    {
      id: "education",
      title: "Education",
      show: education.length > 0,
      content: (
        <CredentialList
          items={education.map((item) => ({
            heading: item.degree,
            subheading: item.institution,
            period: item.period,
            credentialId: item.credentialId,
            credentialUrl: item.credentialUrl,
            certificate: item.certificate,
          }))}
        />
      ),
    },
    {
      id: "certifications",
      title: "Certifications & Training",
      show: certifications.length > 0,
      content: (
        <CredentialList
          items={certifications.map((item) => ({
            heading: item.title,
            subheading: item.issuer,
            period: item.period,
            credentialId: item.credentialId,
            credentialUrl: item.credentialUrl,
            certificate: item.certificate,
          }))}
        />
      ),
    },
    {
      id: "publications",
      title: "Publications & Research",
      show: publications.length > 0,
      content: (
        <CredentialList
          items={publications.map((item) => ({
            heading: item.title,
            subheading: item.source,
            period: item.period,
            idLabel: "DOI",
            credentialId: item.doi,
            credentialUrl: item.url,
            linkLabel: item.linkLabel ?? "Read publication",
          }))}
        />
      ),
    },
    {
      // Three short lists share one heading rather than three sparse sections.
      id: "recognition",
      title: "Affiliations & Recognition",
      show: memberships.length > 0 || awards.length > 0 || talks.length > 0,
      content: (
        <RecognitionColumns
          memberships={memberships}
          awards={awards}
          talks={talks}
        />
      ),
    },
  ].filter((section) => section.show);

  return (
    <article className="cs_doctor_page">
      <DoctorHero
        name={name}
        credentials={credentials}
        eyebrow={eyebrow}
        designation={designation}
        headline={headline}
        image={image}
        linkedin={social?.linkedin}
      />

      {stats.length > 0 && <StatsBand stats={stats} />}

      <div className="container">
        <div className="cs_doctor_layout">
          <aside className="cs_doctor_rail">
            <div className="cs_doctor_rail_inner">
              <BookingCard facts={quickFacts} name={name} />
            </div>
          </aside>

          <div className="cs_doctor_main">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="cs_doctor_section"
              >
                <h2 className="cs_doctor_section_title">{section.title}</h2>
                <div className="cs_doctor_section_body">{section.content}</div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <RelatedBlogs blogs={blogs} doctorName={name} />

      <ConsultCta name={name} />
    </article>
  );
};

/* ==== HERO ==== */

const DoctorHero = ({
  name,
  credentials,
  eyebrow,
  designation,
  headline,
  image,
  linkedin,
}) => (
  <header className="cs_doctor_hero">
    <div className="container">
      <div className="cs_doctor_hero_grid">
        <div className="cs_doctor_hero_media">
          {image?.url && (
            <Image
              src={image.url}
              alt={image.alt || name}
              width={image.width || 800}
              height={image.height || 1000}
              sizes="(max-width: 991px) 300px, 360px"
              priority
            />
          )}
        </div>

        <div className="cs_doctor_hero_content">
          {eyebrow && <p className="cs_doctor_eyebrow">{eyebrow}</p>}

          <h1 className="cs_doctor_name">{name}</h1>

          {credentials && (
            <p className="cs_doctor_credentials">{credentials}</p>
          )}
          {designation && (
            <p className="cs_doctor_designation">{designation}</p>
          )}
          {headline && <p className="cs_doctor_headline">{headline}</p>}

          <div className="cs_doctor_hero_actions">
            <BookConsultationButton className="cs_btn cs_style_1 cs_fs_18 cs_accent_bg cs_radius_100">
              <span className="cs_btn_text">
                <FaCalendarCheck aria-hidden="true" /> Book a Consultation
              </span>
            </BookConsultationButton>

            <a href="tel:+919836748665" className="cs_doctor_ghost_btn">
              <FaPhone aria-hidden="true" /> +91 98367 48665
            </a>

            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="cs_doctor_icon_btn"
                aria-label={`${name} on LinkedIn`}
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </header>
);

/* ==== STATS BAND ==== */

const StatsBand = ({ stats }) => (
  <section className="cs_doctor_stats" aria-label="Key figures">
    <div className="container">
      <div className="cs_doctor_stats_grid">
        {stats.map((stat, index) => (
          <div key={index} className="cs_doctor_stat">
            <span className="cs_doctor_stat_value">{stat.value}</span>
            <span className="cs_doctor_stat_label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ==== CONDITION TILES ==== */

const ConditionTiles = ({ conditions }) => (
  <ul className="cs_doctor_tiles">
    {conditions.map((condition, index) => {
      const Wrapper = condition.url ? "a" : "div";
      return (
        <li key={index}>
          <Wrapper
            className="cs_doctor_tile"
            {...(condition.url ? { href: condition.url } : {})}
          >
            <span className="cs_doctor_tile_media">
              {condition.image?.url ? (
                <PrismicNextImage
                  field={condition.image}
                  alt=""
                  sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 240px"
                />
              ) : (
                <span className="cs_doctor_tile_placeholder" />
              )}
            </span>
            <span className="cs_doctor_tile_label">{condition.label}</span>
          </Wrapper>
        </li>
      );
    })}
  </ul>
);

/* ==== SIDE RAIL ==== */

/**
 * The rail's job is booking, not summarising. It carries only facts that
 * appear nowhere else on the page, then the action.
 */
const BookingCard = ({ facts = [], name }) => (
  <div className="cs_doctor_glance">
    <h2 className="cs_doctor_glance_title">Consult {name}</h2>

    {facts.length > 0 && (
      <dl className="cs_doctor_glance_list">
        {facts.map((fact, index) => (
          <div key={index} className="cs_doctor_glance_row">
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    )}

    <BookConsultationButton className="cs_btn cs_style_1 cs_fs_18 cs_accent_bg cs_radius_100 cs_doctor_glance_btn">
      <span className="cs_btn_text">
        <FaCalendarCheck aria-hidden="true" /> Book a Consultation
      </span>
    </BookConsultationButton>

    <a
      href="tel:+919836748665"
      className="cs_doctor_glance_phone"
      aria-label="Call Rehabana on +91 98367 48665"
    >
      <FaPhone aria-hidden="true" /> +91 98367 48665
    </a>
  </div>
);

/* ==== BUILDING BLOCKS ==== */

/**
 * Memberships / Awards / Talks, laid out across however many of them exist.
 *
 * The blocks are collected first and empty ones dropped, then the surviving
 * count drives the grid through `data-cols`. Without that the grid keeps three
 * fixed tracks, so a doctor with no awards would get two blocks squeezed into
 * the left two thirds and an empty column on the right.
 */
const RecognitionColumns = ({ memberships = [], awards = [], talks = [] }) => {
  const blocks = [
    memberships.length > 0 && {
      key: "memberships",
      title: "Memberships",
      body: <BulletList items={memberships} single />,
    },
    awards.length > 0 && {
      key: "awards",
      title: "Awards",
      body: <AwardList awards={awards} />,
    },
    talks.length > 0 && {
      key: "talks",
      title: "Talks & Conferences",
      body: <MetaList items={talks} />,
    },
  ].filter(Boolean);

  if (blocks.length === 0) return null;

  return (
    <div className="cs_doctor_columns" data-cols={blocks.length}>
      {blocks.map((block) => (
        <div key={block.key}>
          <h3 className="cs_doctor_subheading">{block.title}</h3>
          {block.body}
        </div>
      ))}
    </div>
  );
};

/**
 * Awards read as achievements rather than list items, so each gets its own
 * card with a mark. `image` takes a real award photo or certificate when the
 * client supplies one; without it the card falls back to a trophy icon.
 */
const AwardList = ({ awards = [] }) => (
  <ul className="cs_doctor_awards">
    {awards.map((award, index) => (
      <li key={index} className="cs_doctor_award">
        <span className="cs_doctor_award_mark">
          {award.image?.url ? (
            <Image
              src={award.image.url}
              alt=""
              width={96}
              height={96}
              sizes="52px"
            />
          ) : (
            <FaTrophy aria-hidden="true" />
          )}
        </span>
        <span className="cs_doctor_award_text">
          <span className="cs_doctor_award_title">{award.title}</span>
          {award.issuer && (
            <span className="cs_doctor_award_issuer">{award.issuer}</span>
          )}
          {award.period && (
            <span className="cs_doctor_award_year">{award.period}</span>
          )}
        </span>
      </li>
    ))}
  </ul>
);

/**
 * Title, venue and year each on their own line.
 *
 * These used to be joined as "title · year", which dropped the venue and let
 * the year wrap onto a line by itself once the column got narrow.
 */
const MetaList = ({ items = [] }) => (
  <ul className="cs_doctor_meta_list">
    {items.map((item, index) => (
      <li key={index} className="cs_doctor_meta_item">
        <span className="cs_doctor_meta_title">{item.title}</span>
        {item.issuer && (
          <span className="cs_doctor_meta_sub">{item.issuer}</span>
        )}
        {item.period && (
          <span className="cs_doctor_meta_year">{item.period}</span>
        )}
      </li>
    ))}
  </ul>
);

const BulletList = ({ items = [], single = false }) => (
  <ul
    className={`cs_doctor_bullets ${single ? "cs_doctor_bullets_single" : ""}`}
  >
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const TimelineList = ({ items = [] }) => (
  <ol className="cs_doctor_timeline">
    {items.map((item, index) => (
      <li key={index} className="cs_doctor_timeline_item">
        <h3 className="cs_doctor_timeline_heading">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.heading}
            </a>
          ) : (
            item.heading
          )}
        </h3>
        {item.subheading && (
          <p className="cs_doctor_timeline_sub">{item.subheading}</p>
        )}
        {item.period && (
          <p className="cs_doctor_timeline_period">{item.period}</p>
        )}
        {item.description && (
          <p className="cs_doctor_timeline_desc">{item.description}</p>
        )}
      </li>
    ))}
  </ol>
);

/* ==== CLOSING CTA ==== */

const ConsultCta = ({ name }) => (
  <section className="cs_doctor_cta">
    <div className="container">
      <div className="cs_doctor_cta_inner">
        <div>
          <h2 className="cs_doctor_cta_title">
            Want {name} to review your case?
          </h2>
          <p className="cs_doctor_cta_text">
            Share your reports and we will schedule an assessment at Rehabana
            Saltlake or Kalighat.
          </p>
        </div>
        <div className="cs_doctor_cta_actions">
          <BookConsultationButton className="cs_btn cs_style_1 cs_fs_18 cs_accent_bg cs_radius_100">
            <span className="cs_btn_text">Book a Consultation</span>
          </BookConsultationButton>
          <Link href="/team" className="cs_doctor_ghost_btn">
            Back to Team
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default DoctorProfile;
