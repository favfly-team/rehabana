"use client";

import { PrismicNextImage } from "@prismicio/next";
import { Button, SectionHeading, ViewAllButton } from "@/components/ui";
import { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";

const GallerySection = ({ slice, galleryLimit }) => {
  const { primary } = slice || {};
  const { items: galleryItems } = primary || {};
  const [activeFilter, setActiveFilter] = useState("All");
  const [items, setItems] = useState([]);

  const [sources, setSources] = useState([]);

  const limit = 9;

  const filterCategories = galleryItems
    ? [
        "All",
        ...new Set(
          galleryItems
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

  useEffect(() => {
    const items =
      activeFilter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item?.category === activeFilter);
    setItems(items);
  }, [activeFilter, galleryItems]);

  // ===== GET STRUCTURED SOURCES =====
  useEffect(() => {
    if (items?.length > 0) {
      let tempSources = [];
      items?.map((item) => {
        item?.video?.link_type == "Web"
          ? tempSources.push(item?.video?.url)
          : tempSources.push(item?.image?.large?.url);
      });

      setSources(tempSources);
    }

    return () => {
      setSources([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <>
      <section className="cs_gallery cs_style_1">
        <div className="cs_height_120 cs_height_lg_80" />
        <div className="container">
          <SectionHeading primary={primary} variant="center" />
          {filterCategories?.length > 1 && (
            <GalleryFilters
              categories={filterCategories}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          )}

          <div className="cs_height_50 cs_height_lg_40" />
          <div className="row cs_row_gap_30 cs_gap_y_30">
            {items
              ?.slice(0, galleryLimit === "all" ? galleryItems?.length : limit)
              ?.map((item, index) => (
                <GalleryItem
                  key={index}
                  item={item}
                  index={index}
                  openLightbox={openLightboxOnSlide}
                />
              ))}
          </div>
          <ViewAllButton href="/gallery" />
        </div>
        <div className="cs_height_120 cs_height_lg_80" />
      </section>

      <FsLightbox
        toggler={lightboxController?.toggler}
        sources={sources}
        slide={lightboxController?.slide}
        key={sources?.length}
      />
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
        style={{ cursor: "zoom-in" }}
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
