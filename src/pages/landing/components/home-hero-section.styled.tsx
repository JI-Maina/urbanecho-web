import Button from "@/components/ui/button";
import AppTheme from "@/lib/theme";
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
`;
export const HomeheroSectionLeftTopHeader = styled.h1`
  ${AppTheme.typography.heading["56/medium"]}
  
 
`;
export const HomeheroSectionLeftTopHeaderSpecialText = styled.span<{color:string}>`
    color: ${(props) => props.color};
    position: relative;
    background-color: transparent;
    text-shadow: ${(props) => `0 0 40px ${props.color}`};
    margin-left: ${(props) => props.theme.spacing['16']};
    /* &::before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(10px);
        opacity: 0.1;
        z-index: 1;
        height: 100%;
        width: 100%;
        box-shadow: 10px 10px 30px ${props => props.color} inset, 10px 10px 30px ${props => props.color};
    } */
    
`
export const HomeheroSectionLeftCtaContainer = styled.div`
display: flex;
gap: 24px;
`;

export const HomeheroSectionLeftCtaButton = styled(Button)<{
  variant: "primary" | "secondary";
}>`
width: 200px;
padding: 1rem;
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
`;
export const HomeheroSectionRightContainerImage = styled.img`
  height: 100%;
  /* width: 40.75rem;  */
  /* object-fit: cover; */
  object-position: center;
`;
