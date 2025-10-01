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
  height: calc(100vh - 4rem);
  background-color: #008e87;
  width: 576px;
  position: relative;
  overflow: hidden;
  padding: ${(props) => props.theme.spacing["64"]};
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
    bottom: -40px;
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
      background-image: linear-gradient(to right, #F7F7F8, #F7F7F8,#66BBB7);
      -webkit-background-clip: text; /* For Safari */
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent; /* For other browsers */
      text-shadow: 0px 0.75px 0.8px #005551CC,
        /* teal shadow */ 0px -0.5px 0px #FFFFFF; /* white highlight */
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
export const RightSection = styled.div``;
export const ScheduleDemoForm = styled.form<{
  $labelColor: string;
  $inputColor: string;
  $controlBorderColor: string;
  $focusBorderColor: string;
  $errorBorderColor: string;
  $errorColor: string;
  $buttonDisabledBg: string;
}>`
  .form-inputs {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["16"]};

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
  }
  .top-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${(props) => props.theme.spacing["16"]};
  }
`;
