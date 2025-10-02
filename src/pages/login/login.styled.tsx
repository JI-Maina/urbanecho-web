import styled from "styled-components";

export const LoginPageMainContainer = styled.main<{
  $bgColor: string;
}>`
  background-color: ${(props) => props.$bgColor};
  min-height: calc(100vh - 4rem); /** Subtracting header height (64px) */
`;

export const LoginFomWrapper = styled.div`
  max-width: ${(props) => props.theme.layout.container.desktop.maxWidth};
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.theme.spacing["64"]};
  padding: ${({ theme }) => ` ${theme.spacing["16"]} ${theme.spacing["08"]}`};
  margin: 0 auto;
`;

export const LoginFormLeftSection = styled.div<{
  $bgColor: string;
}>`
  position: relative;
  overflow: hidden;
  height: 736px;
  width: 616px;
  background-color: ${(props) => props.$bgColor};
  display: flex;
  justify-content: center;
  padding: ${(props) => props.theme.spacing["48"]};
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    display: none;
    width: 100%;
  }
  & h2 {
    ${(props) => props.theme.typography.heading["40/medium"]}
    text-align: center;
  }
  & img {
    position: absolute;
    &.image-computer {
      top: 168px;
      height: 424px;
    }
    &.image-pattern {
      height: 216px;
      bottom: 0;
      width: 100%;
      object-fit: cover;
      object-position: bottom;
    }
  }
`;
export const LoginFormOrangeOverlay = styled.div`
  height: 660px;
  width: 660px;
  position: absolute;
  /* z-index: 20; */
  background-color: ${(props) =>
    props.theme.primitivesColors.orange["400"].hex};
  border-radius: 50%;
  border: 1px solid red;
  top: -192px;
  left: -294px;
  filter: blur(364px);
`;
export const LoginFormRightSection = styled.div`
  width: 752px;
  margin-top: ${(props) => props.theme.spacing["48"]};
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    width: 100%;
    margin-top: ${(props) => props.theme.spacing["04"]};
  }
`;
export const LoginForm = styled.form<{
  $footerTextColor: string;
  $controlBorderColor: string;
  $labelColor: string;
  $inputColor: string;
  $buttonDisabledBg: string;
  $errorBorderColor: string;
  $focusBorderColor: string;
  $errorColor: string;
}>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto ${(props) => props.theme.spacing["32"]};
  height: 100%;
@media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: ${(props) => props.theme.spacing["32"]};
}
  .form-wrapper {
    max-width: 420px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["40"]};

    @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
      max-width: 100%;
      width: 100%;
      padding: 0 ${({ theme }) => theme.spacing["16"]};
    }
    .header-section {
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.spacing["08"]};
      text-align: center;
      h2 {
        ${(props) => props.theme.typography.heading["32/medium"]}
        @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
          ${({ theme }) => theme.typography.heading["24/medium"]}
        }
      }
      p {
        ${(props) => props.theme.typography.paragraph["16/400"]}
        color: ${(props) => props.$inputColor};
      }
    }

    .action-buttons {
      display: flex;
      flex-direction: column;
      gap: ${(props) => props.theme.spacing["16"]};
      & button {
        width: 100%;
      }
      & a {
        border: none;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        &:hover{
          background-color: transparent;
        }
        & .arrow-left-action-icon {
          width: ${({ theme }) => theme.spacing["20"]};
          height: ${({ theme }) => theme.spacing["20"]};
          vertical-align: middle;
        }
      }
    }
  }
  & .form-fields {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing["32"]};
    & .forgot-password-link {
      align-self: flex-start;
      border: none;
      padding: 0;
      text-decoration: underline;
      color: ${(props) => props.$labelColor};
      &:hover {
        background-color: transparent;
      }
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

    & input {
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
        `${props.theme.spacing["16"]} ${props.theme.spacing["14"]}`};
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

    & .keep-logged-in-field {
      gap: ${({ theme }) => theme.spacing["08"]};

      & .checkbox-row {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.spacing["12"]};
      }

      & [data-slot="form-control"] {
        width: auto;
        padding: 0;
        border: none;
        background-color: transparent;
        box-shadow: none;
        transition: none;

        &:focus-within {
          border-color: transparent;
          box-shadow: none;
        }
      }

      & [data-slot="form-control"][aria-invalid="true"] {
        border: none;
        box-shadow: none;
      }

      & .checkbox-copy {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing["04"]};
      }

      & .checkbox-label {
        ${(props) => props.theme.typography.label["16/semibold"]}/* color: ${(
          props
        ) => props.$labelColor}; */
      }

      & [data-slot="form-description"] {
        ${(props) => props.theme.typography.paragraph["14/400"]}
        color: ${(props) => props.$labelColor};
        margin: 0;
      }
    }
  }
  & .copyright-privacy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.$footerTextColor};
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
