import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SectionHeading } from "@/components/ui";

const TeamSection = ({ slice }) => {
  const { primary } = slice || {};
  const { items = [] } = primary || {};

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
        <div className="row cs_row_gap_30 cs_gap_y_30">
          {items.map((item, index) => (
            <TeamItem key={index} item={item} />
          ))}
        </div>
        <div className="cs_height_50 cs_height_lg_40" />
      </div>
    </section>
  );
};

const TeamItem = ({ item }) => {
  const { image, title, subtitle, link, social_links } = item || {};
  const titleText = title?.[0]?.text;

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="cs_team cs_style_1 cs_type_2">
        <div className="cs_team_thumbnail cs_center">
          {image?.url ? (
            <PrismicNextImage field={image} alt={image.alt ?? titleText ?? "Team member"} />
          ) : (
            <div className="cs_team_placeholder" style={{ aspectRatio: "4/5", background: "var(--gray-color, #eee)" }} />
          )}
          {social_links && social_links.length > 0 && (
            <div className="cs_social_btns cs_style_2 position-absolute">
              {social_links.map((social, idx) => {
                const href = social?.url ?? "#";
                const label = href.includes("facebook") ? "Facebook" : href.includes("youtube") ? "YouTube" : href.includes("linkedin") ? "LinkedIn" : "Social";
                const Icon = href.includes("facebook") ? FaFacebookF : href.includes("youtube") ? FaYoutube : FaLinkedinIn;
                return (
                  <PrismicNextLink key={idx} field={social} className="cs_center cs_share" aria-label={label}>
                    <Icon />
                  </PrismicNextLink>
                );
              })}
            </div>
          )}
        </div>
        <div className="cs_team_bio">
          {titleText && (
            <h3 className="cs_team_title cs_fs_18 cs_medium cs_heading_color">
              {link?.url ? (
                <PrismicNextLink field={link}>{titleText}</PrismicNextLink>
              ) : (
                titleText
              )}
            </h3>
          )}
          {subtitle && (
            <p className="cs_team_subtitle mb-0 cs_fs_14">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
