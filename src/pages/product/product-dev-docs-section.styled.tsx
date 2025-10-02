import styled from "styled-components";
export const BaseDocsContainer = styled.div<{
    backgroundColor: string;
}>`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
export const ProductDevDocsSectionContainer = styled.div<{
  borderColor: string;
  brandColor: string;
  headerColor: string;
  textColor: string;
}>`
  display: grid;
  grid-template-columns: 397px 1fr;
  max-width: ${({ theme: { layout } }) => layout.container.desktop.maxWidth};
  margin: 0 auto;
  gap: ${({ theme }) => theme.spacing[24]};
  padding: ${({ theme }) => `${theme.spacing[80]} ${theme.spacing["128"]}`};

  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => `${theme.spacing[40]} ${theme.spacing[16]} ${theme.spacing[40]} ${theme.spacing[16]}`};
  }
  & .left-section-container > h2 {
    ${({ theme }) => theme.typography.heading["40/medium"]}
  }

  & .right-section-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing[24]};
    @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }

    & .docs-card {
      padding: ${({ theme }) => theme.spacing[24]};
      border: 0.5px solid ${({ borderColor }) => borderColor};
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing['24']};
      & .docs-card-icon {
        width: ${({ theme }) => theme.spacing[40]};
        height: ${({ theme }) => theme.spacing[40]};
        color: ${({ brandColor }) => brandColor};
      }

      & .docs-card-text-section{
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing['08']};
      }
      & h2 {
        color: ${({ headerColor }) => headerColor};
      }
      & p {
        color: ${({ textColor }) => textColor};
        ${({ theme }) => theme.typography.paragraph["16/400"]}
      }
    }
  }
`;
