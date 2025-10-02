import styled from "styled-components";

export const PrivacyPolicyMainPage = styled.main<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
`;
export const PrivacyPolicyContainer = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing["64"]};
  padding: ${(props) => props.theme.spacing["32"]};
  header {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["16"]};
    ${(props) => props.theme.typography.heading["56/medium"]}
  }
  article {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["40"]};
  }
`;
export const PrivacySection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing["24"]};
  h2 {
    ${(props) => props.theme.typography.heading["24/medium"]}
  }
  p {
    ${(props) => props.theme.typography.paragraph["20/400"]}
  }
  ul {
    list-style: disc;
    padding-left: ${(props) => props.theme.spacing["32"]};
     ${(props) => props.theme.typography.paragraph["20/400"]}
  }
`;
