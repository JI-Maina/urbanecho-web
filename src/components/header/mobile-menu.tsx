import React from "react";
import {
  ListIcon,
  XIcon,
  QuestionIcon,
  SignOutIcon,
  SquaresFourIcon,
  CirclesThreePlusIcon,
  SunIcon,
  MoonStarsIcon,
} from "@phosphor-icons/react";
import { useColor } from "@/providers/theme-provider";
import { useAuthStore } from "@/stores/auth-store";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MobileMenuOverlay,
  MobileMenuContent,
  MobileMenuHeader,
  MobileMenuCloseButton,
  MobileMenuNav,
  MobileMenuLink,
  MobileMenuUserSection,
  MobileMenuUserInfo,
  MobileMenuActions,
  MobileMenuThemeSection,
  MobileMenuButton,
  UserAvatar,
  UserIdentityName,
  UserIdentityEmail,
  UserIdentity,
} from "./styled";
import HeaderLogo from "./header-logo";
import Button, { LinkButton } from "../ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const bgColor = useColor("surface.surface-l0");
  const textColor = useColor("content.content-primary");
  const activeColor = useColor("content.content-brand");
  const borderColor = useColor("border.border-subtle");
  const avatarBgColor = useColor("background.background-brand");
  const avatarTextColor = useColor("content.content-primary-inverse");
  const nameColor = useColor("content.content-primary");
  const emailColor = useColor("content.content-tertiary");
  //   const authButtonTextColor = useColor("content.content-brand");
  //   const authButtonBorderColor = useColor("border.border-brand");
  //   const authButtonBgColor = useColor("background.background-hover");
  //   const destructiveColor = useColor("content.content-negative");

  const { user, isAuthenticated, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  const initials = React.useMemo(() => {
    if (!user?.name) return "";
    return user.name
      .split(" ")
      .filter(Boolean)
      .map((part) => part[0] ?? "")
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }, [user?.name]);

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    onClose();
  };

  const isLinkActive = (path: string) => location.pathname === path;

  return (
    <MobileMenuOverlay $isOpen={isOpen} $bgColor={bgColor}>
      <MobileMenuContent>
        <MobileMenuHeader>
          <HeaderLogo />
          <MobileMenuCloseButton $textColor={textColor} onClick={onClose}>
            <XIcon size={24} weight="bold" />
          </MobileMenuCloseButton>
        </MobileMenuHeader>

        <MobileMenuNav>
          <MobileMenuLink
            to="/product"
            $textColor={textColor}
            $activeColor={activeColor}
            className={isLinkActive("/product") ? "active" : ""}
            onClick={() => handleNavigation("/product")}
          >
            Product
          </MobileMenuLink>
          <MobileMenuLink
            to="/company"
            $textColor={textColor}
            $activeColor={activeColor}
            className={isLinkActive("/company") ? "active" : ""}
            onClick={() => handleNavigation("/company")}
          >
            Company
          </MobileMenuLink>
          <MobileMenuLink
            to="/blog"
            $textColor={textColor}
            $activeColor={activeColor}
            className={isLinkActive("/blog") ? "active" : ""}
            onClick={() => handleNavigation("/blog")}
          >
            Blog
          </MobileMenuLink>
        </MobileMenuNav>

        {isAuthenticated && user ? (
          <MobileMenuUserSection $borderColor={borderColor}>
            <MobileMenuUserInfo>
              <UserAvatar $bgColor={avatarBgColor} $textColor={avatarTextColor}>
                {initials}
              </UserAvatar>
              <UserIdentity>
                <UserIdentityName $color={nameColor}>
                  {user.name}
                </UserIdentityName>
                <UserIdentityEmail $color={emailColor}>
                  {user.email}
                </UserIdentityEmail>
              </UserIdentity>
            </MobileMenuUserInfo>

            <MobileMenuActions>
              <LinkButton variant="ghost" to="/#">
                <SquaresFourIcon size={20} weight="bold" />
                View Dashboard
              </LinkButton>

              <LinkButton variant="ghost" to="/#">
                <CirclesThreePlusIcon size={20} weight="bold" />
                My Scenarios
              </LinkButton>

              <LinkButton variant="ghost" to="/#">
                <QuestionIcon size={20} weight="bold" />
                Help & Support
              </LinkButton>

              <Button variant="ghost" onClick={handleLogout}>
                <SignOutIcon size={20} weight="bold" />
                Log out
              </Button>
            </MobileMenuActions>
          </MobileMenuUserSection>
        ) : (
          <MobileMenuUserSection $borderColor={borderColor}>
            <MobileMenuActions>
              <LinkButton variant="secondary" to="/login">
                Log in
              </LinkButton>
            </MobileMenuActions>
          </MobileMenuUserSection>
        )}

        <MobileMenuThemeSection
          $borderColor={borderColor}
          $textColor={textColor}
        >
          <div style={{ color: textColor }}>Appearance</div>
          <div className="toggle-icons">
            <Button variant="secondary"  aria-label="Light mode">
              <SunIcon className="theme-icon" /> Light
            </Button>
            <Button variant="secondary" aria-label="Dark mode">
              <MoonStarsIcon className="theme-icon"/> Dark
            </Button>
          </div>
        </MobileMenuThemeSection>
      </MobileMenuContent>
    </MobileMenuOverlay>
  );
}

export function MobileMenuToggle({ onClick }: { onClick: () => void }) {
  const textColor = useColor("content.content-primary");

  return (
    <MobileMenuButton $textColor={textColor} onClick={onClick}>
      <ListIcon size={24} weight="bold" className="menu-icon" />
    </MobileMenuButton>
  );
}
