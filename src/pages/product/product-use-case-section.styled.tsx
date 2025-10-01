import styled from "styled-components";

export const ProductUsecaseMainContainer = styled.div<{
  backgroundColor: string;
}>`
  background-color: ${(props) => props.backgroundColor};
`;
export const ProductUseCaseSectionContainer = styled.div<{
  headerColor: string;
}>`
  max-width: ${({ theme: { layout } }) => layout.container.desktop.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing[80]}  ${theme.spacing[128]}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[64]};

  & > h2 {
    ${({ theme }) => theme.typography.heading["40/medium"]}
    color: ${(props) => props.headerColor};
    max-width: 58rem; /** 928px */
    text-align: center;
    margin: 0 auto;
  }
`;

export const CaseContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing[24]};
`;
export const CaseCardContainer = styled.div<{
  borderColor: string;
  brandColor: string;
  headerColor: string;
  textColor: string;
  backgroundColor: string;
}>`
  border: 0.5px solid ${(props) => props.borderColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing[24]};
  gap: ${({ theme }) => theme.spacing[24]};
  background-color: ${(props) => props.backgroundColor};
  & .case-card-icon {
    height: ${({ theme }) => theme.spacing[40]};
    width: ${({ theme }) => theme.spacing[40]};
    color: ${(props) => props.brandColor};
  }
  & .case-card-text-container {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing["08"]};

    & a {
      text-decoration: none;
      color: ${(props) => props.brandColor};
    }

    & h2 {
      ${({ theme }) => theme.typography.heading["24/medium"]}
    }
    & p {
      color: ${(props) => props.textColor};
      ${({ theme }) => theme.typography.paragraph["16/400"]}
    }
  }
`;
