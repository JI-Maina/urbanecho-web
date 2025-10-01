import styled from "styled-components";

export const NewPasswordPageMainContainer = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: ${(props) =>
    props.theme.colors.background["background-primary"]};
  color: ${(props) => props.theme.colors.content["content-primary"]};
`;

export const NewPasswordForm = styled.form<{
  $headerColor: string;
  $paragraphColor: string;
  $controlBorderColor: string;
  $labelColor: string;
  $inputColor: string;
  $buttonDisabledBg: string;
  $errorBorderColor: string;
  $focusBorderColor: string;
  $errorColor: string;
}>`
  margin: ${({ theme }) => theme.spacing["12"]} auto;
  max-width: 24rem; /** 384px */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["32"]};
  .top-section {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing["16"]};
    align-items: center;
    text-align: center;
  }

  & .header-logo {
    img {
      height: ${(props) => props.theme.spacing["48"]};
    }
  }

  & h2 {
    ${(props) => props.theme.typography.heading["24/medium"]}
    color: ${(props) => props.$headerColor};
  }

  & .form-fields {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing["32"]};

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
  }

  & .action-buttons {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing["16"]};

    & button {
      margin-top: ${({ theme }) => theme.spacing["12"]};
    }
  }
`;

export const PasswordRequirements = styled.div<{
  $defaultColor: string;
  $metColor: string;
  $iconPendingColor: string;
  $mustContainColor: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["08"]};

  .requirements-heading {
    ${(props) => props.theme.typography.label["12/semibold"]}
    color: ${(props) => props.$mustContainColor};
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing["08"]};
  }
`;

export const RequirementItem = styled.li<{
  $met: boolean;
  $defaultColor: string;
  $metColor: string;
  $iconPendingColor: string;
  $isBold: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing["08"]};
  ${(props) =>
    props.$isBold
      ? props.theme.typography.paragraph["14/400"]
      : props.theme.typography.label["14/semibold"]}
  color: ${(props) => (props.$met ? props.$metColor : props.$defaultColor)};
  font-weight: ${(props) => (props.$isBold ? "600" : "400")};
  .icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${({ theme }) => theme.spacing["16"]};
    height: ${({ theme }) => theme.spacing["16"]};
    color: ${(props) =>
      props.$met ? props.$metColor : props.$iconPendingColor};

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const PasswordToggleButton = styled.button`
  border: none;
  background: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  color: inherit;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;
