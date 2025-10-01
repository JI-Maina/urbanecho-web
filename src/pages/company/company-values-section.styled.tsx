import styled from "styled-components";

export const MainCompanyValuesContainer = styled.section<{ bgColor: string }>`
  width: 100%;
  background-color: ${(props) => props.bgColor};
`;

export const CompanyValuesContent = styled.div<{
  headerColor: string;
  paragraphColor: string;
  cardBorderColor: string;
  cardBgColor: string;
  iconColor: string;
}>`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.container.desktop.maxWidth};
  padding: ${({ theme }) => `${theme.spacing["80"]} ${theme.spacing["128"]}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["40"]};
  & h2 {
    ${({ theme }) => theme.typography.heading["40/medium"]}
    text-align: center;
    color: ${({ headerColor }) => headerColor};
  }
  & .values-cards-section {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing["24"]};
    max-width: 1184px;
    margin: 0 auto;

    & .top-cards,
    & .bottom-cards {
      display: flex;
      gap: ${({ theme }) => theme.spacing["24"]};
    }
    & .value-card {
      flex: 1;
      border: 0.5px solid ${({ cardBorderColor }) => cardBorderColor};
      padding: ${({ theme }) => theme.spacing["24"]};
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing["16"]};
        background-color: ${({ cardBgColor }) => cardBgColor};
      & .value-icon {
        width: 40px;
        height: 40px;
       
      }
      & .content {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing["08"]};
        & h3 {
          ${({ theme }) => theme.typography.heading["24/medium"]}
          color: ${({ headerColor }) => headerColor};
        }
        & p {
          ${({ theme }) => theme.typography.paragraph["16/400"]}
          color: ${({ paragraphColor }) => paragraphColor};
        }
      }
    }
  }
`;
