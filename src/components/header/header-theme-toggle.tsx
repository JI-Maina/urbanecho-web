import { useColor, useTheme } from "@/providers/theme-provider";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";
import styled from "styled-components";

const ToggleContainer = styled.div<{
  bgColor: string;
  borderColor: string;
}>`
  display: flex;
  align-items: center;
  /* background-color: ${(props) => props.bgColor}; */
  /* border: 1px solid ${(props) => props.borderColor}; */
  border-radius: 8px;
  /* padding: 4px; */
  transition: all 0.3s ease;
`;

const IconButton = styled.button<{
  isActive: boolean;
  activeColor: string;
  inactiveColor: string;
  activeBgColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) =>
    props.isActive ? props.activeBgColor : "transparent"};
  color: ${(props) =>
    props.isActive ? props.activeColor : props.inactiveColor};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.isActive ? props.activeBgColor : "rgba(0, 0, 0, 0.05)"};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

interface ThemeToggleProps {
  className?: string;
}

export default function HeaderThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  // Theme-aware colors
  const inactiveColor = useColor("content.content-tertiary");
  const borderColor = useColor("border.border-subtle");
  const bgColor = useColor("surface.surface-l1");

  return (
    <ToggleContainer
      className={className}
      bgColor={bgColor}
      borderColor={borderColor}
    >
      <IconButton
        isActive={theme === "light"}
        activeColor={useColor("content.content-brand")}
        inactiveColor={inactiveColor}
        activeBgColor={useColor("background.background-selected")}
        onClick={() => setTheme("light")}
        title="Switch to light theme"
        aria-label="Switch to light theme"
      >
        <SunIcon weight={theme === "light" ? "fill" : "regular"} />
      </IconButton>

      <IconButton
        isActive={theme === "dark"}
        activeColor={useColor("content.content-brand")}
        inactiveColor={inactiveColor}
        activeBgColor={useColor("background.background-selected")}
        onClick={() => setTheme("dark")}
        title="Switch to dark theme"
        aria-label="Switch to dark theme"
      >
        <MoonStarsIcon weight={theme === "dark" ? "fill" : "regular"} />
      </IconButton>
    </ToggleContainer>
  );
}
