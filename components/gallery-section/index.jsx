"use client";

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Button, SectionHeading } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";
import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";

const GallerySection = ({ slice }) => {
  const { primary } = slice || {};
  const { items } = primary || {};
  const [activeFilter, setActiveFilter] = useState("All");

  const [sources, setSources] = useState([]);

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

  // ===== SLIDE STATE =====
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  // ===== HANDLE SLIDE NUMBER =====
  const openLightboxOnSlide = (number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  };

  // ===== GET STRUCTURED SOURCES =====
  useEffect(() => {
    let tempSources = [];
    items?.map((item) => {
      item?.video?.link_type == "Web"
        ? tempSources.push(item?.video?.url)
        : tempSources.push(item?.image?.large?.url);
    });

    setSources(tempSources);
    return () => {
      setSources([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slice, activeFilter]);

  return (
    <>
      <section className="cs_gallery cs_style_1">
        <div className="cs_height_120 cs_height_lg_80" />
        <div className="container">
          <SectionHeading
            primary={primary}
            variant="center"
            descriptionClassName="text-center mt-3 leading-relaxed text-sm"
          />
          {filterCategories.length > 1 && (
            <GalleryFilters
              categories={filterCategories}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          )}

          <div className="cs_height_50 cs_height_lg_40" />
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {items?.map(
              (item, index) =>
                (item?.category === activeFilter || activeFilter === "All") && (
                  <GalleryItem
                    key={index}
                    item={item}
                    index={index}
                    openLightbox={openLightboxOnSlide}
                  />
                )
            )}
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80" />
      </section>

      {sources?.length > 0 && (
        <FsLightbox
          toggler={lightboxController?.toggler}
          sources={sources}
          slide={lightboxController?.slide}
          key={activeFilter}
        />
      )}
    </>
  );
};

const GalleryFilters = ({ categories, activeFilter, onFilterChange }) => (
  <>
    <div className="cs_height_50 cs_height_lg_40" />
    <div className="cs_gallery_filters">
      <div className="cs_gallery_filter_list">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`cs_gallery_filter_btn ${
              activeFilter === category ? "active" : ""
            }`}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  </>
);

const GalleryItem = ({ item, openLightbox, index }) => {
  const { image, video } = item || {};

  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="cs_gallery_item cs_radius_10 overflow-hidden"
        style={{ cursor: "pointer" }}
        onClick={() => openLightbox(index + 1)}
      >
        {image?.url && (
          <div className="cs_card_thumbnail cs_radius_10">
            <PrismicNextImage
              field={image}
              alt={image.alt ?? undefined}
              className="img-fluid"
            />
            {video?.url && (
              <Button
                href="#"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                variant="player2"
                className="cs_video_open"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySection;
