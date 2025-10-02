import styled from "styled-components";
export const ProductProductSectionMainContainer = styled.div<{
  backgroundColor: string;
}>`
  background-color: ${(props) => props.backgroundColor};
`;
export const ProductProductSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: ${({ theme: { layout } }) => layout.container.desktop.maxWidth};
  gap: ${({ theme }) => theme.spacing[40]};
  padding: ${({ theme }) => `${theme.spacing[80]}  ${theme.spacing[128]}`};
  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    padding: ${({ theme }) => `${theme.spacing[40]} ${theme.spacing[16]}`};
    gap: ${({ theme }) => theme.spacing[24]};
  }
  & > h2 {
    ${({ theme }) => theme.typography.heading["40/medium"]}
    @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
      ${({ theme }) => theme.typography.heading["24/medium"]}
      text-align: center;
    }
  }

  & img {
    width: 880px;
    @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
      width: 100%;
    }
  }
  & .product-cta-container {
    width: 420px;
    display: flex;
    gap: ${({ theme }) => theme.spacing["08"]};
    @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
      width: 100%;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing["24"]};
    }
    & button,
    & a {
      text-decoration: none;
      border: none;
      padding: ${({ theme }) => `${theme.spacing[16]}`};

      @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
        border: 0.5px solid 
      }
    }
  }
`;
