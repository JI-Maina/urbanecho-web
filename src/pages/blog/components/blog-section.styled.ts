import styled from "styled-components";
import { motion } from "framer-motion";

export const BlogSectionContainer = styled.section<{
  $bgColor: string;
}>`
  background-color: ${({ $bgColor }) => $bgColor};
  padding: ${({ theme }) => `${theme.spacing["80"]} 0`};
  min-height: 100vh;
`;

export const BlogContent = styled.div`
  max-width: ${({ theme }) => theme.layout.container.desktop.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing["128"]};
  
  @media (max-width: ${({ theme }) => theme.layout.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing["48"]};
  }
  
  @media (max-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacing["16"]};
  }
`;

export const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing["64"]};
  gap: ${({ theme }) => theme.spacing["32"]};
`;

export const BlogTitle = styled.h1<{ $textColor: string }>`
  ${({ theme }) => theme.typography.heading["48/bold"]};
  color: ${({ $textColor }) => $textColor};
  text-align: center;
  margin: 0;
  
  @media (max-width: 768px) {
    ${({ theme }) => theme.typography.heading["32/bold"]};
  }
`;

export const SearchContainer = styled(motion.div)<{ 
  $isExpanded: boolean;
  $borderColor: string;
  $bgColor: string;
}>`
  position: relative;
  width: ${({ $isExpanded }) => $isExpanded ? '400px' : '48px'};
  height: 48px;
  background-color: ${({ $bgColor }) => $bgColor};
  border: 2px solid ${({ $borderColor }) => $borderColor};
  border-radius: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 768px) {
    width: ${({ $isExpanded }) => $isExpanded ? '300px' : '48px'};
  }
  
  @media (max-width: 480px) {
    width: ${({ $isExpanded }) => $isExpanded ? '280px' : '48px'};
  }
`;

export const SearchIcon = styled.div<{ 
  $isExpanded: boolean;
  $iconColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: ${({ $iconColor }) => $iconColor};
  transition: transform 0.3s ease;
  flex-shrink: 0;
  z-index: 2;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    transform: ${({ $isExpanded }) => $isExpanded ? 'none' : 'scale(1.1)'};
  }
`;

export const SearchInput = styled.input<{
  $textColor: string;
  $placeholderColor: string;
}>`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ $textColor }) => $textColor};
  font-size: 16px;
  padding: 0 16px 0 8px;
  opacity: 1;
  
  &::placeholder {
    color: ${({ $placeholderColor }) => $placeholderColor};
  }
`;

export const ClearButton = styled.button<{ $iconColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: none;
  color: ${({ $iconColor }) => $iconColor};
  cursor: pointer;
  border-radius: 50%;
  margin-right: 8px;
  opacity: 0.7;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    background-color: ${({ $iconColor }) => $iconColor}20;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const MasonryGrid = styled.div`
  column-count: 3;
  column-gap: ${({ theme }) => theme.spacing["24"]};
  column-fill: balance;
  
  @media (max-width: 1200px) {
    column-count: 2;
  }
  
  @media (max-width: 768px) {
    column-count: 1;
    column-gap: ${({ theme }) => theme.spacing["16"]};
  }
`;

export const BlogCard = styled(motion.article)<{
  $bgColor: string;
  $borderColor: string;
}>`
  break-inside: avoid;
  margin-bottom: ${({ theme }) => theme.spacing["24"]};
  background-color: ${({ $bgColor }) => $bgColor};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -4px rgba(0, 0, 0, 0.12), 
                0 8px 16px -4px rgba(0, 0, 0, 0.08);
  }
`;

export const BlogCardImage = styled.div<{ $imageUrl: string; $height: string }>`
  width: 100%;
  height: ${({ $height }) => $height};
  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BlogCardContent = styled.div`
  padding: ${({ theme }) => theme.spacing["20"]};
  position: relative;
`;

export const BlogCardCategory = styled.span<{ $categoryColor: string; $bgColor: string }>`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing["06"]} ${theme.spacing["12"]}`};
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $categoryColor }) => $categoryColor};
  ${({ theme }) => theme.typography.label["12/semibold"]};
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing["12"]};
`;

export const BlogCardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing["08"]};
  margin-bottom: ${({ theme }) => theme.spacing["16"]};
`;

export const BlogCardDate = styled.span<{ $textColor: string }>`
  ${({ theme }) => theme.typography.label["12/regular"]};
  color: ${({ $textColor }) => $textColor};
  opacity: 0.7;
`;

export const BlogCardReadTime = styled.span<{ $textColor: string }>`
  ${({ theme }) => theme.typography.label["12/regular"]};
  color: ${({ $textColor }) => $textColor};
  opacity: 0.7;
  
  &::before {
    content: "•";
    margin-right: ${({ theme }) => theme.spacing["08"]};
  }
`;

export const BlogCardTitle = styled.h3<{ $textColor: string }>`
  ${({ theme }) => theme.typography.heading["16/bold"]};
  color: ${({ $textColor }) => $textColor};
  margin: 0 0 ${({ theme }) => theme.spacing["12"]} 0;
  line-height: 1.4;
`;

export const BlogCardExcerpt = styled.p<{ $textColor: string }>`
  ${({ theme }) => theme.typography.paragraph["14/400"]};
  color: ${({ $textColor }) => $textColor};
  margin: 0;
  line-height: 1.5;
  opacity: 0.8;
`;

export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing["64"]} 0;
  text-align: center;
`;

export const NoResultsText = styled.p<{ $textColor: string }>`
  ${({ theme }) => theme.typography.paragraph["20/400"]};
  color: ${({ $textColor }) => $textColor};
  margin: ${({ theme }) => theme.spacing["16"]} 0 0 0;
  opacity: 0.7;
`;

export const NoResultsIcon = styled.div<{ $iconColor: string }>`
  color: ${({ $iconColor }) => $iconColor};
  opacity: 0.5;
  
  svg {
    width: 48px;
    height: 48px;
  }
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing["48"]};
  padding-top: ${({ theme }) => theme.spacing["32"]};
`;

export const LoadMoreButton = styled.button<{
  $bgColor: string;
  $textColor: string;
  $hoverBgColor: string;
  $borderColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing["08"]};
  padding: ${({ theme }) => `${theme.spacing["12"]} ${theme.spacing["32"]}`};
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $textColor }) => $textColor};
  border: 2px solid ${({ $borderColor }) => $borderColor};
  border-radius: 8px;
  ${({ theme }) => theme.typography.label["16/semibold"]};
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 140px;
  height: 48px;

  &:hover {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;