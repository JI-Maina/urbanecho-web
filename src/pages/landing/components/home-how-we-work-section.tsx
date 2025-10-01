import {
  HomeWorkStepCardTextWrapper,
  HowWeWorkHeading,
  HowWeWorkMainContainer,
  HowWeWorkStepCard,
  HowWeWorkStepCardDescription,
  HowWeWorkStepCardImage,
  HowWeWorkStepCardTitle,
  HowWeWorkStepLine,
  HowWeWorkStepNumber,
  HowWeWorkStepsCardsContainer,
  HowWeWorkStepsContainer,
  HowWeWorkStepsMainContainer,
} from "./home-how-we-work-section.styled";
import { useColor } from "@/providers/theme-provider";

export default function HomeHowWeWorkSection() {
  const stepNumberColor = useColor("content.content-brand");
  const stepNumberBgColor = useColor("background.background-selected");
  const borderFocusColor = useColor("border.border-focus");
  const cardTitleColor = useColor("content.content-primary");
  const cardParagraphColor = useColor("content.content-tertiary");
  return (
    <HowWeWorkMainContainer>
      <HowWeWorkHeading>We are with you every step of the way</HowWeWorkHeading>
      <HowWeWorkStepsMainContainer>
        <HowWeWorkStepsContainer>
          <HowWeWorkStepNumber
            color={stepNumberColor}
            bgColor={stepNumberBgColor}
          >
            1
          </HowWeWorkStepNumber>
          <HowWeWorkStepLine bgColor={borderFocusColor} />
          <HowWeWorkStepNumber
            color={stepNumberColor}
            bgColor={stepNumberBgColor}
          >
            2
          </HowWeWorkStepNumber>
          <HowWeWorkStepLine bgColor={borderFocusColor} />
          <HowWeWorkStepNumber
            color={stepNumberColor}
            bgColor={stepNumberBgColor}
          >
            3
          </HowWeWorkStepNumber>
        </HowWeWorkStepsContainer>
        {/* Cards */}
        <HowWeWorkStepsCardsContainer>
          <HowWeWorkStepCard>
            <HowWeWorkStepCardImage src="/images/brain_data.png" />
            <HomeWorkStepCardTextWrapper>
              <HowWeWorkStepCardTitle color={cardTitleColor}>
                Consultation & Scoping
              </HowWeWorkStepCardTitle>
              <HowWeWorkStepCardDescription color={cardParagraphColor}>
                We initiate our partnership by mapping your urban landscape from
                your goals to your data realities.
              </HowWeWorkStepCardDescription>
            </HomeWorkStepCardTextWrapper>
          </HowWeWorkStepCard>
          <HowWeWorkStepCard>
            <HowWeWorkStepCardImage src="/images/city_digital_twin.png" />
            <HomeWorkStepCardTextWrapper>
              <HowWeWorkStepCardTitle color={cardTitleColor}>
                Digital Twin Implementation
              </HowWeWorkStepCardTitle>
              <HowWeWorkStepCardDescription color={cardParagraphColor}>
                We construct and validate your city's digital twin against
                real-world data, ensuring a reliable foundation.
              </HowWeWorkStepCardDescription>
            </HomeWorkStepCardTextWrapper>
          </HowWeWorkStepCard>
          <HowWeWorkStepCard>
            <HowWeWorkStepCardImage src="/images/Access_AI.png" />
            <HomeWorkStepCardTextWrapper>
              <HowWeWorkStepCardTitle color={cardTitleColor}>
                DTaaS Platform Access & Support
              </HowWeWorkStepCardTitle>
              <HowWeWorkStepCardDescription color={cardParagraphColor}>
                You access our platform to freely run simulations, use the AI
                co-planner, and monitor real-world results.
              </HowWeWorkStepCardDescription>
            </HomeWorkStepCardTextWrapper>
          </HowWeWorkStepCard>
        </HowWeWorkStepsCardsContainer>
      </HowWeWorkStepsMainContainer>
    </HowWeWorkMainContainer>
  );
}
