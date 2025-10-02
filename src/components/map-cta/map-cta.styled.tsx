/**
 * @file map-cta.styled.tsx
 */
import styled from "styled-components";
import Button from "../ui/button";

export const MapCtaMainContainer = styled.div<{ bg: string }>`
  width: 100%;
  height: 35rem; /** 560px */
  background: ${(props) => props.bg};
  position: relative;
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    height: 400px;
  }
`;

export const MapCtaContentWrapper = styled.div<{ imgPath: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: ${({ theme: { layout } }) => layout.container.desktop.maxWidth};
  margin: 0 auto;
  background-image: ${(props) => props.imgPath && `url("${props.imgPath}")`};
  background-size:  auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-origin: border-box;
`;

export const MapCtaWrapper = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[24]};
  padding: ${({ theme }) => `${theme.spacing["80"]} ${theme.spacing["104"]}`};
  z-index: 10;
`;

export const MapCtaHeading = styled.h2<{ color: string }>`
  ${({ theme }) => theme.typography.heading["56/medium"]}
  color: ${(props) => props.color};
  max-width: 61.5rem; /** 984px */
  text-align: center;

  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    ${({ theme }) => theme.typography.heading["32/medium"]}
    max-width: 100%;
  }
`;

export const MapCtaButton = styled(Button)<{
  ctaBg: string;
  textColor: string;
  hoverBg: string;
}>`
  ${({ theme }) => theme.typography.paragraph["20/400"]}
  background-color: ${(props) => props.ctaBg};
  color: ${(props) => props.textColor};
  border: none;
  width: ${({ theme }) => theme.spacing["192"]};
  &:hover {
    background-color: ${(props) => props.hoverBg};
  }
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    width: 100%;
  }
`;
