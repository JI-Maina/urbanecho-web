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

  @media (max-width: ${AppTheme.layout.breakpoints.tablet}) {
    padding: ${AppTheme.spacing["16"]} ${AppTheme.layout.container.tablet.margin};
  }

  @media (max-width: ${AppTheme.layout.breakpoints.mobile}) {
    padding: ${AppTheme.spacing["16"]} ${AppTheme.layout.container.mobile.margin};
  }
`;

// Left section for logo
export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

// Middle section for navigation
export const MiddleSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none; // Hide on mobile, could add mobile menu later
  }
`;

// Right section for actions
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${AppTheme.spacing["12"]};
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
