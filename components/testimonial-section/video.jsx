"use client";

import { useState, useMemo } from "react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import FsLightbox from "fslightbox-react";
import { SectionHeading, Button, ViewAllButton } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const TestimonialVideoSection = ({ slice }) => {
  const { primary } = slice || {};
  const { items } = primary || {};

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const videoSources = useMemo(
    () => items?.map((item) => item?.video?.url).filter(Boolean) ?? [],
    [items]
  );

  const openLightbox = (slide) => {
    setLightboxController((prev) => ({
      toggler: !prev.toggler,
      slide,
    }));
  };

  const getSlideForIndex = (index) => {
    if (!items?.[index]?.video?.url) return 0;
    return 1 + items.slice(0, index).filter((item) => item?.video?.url).length;
  };

  return (
    <section className="cs_slider cs_style_1 cs_slider_gap_30">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading primary={primary} variant="left" />
        {items && items.length > 0 && (
          <>
            <div className="cs_height_50 cs_height_lg_40" />
            <div className="row cs_row_gap_30 cs_gap_y_30">
              {items.map((item, index) => (
                <TestimonialVideoItem
                  key={index}
                  item={item}
                  slide={getSlideForIndex(index)}
                  onPlayClick={openLightbox}
                />
              ))}
            </div>
            {videoSources.length > 0 && (
              <FsLightbox
                toggler={lightboxController.toggler}
                sources={videoSources}
                slide={lightboxController.slide}
              />
            )}
            <ViewAllButton href="/testimonials" />
          </>
        )}
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const TestimonialVideoItem = ({ item, slide, onPlayClick }) => {
  const { image, video, name, details } = item || {};

  const handlePlayClick = (e) => {
    e.preventDefault();
    if (slide > 0 && onPlayClick) onPlayClick(slide);
  };

  return (
    <div className="col-lg-4">
      <div className="cs_card cs_style_1 cs_radius_10">
        {image?.url && (
          <div
            className="cs_card_thumbnail cs_radius_10"
            style={{ cursor: "pointer" }}
            onClick={handlePlayClick}
          >
            <PrismicNextImage field={image} alt={image.alt ?? undefined} />
            {video?.url && slide > 0 && (
              <Button href="#" variant="player2" className="cs_video_open" />
            )}
          </div>
        )}
        <div className="cs_card_bio">
          {name?.[0]?.text && (
            <PrismicRichText
              field={name}
              components={createRichTextComponents({
                heading3ClassName: "cs_card_title cs_fs_24 cs_medium mb-0",
              })}
            />
          )}
          {details && (
            <PrismicRichText
              field={details}
              components={createRichTextComponents({
                paragraphClassName:
                  "cs_card_subtitle cs_fs_16 cs_heading_color mb-0 leading-relaxed mt-3",
              })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideoSection;
