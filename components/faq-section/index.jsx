"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const FAQSection = () => {
  const faqData = [
    {
      id: 1,
      question: "How can I Schedule an Appointment Online?",
      answer:
        "We are The Best Dental Service Provided , Our Dentist Team Dedicated & Professionally.",
      isActive: true,
      column: "left",
    },
    {
      id: 2,
      question: "Do you Accept Dental Health Insurance?",
      answer:
        "We are The Best Dental Service Provided , Our Dentist Team Dedicated & Professionally.",
      isActive: false,
      column: "left",
    },
    {
      id: 3,
      question: "What Services Do You Offer?",
      answer:
        "We are The Best Dental Service Provided , Our Dentist Team Dedicated & Professionally.",
      isActive: false,
      column: "left",
    },
    {
      id: 4,
      question: "How Do I Prepare for My First Visit?",
      answer:
        "We are The Best Dental Service Provided , Our Dentist Team Dedicated & Professionally.",
      isActive: false,
      column: "left",
    },
    {
      id: 5,
      question: "Do you Accept Dental Health Insurance?",
      answer:
        "We are The Best Dental Service Provided , Our Dentist Team Dedicated & Professionally.",
      isActive: false,
      column: "right",
    },
    {
      id: 6,
      question: "Do you Offers Financial options For Dental Procedures?",
      answer:
        "We are The Best Dental Service Provided , Our Dentist Team Dedicated & Professionally.",
      isActive: false,
      column: "right",
    },
    {
      id: 7,
      question: "What Should I Expect Dental Check up?",
      answer:
        "We are The Best Dental Service Provided , Our Dentist Team Dedicated & Professionally.",
      isActive: false,
      column: "right",
    },
  ];

  const [activeId, setActiveId] = useState(1);

  const leftColumnFAQs = faqData.filter((faq) => faq.column === "left");
  const rightColumnFAQs = faqData.filter((faq) => faq.column === "right");

  return (
    <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_text_center wow fadeInUp">
          <p className="cs_section_subtitle cs_fs_18 cs_medium cs_accent_color cs_heading_font">
            Faq's
          </p>
          <h2 className="cs_section_title cs_fs_48 mb-0">
            Feel Free Asked Any <br /> Questions
          </h2>
        </div>
        <div className="cs_height_50 cs_height_lg_40" />
        <div className="row cs_row_gap_40">
          <div className="col-lg-6">
            {leftColumnFAQs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isActive={activeId === faq.id}
                onToggle={() =>
                  setActiveId(activeId === faq.id ? null : faq.id)
                }
              />
            ))}
          </div>
          <div className="col-lg-6">
            {rightColumnFAQs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isActive={activeId === faq.id}
                onToggle={() =>
                  setActiveId(activeId === faq.id ? null : faq.id)
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="cs_faq_shape_1 position-absolute">
        <img
          src="https://medixal-html.vercel.app/assets/img/faq_shape_1.svg"
          alt="Shape"
        />
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const FAQItem = ({ faq, isActive, onToggle }) => {
  return (
    <div
      className={`cs_accordian cs_type_1 ${isActive ? "active" : ""}`}
      onClick={onToggle}
    >
      <div className="cs_accordian_head">
        <h2 className="cs_accordian_title cs_fs_20 cs_semibold">
          {faq.question}
        </h2>
        <span className="cs_accordian_toggle cs_center cs_radius_50">
          <FaPlus />
        </span>
      </div>
      <div
        className="cs_accordian_body cs_fs_18 cs_heading_color"
        style={{ display: isActive ? "block" : "none" }}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default FAQSection;
