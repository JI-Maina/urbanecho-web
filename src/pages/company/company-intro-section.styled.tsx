import styled from "styled-components";

export const BaseCompanyIntroContainer = styled.div<{
  backgroundColor: string;
}>`
  background-color: ${(props) => props.backgroundColor};
`;

export const CompanyIntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[40]};
  padding-top: ${({ theme }) => theme.spacing[80]};
  max-width: ${({ theme: { layout } }) => layout.container.desktop.maxWidth};
    margin: 0 auto;
  & .header-section {
    h2 {
      ${({ theme }) => theme.typography.heading["56/medium"]}
      max-width: 992px;
    }
  }
  & img {
    height: 52rem; /** 832px */
    width: 100%;
  }
`;
