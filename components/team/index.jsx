"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SectionHeading, ViewAllButton } from "@/components/ui";
import { asText } from "@prismicio/client";
import { getDoctorPathByName } from "@/data/doctors";

/** Members shown before the visitor asks for more, and per "View More" click. */
const PAGE_SIZE = 6;

const TeamSection = ({ slice }) => {
  const { primary } = slice || {};
  const { items = [], button_link } = primary || {};

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = items.length > visibleCount;

  const showMore = () =>
    setVisibleCount((count) => Math.min(count + PAGE_SIZE, items.length));

  return (
    <section className="cs_team_area">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          primary={primary}
          variant="center"
          includeDescription={false}
        />
        <div className="cs_height_50 cs_height_lg_40" />

        <div className="row cs_row_gap_30 cs_gap_y_30 cs_member_grid">
          {visibleItems.map((item, index) => (
            <TeamItem key={index} item={item} />
          ))}
        </div>

        {hasMore ? (
          <div className="text-center mt-5">
            <button
              type="button"
              onClick={showMore}
              className="cs_btn cs_style_1 cs_fs_18 cs_accent_bg cs_radius_100 cs_team_more_btn"
            >
              <span className="cs_btn_text">View More</span>
            </button>
          </div>
        ) : (
          button_link?.url && <ViewAllButton href={button_link} prismic />
        )}

        <div className="cs_height_50 cs_height_lg_40" />
      </div>
    </section>
  );
};

const TeamItem = ({ item }) => {
  const { image, title, subtitle, social_links } = item || {};

  const titleText = asText(title);
  const profilePath = getDoctorPathByName(titleText);

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <article
        className={`cs_member_card ${profilePath ? "cs_member_card_linked" : ""}`}
      >
        <div className="cs_member_media">
          <div className="cs_member_media_link">
            {image?.url ? (
              <PrismicNextImage
                field={image}
                alt={image.alt ?? titleText ?? "Team member"}
                sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, (max-width: 1199px) 33vw, 25vw"
              />
            ) : (
              <span className="cs_member_placeholder" />
            )}
          </div>

          {social_links?.length > 0 && (
            <div className="cs_member_socials">
              {social_links.map((social, idx) => (
                <SocialIcon key={idx} social={social} />
              ))}
            </div>
          )}
        </div>

        {/* Every card carries the same two lines so the grid stays even —
            anything longer lives on the profile page. */}
        <div className="cs_member_body">
          {titleText && (
            <h3 className="cs_member_name">
              {/* One link per card: it stretches over the whole card via
                  ::after, so the photo and body are clickable too without
                  nesting anchors around the social buttons. */}
              {profilePath ? (
                <Link href={profilePath} className="cs_member_stretched">
                  {titleText}
                </Link>
              ) : (
                <span>{titleText}</span>
              )}
            </h3>
          )}

          {subtitle && <p className="cs_member_role">{subtitle}</p>}

          {profilePath && (
            <span className="cs_member_link" aria-hidden="true">
              View Profile
            </span>
          )}
        </div>
      </article>
    </div>
  );
};

const SocialIcon = ({ social }) => {
  const href = social?.url ?? "";

  const { Icon, label } = href.includes("facebook")
    ? { Icon: FaFacebookF, label: "Facebook" }
    : href.includes("youtube")
      ? { Icon: FaYoutube, label: "YouTube" }
      : { Icon: FaLinkedinIn, label: "LinkedIn" };

  return (
    <PrismicNextLink
      field={social}
      className="cs_member_social"
      aria-label={label}
    >
      <Icon />
      <span className="sr-only">{label}</span>
    </PrismicNextLink>
  );
};

export default TeamSection;
