"use client";

import { useState } from "react";

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const galleryImages = [
    {
      id: 1,
      src: "https://medixal-html.vercel.app/assets/img/casestydy_3.jpeg",
      alt: "Gallery Image 1",
      category: "Treatment",
    },
    {
      id: 2,
      src: "https://medixal-html.vercel.app/assets/img/about_1.jpg",
      alt: "Gallery Image 2",
      category: "Facility",
    },
    {
      id: 3,
      src: "https://medixal-html.vercel.app/assets/img/about_2.jpg",
      alt: "Gallery Image 3",
      category: "Team",
    },
    {
      id: 4,
      src: "https://medixal-html.vercel.app/assets/img/service_4.jpeg",
      alt: "Gallery Image 4",
      category: "Treatment",
    },
    {
      id: 5,
      src: "https://medixal-html.vercel.app/assets/img/casestydy_3.jpeg",
      alt: "Gallery Image 5",
      category: "Facility",
    },
    {
      id: 6,
      src: "https://medixal-html.vercel.app/assets/img/about_1.jpg",
      alt: "Gallery Image 6",
      category: "Team",
    },
    {
      id: 7,
      src: "https://medixal-html.vercel.app/assets/img/about_2.jpg",
      alt: "Gallery Image 7",
      category: "Treatment",
    },
    {
      id: 8,
      src: "https://medixal-html.vercel.app/assets/img/service_4.jpeg",
      alt: "Gallery Image 8",
      category: "Facility",
    },
    {
      id: 9,
      src: "https://medixal-html.vercel.app/assets/img/casestydy_3.jpeg",
      alt: "Gallery Image 9",
      category: "Team",
    },
  ];

  const filterCategories = [
    "All",
    ...new Set(galleryImages.map((image) => image.category)),
  ];

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter);

  return (
    <section className="cs_gallery cs_style_1">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div
          className="cs_section_heading cs_style_1 cs_text_center wow fadeInUp"
          data-wow-duration="0.9s"
          data-wow-delay="0.25s"
          style={{
            visibility: "visible",
            animationDuration: "0.9s",
            animationDelay: "0.25s",
            animationName: "fadeInUp",
          }}
        >
          <p className="cs_section_subtitle cs_accent_color cs_fs_18 cs_medium cs_heading_font">
            Our Gallery
          </p>
          <h2 className="cs_section_title cs_fs_48 mb-0">
            Explore Our <span className="cs_accent_color">Photo Gallery</span>
          </h2>
        </div>
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
        <div className="cs_height_50 cs_height_lg_40" />
        <div className="row cs_row_gap_30 cs_gap_y_30">
          {filteredImages.map((image) => (
            <GalleryItem key={image.id} image={image} />
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const GalleryItem = ({ image }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="cs_gallery_item cs_radius_10 overflow-hidden">
        <div className="cs_card_thumbnail cs_radius_10">
          <img src={image.src} alt={image.alt} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
