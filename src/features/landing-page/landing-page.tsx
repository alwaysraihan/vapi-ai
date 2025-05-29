import AboutUs from "./about-us-section";
import CoreSection from "./core-section";
import HeroSection from "./hero-section/hero-section";
import JourneySection from "./journey-section/journey-section";
import MilestoneSection from "./milestone-section";
import OurSolution from "./our-solution-section";
import ServicesSection from "./services-section/services-section";
import SolutionsSection from "./solutions-section/solutions-section";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <JourneySection />
      <SolutionsSection />
      <ServicesSection />
      <CoreSection />
      <AboutUs />
      <MilestoneSection />
      <OurSolution />
    </>
  );
}

export default LandingPage;
