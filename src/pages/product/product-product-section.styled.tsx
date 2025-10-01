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
  & > h2 {
    ${({ theme }) => theme.typography.heading["40/medium"]}
  }

  & img {
    width: 880px;
  }
  & .product-cta-container {
    width: 420px;
    display: flex;
    gap: ${({ theme }) => theme.spacing["08"]};
    & button,
    & a {
      text-decoration: none;
      border: none;
      padding: ${({ theme }) => `${theme.spacing[16]}`};
    }
  }
`;
