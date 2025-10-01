import MapCta from "@/components/map-cta";
import CompanyAboutSection from "./company-about-section";
import CompanyIntroSection from "./company-intro-section";
import CompanyLogosSection from "./company-logos-section";
import CompanyOurStorySection from "./company-our-story-section";
import CompanyTeamSection from "./company-team-section";
import CompanyValuesSection from "./company-values-section";

export default function CompanyPage() {
  return (
    <>
      <CompanyIntroSection />
      <CompanyOurStorySection/>
      <CompanyAboutSection/>
      <CompanyTeamSection/>
      <CompanyValuesSection/>
      <CompanyLogosSection/>
      <MapCta/>
    </>
  );
}
