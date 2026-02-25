"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";
import { asText } from "@prismicio/client";

const FAQSection = ({ slice }) => {
  const { primary } = slice || {};
  const { items } = primary || {};
  const [activeId, setActiveId] = useState(0);

  const leftColumnFAQs = items
    ? items.filter((_, index) => index % 2 === 0)
    : [];
  const rightColumnFAQs = items
    ? items.filter((_, index) => index % 2 === 1)
    : [];

  return (
    <section className="position-relative">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <SectionHeading primary={primary} variant="center" />
        {items && items.length > 0 && (
          <>
            <div className="cs_height_50 cs_height_lg_40" />
            <div className="row cs_row_gap_40">
              <div className="col-lg-6">
                {leftColumnFAQs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    faqIndex={index * 2}
                    isActive={activeId === index * 2}
                    onToggle={() =>
                      setActiveId(activeId === index * 2 ? null : index * 2)
                    }
                  />
                ))}
              </div>
              <div className="col-lg-6">
                {rightColumnFAQs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    faqIndex={index * 2 + 1}
                    isActive={activeId === index * 2 + 1}
                    onToggle={() =>
                      setActiveId(
                        activeId === index * 2 + 1 ? null : index * 2 + 1
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
};

const FAQItem = ({ faq, isActive, onToggle }) => {
  const { title, details } = faq || {};

  return (
    <div
      className={`cs_accordian cs_type_1 ${isActive ? "active" : ""}`}
      onClick={onToggle}
    >
      <div className="cs_accordian_head">
        <h3 className="cs_accordian_title cs_fs_20 cs_medium">
          {asText(title)}
        </h3>
        <span className="cs_accordian_toggle cs_center cs_radius_50">
          <FaPlus />
        </span>
      </div>
      <div
        className="cs_accordian_body"
        style={{
          display: isActive ? "block" : "none",
        }}
      >
        <PrismicRichText
          field={details}
          components={createRichTextComponents({
            paragraphClassName: "leading-relaxed mb-0",
          })}
        />
      </div>
    </div>
  );
};

export default FAQSection;
