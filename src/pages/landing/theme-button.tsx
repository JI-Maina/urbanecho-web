import styled from "styled-components";
import { useColor } from "../../providers/theme-provider";

const StyledButton = styled.button<{ 
  bgColor: string; 
  textColor: string; 
  hoverColor: string; 
  borderColor: string;
}>`
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
  border: 2px solid ${props => props.borderColor};
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.hoverColor};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

interface ThemeButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function ThemeButton({ onClick, children }: ThemeButtonProps) {
  const bgColor = useColor("background.background-brand");
  const textColor = useColor("content.content-primary-inverse");
  const hoverColor = useColor("background.background-brand-hover");
  const borderColor = useColor("border.border-brand");

  return (
    <StyledButton
      bgColor={bgColor}
      textColor={textColor}
      hoverColor={hoverColor}
      borderColor={borderColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
