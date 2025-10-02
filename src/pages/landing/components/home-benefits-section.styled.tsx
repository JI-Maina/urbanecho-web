/**
 * @fileoverview styled components for HomeBenefitsSection
 */
import Button from "@/components/ui/button";
import styled from "styled-components";
export const HomeBaseContainer = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
`;

export const HomeBenefitsSectionMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: ${({ theme: { layout } }) => layout.container.desktop.maxWidth};
  gap: ${({ theme }) => theme.spacing[40]};
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.spacing[64]} `};
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    padding: ${({ theme }) => `${theme.spacing[40]} ${theme.spacing[16]}`};
  }
`;

/**
 * ================ Heading section ==============
 */
export const HomeBenefitsSectionContainerHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: ${({ theme: { layout } }) =>
    layout.container.desktop.maxWidth["600"]};
  padding: ${({ theme }) => `${theme.spacing[80]} 0 ${theme.spacing[40]} 0`};
  text-align: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    padding: ${({ theme }) => `${theme.spacing[40]} ${theme.spacing[16]}`};
    max-width: 100%;
  }
`;

export const HomeBenefitsSectionContainerH2 = styled.h2`
  ${({ theme }) => theme.typography.heading["40/medium"]}
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    ${({ theme }) => theme.typography.heading["24/medium"]}
  }
`;

export const HomeBenefitsSectionContainerCallToAction = styled(Button)`
  padding: ${({ theme }) => `${theme.spacing[14]} ${theme.spacing[16]}`};
  width: 156px;
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    width: 100%;
  }
`;

/**
 * ================= Benefits Cards section ==========
 */
export const BenefitCardsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[80]};
`;

export const BenefitCardContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[64]};
  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[40]};
    &:nth-child(odd) {
      flex-direction: column;
    }
  }
`;
export const BenefitCardTextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing[40]} 0`};
  gap: ${({ theme }) => theme.spacing[16]};
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    text-align: center;
  }
`;

export const BenefitCardImgSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const BenefitCardTitle = styled.h3`
  ${({ theme }) => theme.typography.heading["32/medium"]}
`;
export const BenefitCardDescription = styled.p`
  ${({ theme }) => theme.typography.paragraph["20/400"]}
`;

export const BenefitCardImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 16px;
`;
