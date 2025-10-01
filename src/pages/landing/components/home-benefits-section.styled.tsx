/**
 * @fileoverview styled components for HomeBenefitsSection
 */
import Button from "@/components/ui/button";
import AppTheme from "@/lib/theme";
import styled from "styled-components";
export const HomeBaseContainer = styled.div<{ bg: string }>`
  background-color: ${(props) => props.bg};
  padding: ${({ theme }) => `0 ${theme.spacing[64]} `};
`;

export const HomeBenefitsSectionMainContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing[64]} ${theme.spacing["128"]}`};
  display: flex;
  flex-direction: column;
  max-width: ${({ theme: { layout } }) => layout.container.desktop.maxWidth};
  gap: ${({ theme }) => theme.spacing[40]};
  margin: 0 auto;
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
`;

export const HomeBenefitsSectionContainerH2 = styled.h2`
  ${AppTheme.typography.heading["40/medium"]}
`;

export const HomeBenefitsSectionContainerCallToAction = styled(Button)`
  padding: ${({ theme }) => `${theme.spacing[14]} ${theme.spacing[16]}`};
  width: 156px;
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
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;
export const BenefitCardTextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing[40]} 0`};
  gap: ${({ theme }) => theme.spacing[16]};
`;
export const BenefitCardImgSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const BenefitCardTitle = styled.h3`
  ${AppTheme.typography.heading["32/medium"]}
`;
export const BenefitCardDescription = styled.p`
  ${AppTheme.typography.heading["20/medium"]}
`;

export const BenefitCardImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 16px;
`;
