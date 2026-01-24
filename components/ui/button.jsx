import { FaArrowRightLong } from "react-icons/fa6";

/**
 * Common Link Button Component
 * Only for link buttons (using <a> tag), not form buttons
 * 
 * @param {string} variant - Button variant: "primary" | "text" | "player" | "player2"
 * @param {string} href - Link URL
 * @param {ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 * @param {string} radius - Border radius: "100" | "5" (default: "100" for primary)
 * @param {boolean} playerType1 - Add cs_type_1 class for player variant
 * @param {ReactNode} playerIcon - Icon component for player variant
 * @param {object} rest - Other anchor tag props
 */

const Button = ({
  variant = "primary",
  href,
  children,
  className = "",
  radius = "100",
  playerType1 = false,
  playerIcon,
  ...rest
}) => {
  // Primary button variant
  if (variant === "primary") {
    const defaultClasses = `cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg cs_radius_${radius}`;
    const buttonClasses = `${defaultClasses} ${className}`.trim();

    return (
      <a href={href} className={buttonClasses} {...rest}>
        <span className="cs_btn_text">{children}</span>
      </a>
    );
  }

  // Text button variant (with arrow icon)
  if (variant === "text") {
    const defaultClasses = "cs_text_btn cs_fs_18 cs_medium cs_heading_color";
    const buttonClasses = `${defaultClasses} ${className}`.trim();

    return (
      <a href={href} className={buttonClasses} {...rest}>
        <span>{children}</span>
        <div className="cs_text_btn_icon cs_center">
          <span>
            <FaArrowRightLong />
          </span>
          <span>
            <FaArrowRightLong />
          </span>
        </div>
      </a>
    );
  }

  // Player button variant (for video buttons - style 1)
  if (variant === "player") {
    const typeClass = playerType1 ? "cs_type_1" : "";
    const defaultClasses = `cs_player_btn cs_style_1 ${typeClass}`;
    const buttonClasses = `${defaultClasses} ${className}`.trim();

    return (
      <a href={href} className={buttonClasses} {...rest}>
        <span className="cs_player_btn_icon cs_center">
          {playerIcon}
        </span>
        {children && (
          <span className="cs_play_btn_text cs_fs_18 cs_medium cs_accent_color">
            {children}
          </span>
        )}
      </a>
    );
  }

  // Player button variant 2 (circular play button)
  if (variant === "player2") {
    const defaultClasses = "cs_player_btn cs_style_2 cs_center";
    const buttonClasses = `${defaultClasses} ${className}`.trim();

    return (
      <a href={href} className={buttonClasses} {...rest}>
        <span></span>
      </a>
    );
  }

  // Fallback to primary
  const defaultClasses = `cs_btn cs_style_1 cs_fs_18 cs_medium cs_accent_bg cs_radius_${radius}`;
  const buttonClasses = `${defaultClasses} ${className}`.trim();

  return (
    <a href={href} className={buttonClasses} {...rest}>
      <span className="cs_btn_text">{children}</span>
    </a>
  );
};

export default Button;
