import styled from "styled-components";

export const ScheduleDemoMainPage = styled.main``;

export const ScheduleDemoContainer = styled.div`
  max-width: ${(props) => props.theme.layout.container.desktop.maxWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing["64"]};
  padding: ${({ theme }) => ` ${theme.spacing["16"]} ${theme.spacing["08"]}`};
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    display: block;
    padding: ${({ theme }) =>
      ` ${theme.spacing["40"]} ${theme.spacing["16"]} `};
  }
`;

export const LeftSection = styled.div`
  height: 736px;
  background-color: #33A59F;
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
    width: 880px;
    bottom: -80px;
    left: -380px;
  }

  & .content {
    max-width: 416px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["24"]};
    h2 {
      ${(props) => props.theme.typography.heading["40/medium"]}
      /* background-image: linear-gradient(to right, #F7F7F8, #F7F7F8,#66BBB7); */
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
export const ScheduleDemoForm = styled.form<{
  $labelColor: string;
  $inputColor: string;
  $controlBorderColor: string;
  $focusBorderColor: string;
  $errorBorderColor: string;
  $errorColor: string;
  $buttonDisabledBg: string;
}>`
  padding-top: ${(props) => props.theme.spacing["64"]};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  .form-inputs {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["16"]};
    justify-content: space-between;
    @media (max-width: ${({ theme: { layout: { container } } }) => container.tablet.maxWidth}) {
      gap: ${(props) => props.theme.spacing["40"]};
    }
    & [data-slot="form-item"] {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing["12"]};
    }

    & label {
      ${(props) => props.theme.typography.label["14/semibold"]}
      color: ${(props) => props.$labelColor};
    }

    & input,
    & textarea {
      ${(props) => props.theme.typography.label["20/regular"]}
      color: ${(props) => props.$inputColor};

      &::placeholder {
        color: ${(props) => props.$inputColor};
        opacity: 0.6;
      }
    }

    & [data-slot="form-control"] {
      width: 100%;
      display: flex;
      align-items: center;
      padding: ${(props) =>
        `${props.theme.spacing["12"]} ${props.theme.spacing["14"]}`};
      border: 1px solid ${(props) => props.$controlBorderColor};
      background-color: ${(props) => props.theme.colors.surface["surface-l0"]};
      transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

      &:focus-within {
        border-color: ${(props) => props.$focusBorderColor};
        box-shadow: 0 0 0 3px ${(props) => `${props.$focusBorderColor}22`};
      }
    }

    & [data-slot="form-control"][aria-invalid="true"] {
      border-color: ${(props) => props.$errorBorderColor};
      box-shadow: 0 0 0 1px ${(props) => `${props.$errorBorderColor}33`};
    }

    & [data-slot="form-message"] {
      ${(props) => props.theme.typography.label["12/semibold"]}
      color: ${(props) => props.$errorColor};
    }
  }
  .header {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["08"]};
    text-align: center;
    justify-content: center;
    align-items: center;
    h2 {
      ${(props) => props.theme.typography.heading["32/medium"]}
    }
    p {
      ${(props) => props.theme.typography.paragraph["16/400"]}
      max-width: 480px;
    }
  }
  .top-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${(props) => props.theme.spacing["16"]};
    @media (max-width: ${({ theme: { layout: { container } } }) => container.tablet.maxWidth}) {
      grid-template-columns: 1fr;
    }
  }

  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["16"]};

    & p {
      text-align: center;
      ${(props) => props.theme.typography.label["16/regular"]}
      display: flex;
      justify-content: center;
      align-items: center;
      .login-link {
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
  }

  & .privacy-policy-and-copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${({ theme: { layout: { container } } }) => container.tablet.maxWidth}) {
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
