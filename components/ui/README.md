# UI Components

Common reusable components for the site.

## SectionHeading

A flexible heading component for section titles with support for different alignments.

### Props

- `align` (string): Alignment type - `"left"` | `"center"` | `"split"` (default: `"left"`)
- `subtitle` (string): Subtitle text
- `title` (ReactNode): Title content (can be string or JSX with `<br />` tags)
- `rightContent` (ReactNode): Right side content for split layout (only used when `align="split"`)
- `className` (string): Additional CSS classes
- `subtitleProps` (object): Additional props for subtitle `<p>` element
- `titleProps` (object): Additional props for title `<h2>` element

### Examples

```jsx
import { SectionHeading } from "@/components/ui";

// Left aligned (default)
<SectionHeading
  subtitle="About us"
  title="Advanced technology and Specialist Doctors."
/>

// Center aligned
<SectionHeading
  align="center"
  subtitle="Our Features"
  title="Our Top Notch Features"
/>

// Split layout (with right content)
<SectionHeading
  align="split"
  subtitle="Expertise"
  title="We offer more than Services & all Solutions Medical."
  rightContent={
    <p className="text-end">
      the other hand, we denounce with righteous indignation
    </p>
  }
/>

// With custom classes
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
