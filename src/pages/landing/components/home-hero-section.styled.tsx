import Button from "@/components/ui/button";
import styled from "styled-components";

/**
 * ================ MAIN CONTAINER ==============
 */
export const HomeHeroSectionMainContainer = styled.div``;

export const HomeHeroSectionContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 120px 128px;
  display: flex;
  align-items: center;
  gap: 64px;
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    flex-direction: column-reverse;
    padding: ${(props) =>
      `${props.theme.spacing["16"]} ${props.theme.spacing["16"]} ${props.theme.spacing["40"]} ${props.theme.spacing["16"]}`};
  }
`;

/**
 * ================== lEFT OF CONTAINER ==========
 */

export const HomeheroSectionLeftContainer = styled.div`
  width: 532px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    width: 100%;
  }
`;
export const HomeheroSectionLeftTopHeader = styled.h1`
  ${({ theme }) => theme.typography.heading["56/medium"]}
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    ${({ theme }) => theme.typography.heading["32/medium"]}
    text-align: center;
  }
`;
export const HomeheroSectionLeftTopHeaderSpecialText = styled.span<{
  color: string;
}>`
  color: ${(props) => props.color};
  position: relative;
  background-color: transparent;
  text-shadow: ${(props) => `0 0 40px ${props.color}`};
  margin-left: ${(props) => props.theme.spacing["16"]};
`;
export const HomeheroSectionLeftCtaContainer = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HomeheroSectionLeftCtaButton = styled(Button)<{
  variant: "primary" | "secondary";
}>`
  width: 200px;
  padding: 1rem;
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    width: 100%;
    padding: ${({ theme }) => `${theme.spacing["16"]} ${theme.spacing["08"]}`};
  }
`;

/**
 * ================== RIGHT OF THE CONTAINER ==========
 */
export const HomeheroSectionRightContainer = styled.div`
  width: 532px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    width: 100%;
  }
`;
export const HomeheroSectionRightContainerImage = styled.img`
  height: 100%;
  /* width: 40.75rem;  */
  /* object-fit: cover; */
  object-position: center;

  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    width: 100%;
    /* height: 236px; */
    object-fit: cover;
  }
`;
