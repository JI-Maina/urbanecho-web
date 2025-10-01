import {
  HomeBenefitsSectionMainContainer,
  BenefitCardContainer,
  BenefitCardDescription,
  BenefitCardImage,
  BenefitCardTextSection,
  BenefitCardImgSection,
  BenefitCardTitle,
  BenefitCardsMainContainer,
  HomeBenefitsSectionContainerCallToAction,
  HomeBenefitsSectionContainerH2,
  HomeBenefitsSectionContainerHeading,
  HomeBaseContainer,
} from "./home-benefits-section.styled";
import { useColor } from "@/providers/theme-provider";

export default function HomeBenefitsSection() {
  return (
    <HomeBaseContainer bg={useColor("background.background-brand-subtle")}>
      <HomeBenefitsSectionMainContainer>
        {/* Heading section */}
        <HomeBenefitsSectionContainerHeading>
          <HomeBenefitsSectionContainerH2>
            We turn urban complexity into clarity with calibrated digital twins
            powered by our AI Co-Planner
          </HomeBenefitsSectionContainerH2>
          <HomeBenefitsSectionContainerCallToAction variant="primary">
            Book a Demo
          </HomeBenefitsSectionContainerCallToAction>
        </HomeBenefitsSectionContainerHeading>
        {/* Benefits Cards section */}
        <BenefitCardsMainContainer>
          {/* ======== 001 ======= */}
          <BenefitCardContainer>
            <BenefitCardTextSection>
              <BenefitCardTitle>Digitise cities anywhere</BenefitCardTitle>
              <BenefitCardDescription>
                Our dynamic visualization provides a rich, multi-layered map of
                cities anywhere.
              </BenefitCardDescription>
            </BenefitCardTextSection>
            <BenefitCardImgSection>
              <BenefitCardImage src="/images/full-frame-shot-city.jpg" />
            </BenefitCardImgSection>
          </BenefitCardContainer>
          {/* ======== 002 ======= */}
          <BenefitCardContainer>
            <BenefitCardTextSection>
              <BenefitCardTitle>
                Ask in Plain Language, Get Answers
              </BenefitCardTitle>
              <BenefitCardDescription>
                Our AI Co-Planner allows you to run sophisticated simulations
                using plain language, no technical expertise required.
              </BenefitCardDescription>
            </BenefitCardTextSection>
            <BenefitCardImgSection>
              <BenefitCardImage src="/images/data-overlay-confused-business-people-office-problem-solving-system-future-technology-hologram-man-women-working-together-programming-code-online-error-digital-agency.jpg" />
            </BenefitCardImgSection>
          </BenefitCardContainer>
          {/* ======== 003 ======= */}
          <BenefitCardContainer>
            <BenefitCardTextSection>
              <BenefitCardTitle>
                Understand How Decisions Affect Real People
              </BenefitCardTitle>
              <BenefitCardDescription>
                Our agent-based simulation engine models behavioural patterns of
                people in your digital twin.
              </BenefitCardDescription>
            </BenefitCardTextSection>
            <BenefitCardImgSection>
              <BenefitCardImage src="/images/demographic-census-concept-representation.jpg" />
            </BenefitCardImgSection>
          </BenefitCardContainer>
        </BenefitCardsMainContainer>
      </HomeBenefitsSectionMainContainer>
    </HomeBaseContainer>
  );
}
