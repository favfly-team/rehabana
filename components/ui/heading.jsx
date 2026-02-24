/**
 * Common Section Heading Component
 *
 * Use with Prismic: pass primary (slice.primary) and variant; the component
 * will render subheading, heading, and description using PrismicRichText.
 *
 * @param {object} primary - Slice primary (subheading, heading, description)
 * @param {string} variant - "left" | "center" | "split" (layout)
 * @param {string} subtitleClassName - Override for subtitle element
 * @param {string} titleClassName - Override for title/heading rich text
 * @param {string} descriptionClassName - Override for description paragraph(s)
 * @param {boolean} includeDescription - When false, do not render description from primary (default true)
 * @param {ReactNode} rightContent - Optional; when set, used instead of description in split layout
 *
 * Legacy (when primary is not passed):
 * @param {string} align - Alignment: "left" | "center" | "split"
 * @param {string} subtitle - Subtitle text
 * @param {ReactNode} title - Title content (string or JSX)
 * @param {ReactNode} rightContent - Right side content for split layout
 * @param {string} className - Additional CSS classes
 * @param {object} subtitleProps - Additional props for subtitle element
 * @param {object} titleProps - Additional props for title element
 */

import { PrismicRichText } from "@prismicio/react";
import { createRichTextComponents } from "@/lib/richTextComponents";

const SectionHeading = ({
  primary,
  variant = "left",
  subtitleClassName,
  titleClassName,
  descriptionClassName,
  includeDescription = true,
  rightContent: rightContentOverride,
  // Legacy props (when primary is not used)
  align: alignLegacy,
  subtitle: subtitleLegacy,
  title: titleLegacy,
  rightContent: rightContentLegacy,
  className = "",
  subtitleProps = {},
  titleProps = {},
  ...rest
}) => {
  const isPrimaryMode = primary != null && typeof primary === "object";

  const align = isPrimaryMode ? variant : (alignLegacy ?? "left");

  const getAlignmentClass = () => {
    if (align === "center") return "cs_text_center";
    if (align === "split") return "cs_type_1";
    return "";
  };

  const baseClasses = "cs_section_heading cs_style_1";
  const alignmentClass = getAlignmentClass();
  const headingClasses = `${baseClasses} ${alignmentClass} ${className}`.trim();

  const defaultSubtitleClasses =
    "cs_section_subtitle cs_fs_18 cs_accent_color cs_heading_font";
  const defaultTitleClasses = "cs_section_title cs_fs_40 mb-0";
  const defaultDescriptionClasses =
    align === "split"
      ? "mb-0 leading-relaxed text-sm"
      : "text-center mt-3 leading-relaxed text-sm";

  const resolvedSubtitleClasses =
    subtitleClassName ??
    `${defaultSubtitleClasses} ${subtitleProps.className || ""}`.trim();
  const resolvedTitleClasses =
    titleClassName ??
    `${defaultTitleClasses} ${titleProps.className || ""}`.trim();
  const resolvedDescriptionClasses =
    descriptionClassName ?? defaultDescriptionClasses;

  if (isPrimaryMode) {
    const { subheading, heading, description } = primary;
    const hasHeading = heading?.[0]?.text;
    const hasSubheading = subheading != null && subheading !== "";
    if (!hasSubheading && !hasHeading) return null;
    const hasDescription = includeDescription && description?.[0]?.text;
    const rightContent =
      rightContentOverride != null
        ? rightContentOverride
        : align === "split" && hasDescription
          ? (() => {
              const descComponents = createRichTextComponents({
                paragraphClassName: resolvedDescriptionClasses,
              });
              return (
                <PrismicRichText
                  field={description}
                  components={descComponents}
                />
              );
            })()
          : null;

    const titleComponents = createRichTextComponents({
      heading1ClassName: resolvedTitleClasses,
      heading2ClassName: resolvedTitleClasses,
      heading3ClassName: resolvedTitleClasses,
    });

    const subtitleEl = hasSubheading && (
      <p className={resolvedSubtitleClasses}>{subheading}</p>
    );
    const titleEl = hasHeading && (
      <PrismicRichText field={heading} components={titleComponents} />
    );

    if (align === "split") {
      return (
        <div className={headingClasses} {...rest}>
          <div className="cs_section_heading_left">
            {subtitleEl}
            {titleEl}
          </div>
          {rightContent && (
            <div className="cs_section_heading_right">{rightContent}</div>
          )}
        </div>
      );
    }

    return (
      <div className={headingClasses} {...rest}>
        {subtitleEl}
        {titleEl}
        {align === "center" && includeDescription && hasDescription && (
          <PrismicRichText
            field={description}
            components={createRichTextComponents({
              paragraphClassName: resolvedDescriptionClasses,
            })}
          />
        )}
      </div>
    );
  }

  const subtitleClasses =
    `${defaultSubtitleClasses} ${subtitleProps.className || ""}`.trim();
  const titleClasses =
    `${defaultTitleClasses} ${titleProps.className || ""}`.trim();

  if (align === "split") {
    return (
      <div className={headingClasses} {...rest}>
        <div className="cs_section_heading_left">
          {subtitleLegacy && (
            <p className={subtitleClasses} {...subtitleProps}>
              {subtitleLegacy}
            </p>
          )}
          {titleLegacy && (
            <h2 className={titleClasses} {...titleProps}>
              {titleLegacy}
            </h2>
          )}
        </div>
        {rightContentLegacy && (
          <div className="cs_section_heading_right">{rightContentLegacy}</div>
        )}
      </div>
    );
  }

  return (
    <div className={headingClasses} {...rest}>
      {subtitleLegacy && (
        <p className={subtitleClasses} {...subtitleProps}>
          {subtitleLegacy}
        </p>
      )}
      {titleLegacy && (
        <h2 className={titleClasses} {...titleProps}>
          {titleLegacy}
        </h2>
      )}
    </div>
  );
};

export default SectionHeading;
