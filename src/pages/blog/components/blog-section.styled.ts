import styled from "styled-components";

export const BlogSectionContainer = styled.section<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
`;

export const BlogSectionContent = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing["48"]};
`;

export const BlogHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.theme.spacing["16"]};
  padding: ${(props) => props.theme.spacing["16"]} 0;
`;

export const BlogMasonryArticles = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing["48"]};
`;

export const BlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing["24"]};
`;
export const BlogItemContainer = styled.div<{
  borderColor: string;
  $tagBgColor: string;
  $tagTextColor: string;
  $titleColor: string;
  $dateColor: string;
  $blogContainerBg: string;
}>`
  border: 0.5px solid ${(props) => props.borderColor};

  img {
    width: 100%;
    object-fit: cover;
  }
  .content {
    padding: ${(props) => props.theme.spacing["24"]};
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing["08"]};
    background-color: ${(props) => props.$blogContainerBg};
    .tag-container {
      background-color: ${(props) => props.$tagBgColor};
      color: ${(props) => props.$tagTextColor};
      display: inline-block;
      width: fit-content;
      ${(props) => props.theme.typography.paragraph["12/400"]}
      padding: ${(props) => props.theme.spacing["04"]};
    }
    h2 {
      color: ${(props) => props.$titleColor};
      ${(props) => props.theme.typography.heading["20/medium"]}
    }
    p {
      color: ${(props) => props.$dateColor};
      ${(props) => props.theme.typography.paragraph["12/400"]}
    }
  }
`;

export const LoadMoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${(props) => props.theme.spacing["48"]} 0;
  h2 {
    ${(props) => props.theme.typography.heading["20/medium"]};
  }
  .search-bar {
    & button {
      padding: ${(props) => props.theme.spacing["16"]};
      width: 200px;
    }
  }
`;
