import AppTheme from "@/lib/theme";
import styled from "styled-components";

/**
 * @fileoverview styled components for Home how we work Section
 */
export const HowWeWorkMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: ${({ theme: { layout } }) => layout.container.desktop.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing[80]} ${theme.spacing[80]}`};
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    padding: ${({ theme }) => `${theme.spacing[40]} ${theme.spacing[16]}`};
  }
`;

export const HowWeWorkHeading = styled.h2`
  ${({ theme }) => theme.typography.heading["40/medium"]}
  text-align: center;
`;

export const HowWeWorkStepsMainContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[64]};
  margin-top: ${({ theme }) => theme.spacing[64]};
  flex-direction: column;
`;
export const HowWeWorkStepsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;
export const HowWeWorkStepNumber = styled.span<{
  color: string;
  bgColor: string;
}>`
  ${({ theme }) => theme.typography.heading["14/medium"]}
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  padding: ${({ theme }) => `${theme.spacing[16]} ${theme.spacing[16]}`};

  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    display: none;
  }
`;
export const HowWeWorkStepLine = styled.div<{ bgColor: string }>`
  width: 100%;
  border: 0.5px solid ${(props) => props.bgColor};
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    display: none;
  }
`;
export const HowWeWorkStepsCardsContainer = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing["24"]};
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    grid-template-columns: 1fr;
    /* width: 60%; */
    margin: 0 auto;
  }
`;
export const HowWeWorkStepCardNumber = styled.span<{
  color: string;
  bgColor: string;
}>`
  display: none;
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    display: block;
    ${({ theme }) => theme.typography.heading["14/medium"]}
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
    padding: ${({ theme }) => `${theme.spacing["06"]} ${theme.spacing["06"]}`};
    height: ${({ theme }) => theme.spacing["32"]};
    width: ${({ theme }) => theme.spacing["32"]};
    justify-self: center;
    text-align: center;
    align-self: center;
  }
`;
export const HowWeWorkStepCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["16"]};
`;
export const HomeWorkStepCardTextWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["04"]};
  padding: ${({ theme }) => `${theme.spacing["24"]} ${theme.spacing["24"]}`};
`;
export const HowWeWorkStepCardTitle = styled.h3<{ color: string }>`
  ${AppTheme.typography.heading["20/medium"]}
  color: ${(props) => props.color};
`;
export const HowWeWorkStepCardDescription = styled.p<{ color: string }>`
  ${AppTheme.typography.paragraph["20/400"]}
  color: ${(props) => props.color};
`;
export const HowWeWorkStepCardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  height: 304px;
`;
