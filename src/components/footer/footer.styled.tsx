/**
 * @file index.tsx
 */
import styled from "styled-components";

export const FooterContainer = styled.footer<{ bgColor: string  }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ bgColor }) => bgColor};
`;

export const FooterContent = styled.div`
  padding-top: ${({ theme }) => `${theme.spacing[64]}`};
  max-width: ${({ theme: { layout } }) => layout.container.desktop.maxWidth};
  margin: 0 auto;
  width: 100%;
`;
export const FooterContentTop = styled.div<{
  headerColor: string;
  textColor: string;
}>`
  display: flex;
  justify-content: space-between;
  padding-top: ${({ theme }) => `${theme.spacing["160"]} `};
  color: ${(props) => props.textColor};
  & > .logo-section {
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[24]};
    & > img {
      width: 160px;
      height: auto;
    }
    & > p {
      ${({ theme }) => theme.typography.paragraph["16/400"]}
    }
  }
  & > .quick-links {
    width: 632px;
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[32]};
    }
    & > div > h4 {
      ${({ theme }) => theme.typography.heading["14/medium"]}
      color: ${(props) => props.headerColor};
      text-transform: uppercase;
    }
    & ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing[16]};
      padding: 0;
      margin: 0;
    }
    & ul > li {
      ${({ theme }) => theme.typography.paragraph["16/400"]}
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }

      & a {
        color: ${(props) => props.textColor};
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
export const FooterContentBottomLegal = styled.div`
  padding: ${({ theme }) => `${theme.spacing["28"]} ${theme.spacing[10]}`};
  height: 76px;
  text-align: center;
  ${({ theme }) => theme.typography.paragraph["14/400"]}
`;

export const FooterMapBottom = styled.div<{ bgImgPath: string }>`
  height: 21.5rem; /** 344px */
  width: 100%;
  background-image: url(${({ bgImgPath }) => bgImgPath});
  background-repeat: repeat-x;
  background-position: center bottom;
  background-size: auto 100%;
  /* background-position: 0 center; */
`;
