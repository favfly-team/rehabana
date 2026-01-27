/**
 * @typedef {import("@prismicio/client").Content.TestimonialSectionSlice} TestimonialSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialSectionSlice>} TestimonialSectionProps
 * @type {import("react").FC<TestimonialSectionProps>}
 *
 * Variations:
 * - default: testimonial cards (image, review, name, info)
 * - video: video-style testimonials (image, video, title, details)
 * - slider: testimonial slider (matches @/components/testimonial-section/slider.jsx) — heading, items (image, title, subtitle, quote, rating)
 */
const TestimonialSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for testimonial_section (variation: {slice.variation})
      slices.
      <br />
      <strong>You can edit this slice directly in your code editor.</strong>
    </section>
  );
};

export default TestimonialSection;
