import {
  CaseCardContainer,
  CaseContainer,
  ProductUsecaseMainContainer,
  ProductUseCaseSectionContainer,
} from "./product-use-case-section.styled";
import { useColor } from "@/providers/theme-provider";
import {
  BuildingOfficeIcon,
  CompassToolIcon,
  GlobeHemisphereWestIcon,
} from "@phosphor-icons/react";
import { LinkButton } from "@/components/ui/button";

export default function ProductUseCaseSection() {
  const caseCardBorderColor = useColor("border.border-tertiary");
  const brandCardColor = useColor("content.content-brand");
  const headerCardColor = useColor("content.content-primary");
  const textCardColor = useColor("content.content-tertiary");
  const cardBackgroundColor = useColor("surface.surface-l0");
  return (
    <ProductUsecaseMainContainer
      backgroundColor={useColor("background.background-brand-subtle")}
    >
      <ProductUseCaseSectionContainer
        headerColor={useColor("content.content-primary")}
      >
        <h2>Empowering Planners, Governments, Institutions and Communities</h2>
        <CaseContainer>
          <CaseCardContainer
            borderColor={caseCardBorderColor}
            brandColor={brandCardColor}
            headerColor={headerCardColor}
            textColor={textCardColor}
            backgroundColor={cardBackgroundColor}
          >
            <BuildingOfficeIcon className="case-card-icon" />
            <div className="case-card-text-container">
              <h2>Policy & Investment Teams</h2>
              <p>
                Prove the ROI of infrastructure projects before spending.
                Simulate policies to avoid costly mistakes and demonstrate
                tangible value to constituents.
              </p>
            </div>
            <LinkButton to="" size="medium" variant="secondary">
              Calculate your savings
            </LinkButton>
          </CaseCardContainer>
          <CaseCardContainer
            borderColor={caseCardBorderColor}
            brandColor={brandCardColor}
            headerColor={headerCardColor}
            textColor={textCardColor}
            backgroundColor={cardBackgroundColor}
          >
            <CompassToolIcon className="case-card-icon" />
            <div className="case-card-text-container">
              <h2>Urban Planners</h2>
              <p>
                Bridge creative vision and complex reality. Stress-test master
                plans and zoning against real-world human behaviour and
                AI-driven forecasts.
              </p>
            </div>
            <LinkButton to="" size="medium" variant="secondary">
              Test a scenario
            </LinkButton>
          </CaseCardContainer>
          <CaseCardContainer
            borderColor={caseCardBorderColor}
            brandColor={brandCardColor}
            headerColor={headerCardColor}
            textColor={textCardColor}
            backgroundColor={cardBackgroundColor}
          >
            <GlobeHemisphereWestIcon className="case-card-icon" />
            <div className="case-card-text-container">
              <h2>Multilateral Organisations</h2>
              <p>
                Evaluate and compare global projects impartially. Ensure funding
                delivers measurable, scalable, and accountable outcomes for
                urban development.
              </p>
            </div>
            <LinkButton to="" size="medium" variant="secondary">
              Ensure accountability
            </LinkButton>
          </CaseCardContainer>
        </CaseContainer>
      </ProductUseCaseSectionContainer>
    </ProductUsecaseMainContainer>
  );
}
