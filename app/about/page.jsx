import AboutSection from "@/components/about-section";
import CTASection from "@/components/cta-section";
import FeaturesImageSection from "@/components/features-section/image";
import SecondaryHeroSection from "@/components/hero-section/secondary";
import TestimonialSection from "@/components/testimonial-section";

const About = () => {
  return (
    <div>
      <SecondaryHeroSection />
      <AboutSection />
      <TestimonialSection />
      <FeaturesImageSection />
      <CTASection />
    </div>
  );
};

export default About;
