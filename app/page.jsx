import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CTAFormSection from "@/components/cta-section/form";
import FeaturesSection from "@/components/features-section";
import FeaturesImageSection from "@/components/features-section/image";
import CTAForm2Section from "@/components/cta-section/form2";
import ProcessSection from "@/components/process-section/page";
import TestimonialVideoSection from "@/components/testimonial-section/video";
import GallerySection from "@/components/gallery-section";
import ServicesSection from "@/components/services-section";
import TestimonialSection from "@/components/testimonial-section";
import FAQSection from "@/components/faq-section";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <AboutSection swap />
      <CTAFormSection />
      <FeaturesSection />
      <FeaturesImageSection />
      <CTAForm2Section />
      <ProcessSection />
      <TestimonialVideoSection />
      <GallerySection />
      <ServicesSection />
      <TestimonialSection />
      <FAQSection />
    </div>
  );
};

export default Home;
