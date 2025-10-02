import styled from "styled-components";

export const ScheduleDemoMainPage = styled.main``;

export const ScheduleDemoContainer = styled.div`
  max-width: ${(props) => props.theme.layout.container.desktop.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing["64"]};
  padding: ${({ theme }) => ` ${theme.spacing["16"]} ${theme.spacing["08"]}`};
`;

export const LeftSection = styled.div`
  height: 736px;
  background-color: #008e87;
  width: 576px;
  position: relative;
  overflow: hidden;
  padding: ${(props) => props.theme.spacing["64"]};
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    display: none;
  }
  & .orange-overlay {
    height: 660px;
    width: 660px;
    background-color: #e19178;
    border-radius: 50%;
    background-blend-mode: hard-light;
    filter: blur(364px);
    position: absolute;
    left: -334px;
    top: -192px;
  }
  img {
    position: absolute;
    width: 680px;
    height: 548px;
    top: 120px;
    left: -168px;
  }

  & .content {
    max-width: 416px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["24"]};
    h2 {
      ${(props) => props.theme.typography.heading["40/medium"]}
      background-image: linear-gradient(to right, #F7F7F8, #F7F7F8,#66BBB7);
      -webkit-background-clip: text; /* For Safari */
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent; /* For other browsers */
      text-shadow: 0px 0.75px 0.8px #005551cc,
        /* teal shadow */ 0px -0.5px 0px #ffffff; /* white highlight */
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.spacing["08"]};
      ${(props) => props.theme.typography.paragraph["16/400"]}
      list-style: none;
      li {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.spacing["08"]};
        color: ${(props) => props.theme.primitivesColors.neutral[50].hex};
      }
    }
  }
`;
export const RightSection = styled.div`
  max-width: 752px;
  width: 100%;
`;
export const ScheduleWrapper = styled.form<{
  $iconColor: string;
  $headerColor: string;
  $textColor: string;
}>`
  padding-top: ${(props) => props.theme.spacing["64"]};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["40"]};
  }
  .header {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["08"]};
    text-align: center;
    justify-content: center;
    align-items: center;
    max-width: 640px;
    h2 {
      ${(props) => props.theme.typography.heading["32/medium"]}
      color: ${(props) => props.$headerColor};
      @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
        ${({ theme }) => theme.typography.heading["24/medium"]}
      }
    }
    p {
      ${(props) => props.theme.typography.paragraph["16/400"]}
      max-width: 480px;
      color: ${(props) => props.$textColor};
    }   
  }

  .expectation {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["16"]};
    max-width: 420px;
    display: flex;
    margin: 0 auto;
    h2 {
      ${(props) => props.theme.typography.heading["24/medium"]}
      text-align: center;
      color: ${(props) => props.$headerColor};
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.spacing["08"]};
      ${(props) => props.theme.typography.paragraph["16/400"]}
      list-style: none;
      color: ${(props) => props.$textColor};
      li {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.spacing["08"]};
        .check-icon {
          height: ${(props) => props.theme.spacing["24"]};
          width: ${(props) => props.theme.spacing["24"]};
          color: ${(props) => props.$iconColor};
        }
      }
    }
  }
  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["16"]};
    max-width: 360px;
    margin: 0 auto;
    @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
      width: 100%;
      max-width: 100%;
    }
    & p {
      text-align: center;
      ${(props) => props.theme.typography.label["16/regular"]}
      display: flex;
      justify-content: center;
      align-items: center;
      .explore-blog-link {
        border: none;
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.spacing["16"]};
        .arrow-left-action-icon {
          vertical-align: middle;
          height: ${(props) => props.theme.spacing["20"]};
          width: ${(props) => props.theme.spacing["20"]};
          margin-left: ${(props) => props.theme.spacing["08"]};
        }
        &:hover {
          text-decoration: none;
          background-color: transparent;
        }
      }
    }
    & button {
      width: 360px;
      padding: ${(props) => props.theme.spacing["16"]};
      @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
        width: 100%;
      }
    }
  }

  & .privacy-policy-and-copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
      margin-top: ${(props) => props.theme.spacing["32"]};
    }
    & .copyright {
    }
    & .privacy {
      display: flex;
      gap: ${(props) => props.theme.spacing["24"]};
      & a {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.spacing["08"]};
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
