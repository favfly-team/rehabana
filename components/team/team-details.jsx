"use client";

import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaPlus,
  FaUser,
} from "react-icons/fa6";
import { createRichTextComponents } from "@/lib/richTextComponents";

const TeamDetails = ({ slice }) => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (id) =>
    setOpenSection((prev) => (prev === id ? null : id));

  const {
    image,
    subheading,
    heading: headingField,
    description,
    details,
    social_links,
  } = slice?.primary ?? {};

  const socialLinks =
    Array.isArray(social_links) && social_links.length > 0
      ? social_links.map(normalizeSocialLink)
      : [];
  const accordionItems = buildAccordionFromSlice(slice?.primary ?? {}) ?? [];

  if (!image?.url) return null;

  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="cs_team_details_wrapper">
          <div className="row cs_gap_y_40">
            <div className="col-lg-4">
              <ProfileImage src={image.url} alt={image.alt ?? "Team member"} />
              <div className="cs_height_30 cs_height_lg_30" />
              <SocialLinks links={socialLinks} />
            </div>
            <div className="col-lg-8">
              <div className="cs_team_content">
                <TeamHeader
                  category={subheading}
                  headingField={headingField}
                  specialty={description}
                />
                <div className="cs_height_25 cs_height_lg_20" />
                <TeamBio field={details} />
                <div className="cs_height_40 cs_height_lg_30" />
                {accordionItems.length > 0 && (
                  <div className="cs_team_accordion">
                    {accordionItems.map((acc, i) => (
                      <AccordionItem
                        key={acc.id ?? i}
                        title={acc.title}
                        isOpen={openSection === (acc.id ?? i)}
                        onToggle={() => toggleSection(acc.id ?? i)}
                      >
                        {acc.content}
                      </AccordionItem>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

function normalizeSocialLink(link) {
  const url = link?.url || "";
  const u = url.toLowerCase();
  if (u.includes("facebook.com") || u.includes("fb.com") || u.includes("fb.me"))
    return { type: "facebook", url, label: "Follow on Facebook" };
  if (u.includes("youtube.com") || u.includes("youtu.be"))
    return { type: "youtube", url, label: "Follow on Youtube" };
  if (u.includes("linkedin.com"))
    return { type: "linkedin", url, label: "Follow on LinkedIn" };
  return { type: "link", url, label: "Link" };
}

const ProfileImage = ({ src, alt }) => (
  <div className="cs_team_profile_img">
    <img src={src} alt={alt} />
  </div>
);

const SocialLinks = ({ links }) => {
  const icons = {
    facebook: FaFacebookF,
    youtube: FaYoutube,
    linkedin: FaLinkedinIn,
  };
  if (!links?.length) return null;
  return (
    <div className="cs_team_social_links">
      {links.map((link, i) => {
        const Icon = icons[link.type];
        return (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cs_team_social_link"
            aria-label={link.label}
          >
            {Icon ? <Icon /> : null} {link.label}
          </a>
        );
      })}
    </div>
  );
};

const TeamHeader = ({ category, name, headingField, specialty }) => {
  const headingComponents = createRichTextComponents({
    heading2ClassName: "cs_team_name cs_fs_36 cs_heading_font",
  });
  return (
    <div className="cs_team_header">
      {category && (
        <p className="cs_team_category cs_accent_color cs_fs_14 cs_medium">
          {category}
        </p>
      )}
      {headingField?.length > 0 ? (
        <PrismicRichText field={headingField} components={headingComponents} />
      ) : name ? (
        <h2 className="cs_team_name cs_fs_36 cs_heading_font">{name}</h2>
      ) : null}
      {specialty && (
        <p className="cs_team_specialty">
          <FaUser className="cs_user_icon" size={16} />
          <span>{specialty}</span>
        </p>
      )}
    </div>
  );
};

const TeamBio = ({ field, paragraphs }) => {
  const richTextComponents = createRichTextComponents({
    paragraphClassName: "mb-2 last:mb-0 cs_heading_color leading-relaxed",
    hyperlinkClassName: "cs_accent_color",
  });
  if (field?.length > 0) {
    return (
      <div className="cs_team_bio">
        <PrismicRichText field={field} components={richTextComponents} />
      </div>
    );
  }
  if (paragraphs?.length) {
    return (
      <div className="cs_team_bio">
        {paragraphs.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    );
  }
  return null;
};

const AccordionItem = ({ title, isOpen, onToggle, children }) => (
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

const accordionRichTextComponents = createRichTextComponents({
  paragraphClassName: "leading-relaxed text-sm mb-2 last:mb-0",
  heading2ClassName: "font-bold text-lg mt-3 mb-1",
  heading3ClassName: "font-bold text-base mt-2 mb-1",
  oListClassName: "list-decimal pl-6 my-2",
  listItemClassName: "my-1",
});

function buildAccordionFromSlice(primary) {
  const items = primary?.items;
  if (!items?.length) return null;
  return items.map((item, i) => ({
    id: `acc-${i}`,
    title: item.title?.[0]?.text ?? "Section",
    content: (
      <PrismicRichText
        field={item.details}
        components={accordionRichTextComponents}
      />
    ),
  }));
}

export default TeamDetails;
