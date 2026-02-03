"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { PrismicRichText } from "@prismicio/react";
import { SectionHeading } from "@/components/ui";
import { createRichTextComponents } from "@/lib/richTextComponents";

const FAQSection = ({ slice }) => {
  const { primary } = slice || {};
  const { subheading, heading, description, items } = primary || {};
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
        />
        {description && (
          <PrismicRichText
            field={description}
            components={createRichTextComponents({
              paragraphClassName: "text-center mt-3 leading-relaxed text-sm",
            })}
          />
        )}
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
  const { title, details } = faq || {};

  return (
    <div
      className={`cs_accordian cs_type_1 ${isActive ? "active" : ""}`}
      onClick={onToggle}
    >
      <div className="cs_accordian_head">
        {title?.[0]?.text && (
          <h2 className="cs_accordian_title cs_fs_20 cs_semibold">
            <PrismicRichText
              field={title}
              components={{
                heading1: ({ children }) => <>{children}</>,
                heading2: ({ children }) => <>{children}</>,
                heading3: ({ children }) => <>{children}</>,
              }}
            />
          </h2>
        )}
        <span className="cs_accordian_toggle cs_center cs_radius_50">
          <FaPlus />
        </span>
      </div>
      {details && (
        <div
          className="cs_accordian_body cs_fs_18 cs_heading_color"
          style={{ display: isActive ? "block" : "none" }}
        >
          <PrismicRichText
            field={details}
            components={createRichTextComponents({
              paragraphClassName: "leading-relaxed text-sm mb-2 last:mb-0",
              heading2ClassName: "font-bold text-lg mt-3 mb-1",
              heading3ClassName: "font-bold text-base mt-2 mb-1",
            })}
          />
        </div>
      )}
    </div>
  );
};

export default FAQSection;
