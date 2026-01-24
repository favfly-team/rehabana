/**
 * Common Section Heading Component
 * 
 * @param {string} align - Alignment: "left" | "center" | "split"
 * @param {string} subtitle - Subtitle text
 * @param {ReactNode} title - Title content (can be string or JSX)
 * @param {ReactNode} rightContent - Right side content for split layout
 * @param {string} className - Additional CSS classes
 * @param {object} subtitleProps - Additional props for subtitle element
 * @param {object} titleProps - Additional props for title element
 */

const SectionHeading = ({
  align = "left",
  subtitle,
  title,
  rightContent,
  className = "",
  subtitleProps = {},
  titleProps = {},
  ...rest
}) => {
  // Determine alignment classes
  const getAlignmentClass = () => {
    if (align === "center") return "cs_text_center";
    if (align === "split") return "cs_type_1";
    return "";
  };

  // Base classes
  const baseClasses = "cs_section_heading cs_style_1";
  const alignmentClass = getAlignmentClass();
  const headingClasses = `${baseClasses} ${alignmentClass} ${className}`.trim();

  // Default subtitle classes
  const defaultSubtitleClasses =
    "cs_section_subtitle cs_fs_18 cs_medium cs_accent_color cs_heading_font";
  const subtitleClasses = `${defaultSubtitleClasses} ${subtitleProps.className || ""}`.trim();

  // Default title classes
  const defaultTitleClasses = "cs_section_title cs_fs_48 mb-0";
  const titleClasses = `${defaultTitleClasses} ${titleProps.className || ""}`.trim();

  // Split layout
  if (align === "split") {
    return (
      <div className={headingClasses} {...rest}>
        <div className="cs_section_heading_left">
          {subtitle && (
            <p className={subtitleClasses} {...subtitleProps}>
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className={titleClasses} {...titleProps}>
              {title}
            </h2>
          )}
        </div>
        {rightContent && (
          <div className="cs_section_heading_right">{rightContent}</div>
        )}
      </div>
    );
  }

  // Default layout (left or center)
  return (
    <div className={headingClasses} {...rest}>
      {subtitle && (
        <p className={subtitleClasses} {...subtitleProps}>
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className={titleClasses} {...titleProps}>
          {title}
        </h2>
      )}
    </div>
  );
};

export default SectionHeading;
