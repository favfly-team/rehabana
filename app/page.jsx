import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CTAFormSection from "@/components/cta-section/form";
import FeaturesSection from "@/components/features-section";
import FeaturesImageSection from "@/components/features-section/image";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <AboutSection swap />
      <CTAFormSection />
      <FeaturesSection />
      <FeaturesImageSection />
    </div>
  );
};

export default Home;
