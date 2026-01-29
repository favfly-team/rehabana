"use client";

import { useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading } from "@/components/ui";

const GallerySection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, description, items } = primary || {};
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = items
    ? [
        "All",
        ...new Set(
          items
            .map((item) => item?.category)
            .filter((cat) => cat && cat !== null)
        ),
      ]
    : ["All"];

  const filteredImages =
    activeFilter === "All"
      ? items || []
      : (items || []).filter((item) => item?.category === activeFilter);

  return (
    <section className="cs_gallery cs_style_1">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading
          align="center"
          subtitle={subheading}
          title={
            heading?.[0]?.text ? (
              <PrismicRichText
                field={heading}
                components={{
                  heading1: ({ children }) => <>{children}</>,
                  heading2: ({ children }) => <>{children}</>,
                  heading3: ({ children }) => <>{children}</>,
                }}
              />
            ) : null
          }
          className="wow fadeInUp"
          data-wow-duration="0.9s"
          data-wow-delay="0.25s"
          style={{
            visibility: "visible",
            animationDuration: "0.9s",
            animationDelay: "0.25s",
            animationName: "fadeInUp",
          }}
        />
        {description && (
          <p className="text-center mt-3">
            <PrismicRichText field={description} />
          </p>
        )}
        {filterCategories.length > 1 && (
          <>
            <div className="cs_height_50 cs_height_lg_40" />
            <div className="cs_gallery_filters">
              <div className="cs_gallery_filter_list">
                {filterCategories.map((category) => (
                  <button
                    key={category}
                    className={`cs_gallery_filter_btn ${
                      activeFilter === category ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
        {filteredImages.length > 0 && (
          <>
            <div className="cs_height_50 cs_height_lg_40" />
            <div className="row cs_row_gap_30 cs_gap_y_30">
              {filteredImages.map((item, index) => (
                <GalleryItem key={index} item={item} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const GalleryItem = ({ item }) => {
  const { image, video } = item || {};

  return (
    <div className="col-lg-4 col-md-6">
      <div className="cs_gallery_item cs_radius_10 overflow-hidden">
        {image?.url && (
          <div className="cs_card_thumbnail cs_radius_10">
            <PrismicNextImage
              field={image}
              alt={image.alt ?? undefined}
              className="img-fluid"
            />
            {video?.url && (
              <a
                href={video.url}
                className="cs_video_open cs_player_btn cs_style_2 cs_center"
              >
                <span></span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySection;
