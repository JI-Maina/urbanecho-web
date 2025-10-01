import {
  CompanyTeamSectionWrapper,
  CompanyTeamContent,
} from "./company-team-section.styled";
import { useColor } from "@/providers/theme-provider";
import CompanyTeamSVG from "./company-team-svg";

export default function CompanyTeamSection() {
  return (
    <CompanyTeamSectionWrapper
      bgColor={useColor("surface.surface-l0")}
    >
      <CompanyTeamContent
        headerColor={useColor("content.content-primary")}
        paragraphColor={useColor("content.content-tertiary")}
      >
        <CompanyTeamSVG />
        <div className="team-section-content">
          <h2>The Minds Behind UrbanEcho</h2>
          <p>
            Our multidisciplinary team of computational scientists, urban
            planners, and software engineers is supported by strategic advisors
            from ETH Zurich, MIT, and Google. Our vision is to provide planners
            everywhere with the tools to build cities that are more resilient,
            inclusive, and intentionally designed for the people who live in
            them.
          </p>
        </div>
      </CompanyTeamContent>
    </CompanyTeamSectionWrapper>
  );
}
