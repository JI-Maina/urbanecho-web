import styled from "styled-components";

export const CompanyTeamSectionWrapper = styled.section<{ bgColor: string }>`
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
`;

export const CompanyTeamContent = styled.div<{
  headerColor: string;
  paragraphColor: string;
}>`
  width: 800px;
  max-width: 800px;
  display: grid;
  place-items: center;
  display: relative;
  overflow: hidden;
  & .team-section-content {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing["16"]};

    & h2 {
      ${({ theme }) => theme.typography.heading["40/medium"]}
      color: ${({ headerColor }) => headerColor};
      max-width: 424px;
      text-align: center;
    }

    & p {
      ${({ theme }) => theme.typography.paragraph["16/400"]}
      color: ${({ paragraphColor }) => paragraphColor};
      max-width: 26.5rem; /** 424px */
      text-align: center;
    }
  }
`;


export const BaseSvgContainer = styled.svg`
  width: 100%;
  height: 100%;
  display: block;
  filter: drop-shadow(10.91px 11.82px 36.36px rgba(1, 57, 54, 0.17))
    drop-shadow(43.64px 49.09px 65.45px rgba(1, 57, 54, 0.15))
    drop-shadow(99.09px 110px 89.09px rgba(1, 57, 54, 0.09))
    drop-shadow(175.45px 196.36px 105.45px rgba(1, 57, 54, 0.05))
    drop-shadow(274.55px 306.36px 115.45px rgba(1, 57, 54, 0.03));
  /* position: absolute; */
`;
export const TeamSvgWrapper = styled.g<{ fillColor: string }>`
  /* & path { */
  fill: ${({ fillColor }) => fillColor};
  fill-rule: evenodd;
  /* } */
  /* height: 100%;
  width: 100%; */
`;
