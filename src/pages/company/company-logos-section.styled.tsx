import styled from "styled-components";

export const MainCompanyLogosContainer = styled.section<{
  bgColor: string;
}>`
  background-color: ${({ bgColor }) => bgColor};
`;

export const CompanyLogosContent = styled.div<{
  headerColor: string;
}>`
  max-width: ${({ theme: { layout } }) => layout.container.desktop.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing["64"]}  ${theme.spacing["128"]}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["48"]};
  & h2 {
    ${({ theme }) => theme.typography.heading["40/medium"]}
    text-align: center;
    color: ${({ headerColor }) => headerColor};
  }
  & .carousel-container {
    overflow: hidden;
    width: 100%;
  }

  & .logos-container {
    display: flex;
    gap: ${({ theme }) => theme.spacing["60"]};
    width: 200%; /* Double width to accommodate duplicated logos */
  }

  & .logo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
