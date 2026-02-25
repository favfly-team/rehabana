# UI Components

Common reusable components for the site.

## SectionHeading

Section heading with subheading, heading, and description. Two alignments: **left** (default) or **center**.

### Props

- `align` or `variant` (string): `"left"` | `"center"` (default: `"left"`)
- `primary` (object): Prismic slice primary with `subheading`, `heading`, `description`
- `subtitle` (string): Subtitle text (legacy)
- `title` (ReactNode): Title content (legacy)
- `description` (ReactNode): Description content (legacy)
- `className`, `subtitleClassName`, `titleClassName`, `descriptionClassName`: Optional class overrides
- `includeDescription` (boolean): Whether to show description (default: `true`)

### Examples

```jsx
import { SectionHeading } from "@/components/ui";

// Left aligned (default) – subheading, heading, description
<SectionHeading
  primary={primary}
  variant="left"
/>

// Center aligned
<SectionHeading
  primary={primary}
  variant="center"
/>

// Legacy: left with plain props
<SectionHeading
  subtitle="About us"
  title="Advanced technology and Specialist Doctors."
  description="Optional description text."
/>

// Legacy: center with custom classes
<SectionHeading
  align="center"
  subtitle="Work Process"
  title={
    <>
      How Work Process Our <br />
      <span className="cs_accent_color">Rehabilitations</span>
    </>
  }
  className="wow fadeInUp"
/>
```

## Button

A link button component (using `<a>` tag) with multiple variants. **Note: This is only for link buttons, not form buttons.**

### Props

- `variant` (string): Button variant - `"primary"` | `"text"` | `"player"` | `"player2"` (default: `"primary"`)
- `href` (string): Link URL
- `children` (ReactNode): Button content/text
- `className` (string): Additional CSS classes
- `radius` (string): Border radius for primary variant - `"100"` | `"5"` (default: `"100"`)
- `playerType1` (boolean): Add `cs_type_1` class for player variant (default: `false`)
- `playerIcon` (ReactNode): Icon component for player variant
- Other anchor tag props (onClick, target, etc.)

### Variants

1. **primary**: Standard button with background color
2. **text**: Text button with arrow icon animation
3. **player**: Video player button with icon and text
4. **player2**: Circular play button (style 2)

### Examples

```jsx
import { Button } from "@/components/ui";
import { FaPlay } from "react-icons/fa6";

// Primary button (default)
<Button href="/about" variant="primary">
  Learn More
</Button>

// Primary button with different radius
<Button href="/contact" variant="primary" radius="5">
  Send Message
</Button>

// Text button (with arrow)
<Button href="/service-details" variant="text">
  Get Services
</Button>

// Player button (video)
<Button
  href="https://www.youtube.com/embed/rRid6GCJtgc"
  variant="player"
  playerType1={true}
  playerIcon={<FaPlay />}
>
  See How We Works
</Button>

// Player button 2 (circular)
<Button
  href="https://www.youtube.com/embed/rRid6GCJtgc"
  variant="player2"
/>
```
