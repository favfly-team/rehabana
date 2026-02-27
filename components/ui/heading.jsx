/**
 * Section Heading Component
 *
 * Renders subheading, heading, and description with two alignment options:
 * - center: all content centered
 * - left: all content left-aligned
 *
 * Use with Prismic: pass primary (slice.primary) and align/variant.
 */

import { PrismicRichText } from "@prismicio/react";
import { createRichTextComponents } from "@/lib/richTextComponents";

const SectionHeading = ({
  primary,
  align: alignProp,
  variant,
  subtitleClassName,
  titleClassName,
  descriptionClassName,
  includeDescription = true,
  className = "",
  ...rest
}) => {
  const align = alignProp ?? variant ?? "left";
  const isCenter = align === "center";

  const baseClasses = "cs_section_heading cs_style_1";
  const alignmentClass = isCenter ? "cs_text_center" : "";
  const headingClasses = `${baseClasses} ${alignmentClass} ${className}`.trim();

  const defaultSubtitleClasses =
    "cs_section_subtitle cs_fs_18 cs_accent_color cs_heading_font";
  const defaultTitleClasses = "cs_section_title cs_semibold cs_fs_32 mb-0";
  const defaultDescriptionClasses = isCenter
    ? "text-center mt-3 leading-relaxed text-sm mb-0"
    : "mt-3 leading-relaxed text-sm mb-0";

  const resolvedSubtitleClasses = subtitleClassName ?? defaultSubtitleClasses;
  const resolvedTitleClasses = titleClassName ?? defaultTitleClasses;
  const resolvedDescriptionClasses =
    descriptionClassName ?? defaultDescriptionClasses;

  const { subheading, heading, description } = primary || {};
  const hasHeading = heading?.[0]?.text;
  const hasSubheading = subheading != null && subheading !== "";
  if (!hasSubheading && !hasHeading) return null;
  const hasDescription = includeDescription && description?.[0]?.text;

  const titleComponents = createRichTextComponents({
    heading1ClassName: resolvedTitleClasses,
    heading2ClassName: resolvedTitleClasses,
    heading3ClassName: resolvedTitleClasses,
  });
  const descriptionComponents = createRichTextComponents({
    paragraphClassName: resolvedDescriptionClasses,
  });

  return (
    <div
      className={headingClasses}
      {...rest}
      style={{
        maxWidth: "850px",
        marginLeft: isCenter ? "auto" : 0,
        marginRight: isCenter ? "auto" : 0,
      }}
    >
      {hasSubheading && <p className={resolvedSubtitleClasses}>{subheading}</p>}
      {hasHeading && (
        <PrismicRichText field={heading} components={titleComponents} />
      )}
      {hasDescription && (
        <PrismicRichText
          field={description}
          components={descriptionComponents}
        />
      )}
    </div>
  );
};

export default SectionHeading;
