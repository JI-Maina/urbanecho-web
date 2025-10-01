import styled from "styled-components";

export const ProductResourcesSectionMainContainer = styled.div<{
  backgroundColor: string;
}>`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ResourcesContainer = styled.div<{
  cardBorderColor: string;
  cardContentBg: string;
  badgeColor: string;
  badgeBg: string;
}>`
  max-width: ${({ theme: { layout } }) => layout.container.desktop.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing[80]} ${theme.spacing["128"]}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[64]};

  & > h2 {
    max-width: 74rem; /** 1184px */
    ${({ theme }) => theme.typography.heading["40/medium"]}
    text-align: center;
  }

  & .resources-content-wrapper {
    display: flex;
    gap: ${({ theme }) => theme.spacing[40]};
    flex-direction: column;

    & .cards-container {
      display: flex;
      gap: ${({ theme }) => theme.spacing[24]};

      & .resource-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 0.5px solid ${({ cardBorderColor }) => cardBorderColor};
        width: 100%;

        & .badge {
          background-color: ${({ badgeBg }) => badgeBg};
          color: ${({ badgeColor }) => badgeColor};
          width:fit-content;
          ${({ theme }) => theme.typography.paragraph["12/400"]}
           padding: ${({ theme }) => theme.spacing["04"]};
        }
        & img {
          height: 20.5rem; /** 328px */
          width: 378.67px;
          object-fit: cover;
         
        }
        & h3{
            ${({ theme }) => theme.typography.heading["20/medium"]}
        }
        & .resource-resource-card-content {
          display: flex;
          flex-direction: column;
          padding: ${({ theme }) => theme.spacing["24"]};
          gap: ${({ theme }) => theme.spacing["24"]};
          background-color: ${({ cardContentBg }) => cardContentBg};
        }
      }
    }

    & .resources-cta-container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: ${({ theme }) => theme.spacing[40]};
        & h2{
            max-width:552px;
            ${({ theme }) => theme.typography.heading["24/medium"]};
            text-align: center;
            
        }
        & > div{
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing[24]};
            justify-content: center;
            align-items: center;
            & button,
            & a{
                 max-width:208px;
            }
        }
    }
  }
`;

export const ResourceCardsContainer = styled.div``;
// export const ResourceCardB
