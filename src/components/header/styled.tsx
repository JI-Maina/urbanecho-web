import styled from "styled-components";
import { Link } from "react-router-dom";
import AppTheme from "@/lib/theme";

// Base header container
export const BaseHeader = styled.header<{
  bgColor: string;
  borderColor: string;
}>`
  background-color: ${(props) => props.bgColor};
  border-bottom: 1px solid ${(props) => props.borderColor};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
`;

// Main header container with layout
export const HeaderContainer = styled.div`
  max-width: ${AppTheme.layout.container.desktop.maxWidth};
  padding: ${AppTheme.spacing["16"]} ${AppTheme.layout.container.desktop.margin};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.layout.container.tablet.maxWidth}) {
    padding: ${({ theme }) => theme.spacing["16"]};
  }
`;

// Left section for logo
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

// Middle section for navigation
export const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Right section for actions
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${AppTheme.spacing["12"]};
  flex: 1;

  @media (max-width: 768px) {
    gap: ${AppTheme.spacing["08"]};
  }
`;

// Mobile menu button
export const MobileMenuButton = styled.button<{
  $textColor: string;
}>`
  display: none;
  background: none;
  border: none;
  padding: ${AppTheme.spacing["08"]};
  cursor: pointer;
  color: ${({ $textColor }) => $textColor};
  padding: ${AppTheme.spacing["08"]};
  .menu-icon {
    /* border: 1px solid ${({ $textColor }) => $textColor};
    height: ${({ theme }) => theme.spacing["16"]};
    width: ${({ theme }) => theme.spacing["16"]}; */
  }
  /* @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  } */
`;

// Mobile menu overlay
export const MobileMenuOverlay = styled.div<{
  $isOpen: boolean;
  $bgColor: string;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ $bgColor }) => $bgColor};
  z-index: 999;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

// Mobile menu content
export const MobileMenuContent = styled.div`
  padding: ${AppTheme.spacing["20"]} ${AppTheme.spacing["16"]};
  height: 100vh;
  overflow-y: auto;
`;

// Mobile menu header
export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${AppTheme.spacing["24"]};
`;

// Mobile menu close button
export const MobileMenuCloseButton = styled.button<{
  $textColor: string;
}>`
  background: none;
  border: none;
  padding: ${AppTheme.spacing["08"]};
  cursor: pointer;
  color: ${({ $textColor }) => $textColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Mobile menu navigation
export const MobileMenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${AppTheme.spacing["04"]};
  margin-bottom: ${AppTheme.spacing["32"]};
`;

// Mobile menu link
export const MobileMenuLink = styled(Link)<{
  $textColor: string;
  $activeColor: string;
}>`
  color: ${({ $textColor }) => $textColor};
  text-decoration: none;
  padding: ${AppTheme.spacing["16"]} 0;
  ${AppTheme.typography.label["20/regular"]}
  border-bottom: 1px solid transparent;

  &.active {
    color: ${({ $activeColor }) => $activeColor};
  }
`;

// Mobile menu user section
export const MobileMenuUserSection = styled.div<{
  $borderColor: string;
}>`
  border-top: 1px solid ${({ $borderColor }) => $borderColor};
  padding-top: ${AppTheme.spacing["20"]};
`;

// Mobile menu user info
export const MobileMenuUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${AppTheme.spacing["12"]};
  margin-bottom: ${AppTheme.spacing["20"]};
`;

// Mobile menu actions
export const MobileMenuActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${AppTheme.spacing["12"]};
`;

// Mobile menu theme toggle section
export const MobileMenuThemeSection = styled.div<{
  $borderColor: string;
  $textColor: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${AppTheme.spacing["16"]} 0;
  border-top: 1px solid ${({ $borderColor }) => $borderColor};
  margin-top: ${AppTheme.spacing["20"]};
  color: ${({ $textColor }) => $textColor};
  .toggle-icons {
    display: flex;
    gap: ${({ theme }) => theme.spacing["12"]};
    flex-direction: column;
    .theme-icon {
      height: 26.25px;
      width: 26.25px;
    }

    button {
      border: none;
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing["08"]};
    }
  }
`;

// Desktop only wrapper for user dropdown
export const DesktopOnly = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserMenuButton = styled.button<{
  $borderColor: string;
  $hoverBgColor: string;
}>`
  display: flex;
  align-items: center;
  gap: ${AppTheme.spacing["08"]};
  padding: ${AppTheme.spacing["08"]} ${AppTheme.spacing["12"]};
  background-color: transparent;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ $borderColor }) => `${$borderColor}55`};
  }
`;

export const UserAvatar = styled.div<{
  $bgColor: string;
  $textColor: string;
}>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $textColor }) => $textColor};
`;

export const UserIdentity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserIdentityName = styled.span<{
  $color: string;
}>`
  ${AppTheme.typography.label["14/semibold"]}
  color: ${({ $color }) => $color};
`;

export const UserIdentityEmail = styled.span<{
  $color: string;
}>`
  ${AppTheme.typography.label["12/regular"]}
  color: ${({ $color }) => $color};
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${AppTheme.spacing["12"]};
  padding: ${AppTheme.spacing["12"]};
`;

export const DropdownHeaderIdentity = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${AppTheme.spacing["04"]};
`;

export const DropdownHeaderName = styled.span<{
  $color: string;
}>`
  ${AppTheme.typography.label["16/semibold"]}
  color: ${({ $color }) => $color};
`;

export const DropdownHeaderEmail = styled.span<{
  $color: string;
}>`
  ${AppTheme.typography.label["12/regular"]}
  color: ${({ $color }) => $color};
`;

export const DropdownItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${AppTheme.spacing["12"]};
  width: 100%;
`;

export const DropdownItemIcon = styled.span<{
  $iconColor: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${({ $iconColor }) => $iconColor};
`;

export const DropdownFooter = styled.div<{
  $mutedColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${AppTheme.spacing["08"]} ${AppTheme.spacing["12"]};
  ${AppTheme.typography.label["12/regular"]}
  color: ${({ $mutedColor }) => $mutedColor};
`;

export const DropdownFooterLink = styled(Link)<{
  $mutedColor: string;
}>`
  color: ${({ $mutedColor }) => $mutedColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// Styled navigation link
export const NavLink = styled(Link)<{
  textColor: string;
  hoverColor: string;
}>`
  color: ${(props) => props.textColor};
  text-decoration: none;
  padding: ${AppTheme.spacing["08"]} ${AppTheme.spacing["16"]};
  border-radius: 6px;
  transition: all 0.3s ease;
  ${AppTheme.typography.label["16/regular"]}

  &:hover {
    color: ${(props) => props.hoverColor};
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

// Auth button styles
export const AuthButton = styled(Link)<{
  variant: "primary" | "secondary";
  bgColor?: string;
  textColor?: string;
  hoverBgColor?: string;
  borderColor?: string;
}>`
  padding: ${AppTheme.spacing["12"]} ${AppTheme.spacing["16"]};
  text-decoration: none;
  width: 120px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  ${AppTheme.typography.label["16/regular"]}

  ${(props) =>
    props.variant === "primary" &&
    `
    background-color: ${props.bgColor};
    color: ${props.textColor};
    border-color: ${props.bgColor};
    
    &:hover {
      background-color: ${props.hoverBgColor};
      border-color: ${props.hoverBgColor};
    }
  `}

  ${(props) =>
    props.variant === "secondary" &&
    `
    background-color: transparent;
    color: ${props.textColor};
    border-color: ${props.borderColor};
    
    &:hover {
      background-color: ${props.bgColor};
    }
  `}
`;
