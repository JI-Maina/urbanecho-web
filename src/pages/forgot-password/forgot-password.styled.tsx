import styled from "styled-components";

export const ForgotPasswordPagemainContainer = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: ${(props) =>
    props.theme.colors.background["background-primary"]};
  color: ${(props) => props.theme.colors.content["content-primary"]};
`;
export const ForgotPasswordForm = styled.form<{
  $controlBorderColor: string;
  $headerColor: string;
  $paragraphColor: string;
  $labelColor: string;
  $inputColor: string;
  $buttonDisabledBg: string;
}>`
  margin: ${({ theme }) => theme.spacing["12"]} auto;
  max-width: 24rem; /** 384px */
  .top-section {
    display: flex;
    flex-direction: column;
    gap: ${(theme) => theme.theme.spacing["16"]};
    align-items: center;
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
  & p {
    ${(props) => props.theme.typography.paragraph["16/400"]}
    text-align: center;
  }
  & form {
    width: 100%;
  }
  & .form-fields {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing["40"]};
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
    /* data-slot="form-control" */
    & [data-slot="form-control"] {
      width: 100%;
      display: flex;
      padding: ${(props) =>
        `${props.theme.spacing["16"]} ${props.theme.spacing["14"]}`};
      border: 1px solid ${(props) => props.$controlBorderColor};
      margin-top: ${(props) => props.theme.spacing["04"]};
    }
  }

  & .action-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    & a {
      border: none;
      padding: ${(props) =>
        `${props.theme.spacing["14"]} ${props.theme.spacing["08"]}`};
      width: fit-content;
      display: flex;
      align-items: center;
      align-self:center;
      gap: ${(props) => props.theme.spacing["08"]};
      &:hover {
        box-shadow: none;
        border: none;
      }
      .arrow-left-action-icon {
        width: ${(props) => props.theme.spacing["20"]};
        vertical-align: middle;
      }
    }
    & button {
      &:disabled {
      }
    }
  }
`;
