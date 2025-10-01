import React from "react";
import { useColor } from "@/providers/theme-provider";
import {
  AuthButton,
  DropdownFooter,
  DropdownFooterLink,
  DropdownHeader,
  DropdownHeaderEmail,
  DropdownHeaderIdentity,
  DropdownHeaderName,
  DropdownItemContent,
  DropdownItemIcon,
  RightSection,
  UserAvatar,
  UserIdentity,
  UserIdentityEmail,
  UserIdentityName,
  UserMenuButton,
} from "./styled";
import HeaderThemeToggle from "./header-theme-toggle";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SquaresFour,
  CirclesThreePlus,
  Question,
  SignOut,
} from "@phosphor-icons/react";
import { useAuthStore } from "@/stores/auth-store";

export default function HeaderAccount() {
  const secondaryBgColor = useColor("background.background-hover");
  const authButtonTextColor = useColor("content.content-brand");
  const authButtonBorderColor = useColor("border.border-brand");
  const triggerBorderColor = useColor("border.border-subtle");
  const triggerHoverBg = useColor("background.background-hover");
  const avatarBgColor = useColor("background.background-brand");
  const avatarTextColor = useColor("content.content-primary-inverse");
  const nameColor = useColor("content.content-primary");
  const emailColor = useColor("content.content-tertiary");
  const iconColor = useColor("content.content-secondary");
  const destructiveColor = useColor("content.content-negative");
  const footerMutedColor = useColor("content.content-tertiary");
  const pathName = useLocation().pathname;
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const hideAuthButton = ["/login", "/signup"].includes(pathName);

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

  const handleNavigate = (destination: string) => {
    navigate(destination);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <RightSection>
      <HeaderThemeToggle />
      {!isAuthenticated && !hideAuthButton && (
        <AuthButton
          to="/login"
          variant="secondary"
          textColor={authButtonTextColor}
          borderColor={authButtonBorderColor}
          bgColor={secondaryBgColor}
        >
          Login
        </AuthButton>
      )}
      {isAuthenticated && user && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <UserMenuButton
              $borderColor={triggerBorderColor}
              $hoverBgColor={triggerHoverBg}
            >
              <UserAvatar $bgColor={avatarBgColor} $textColor={avatarTextColor}>
                {initials}
              </UserAvatar>
              <UserIdentity>
                <UserIdentityName $color={nameColor}>{user.name}</UserIdentityName>
                <UserIdentityEmail $color={emailColor}>
                  {user.email}
                </UserIdentityEmail>
              </UserIdentity>
            </UserMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={12}>
            <DropdownHeader>
              <UserAvatar
                $bgColor={avatarBgColor}
                $textColor={avatarTextColor}
                style={{ width: 44, height: 44, fontSize: 16 }}
              >
                {initials}
              </UserAvatar>
              <DropdownHeaderIdentity>
                <DropdownHeaderName $color={nameColor}>
                  {user.name}
                </DropdownHeaderName>
                <DropdownHeaderEmail $color={emailColor}>
                  {user.email}
                </DropdownHeaderEmail>
              </DropdownHeaderIdentity>
            </DropdownHeader>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => handleNavigate("/dashboard")}>
              <DropdownItemContent>
                <DropdownItemIcon $iconColor={iconColor}>
                  <SquaresFour size={18} weight="bold" />
                </DropdownItemIcon>
                <span>View Dashboard</span>
              </DropdownItemContent>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleNavigate("/scenarios")}>
              <DropdownItemContent>
                <DropdownItemIcon $iconColor={iconColor}>
                  <CirclesThreePlus size={18} weight="bold" />
                </DropdownItemIcon>
                <span>My Scenarios</span>
              </DropdownItemContent>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => handleNavigate("/help")}>
              <DropdownItemContent>
                <DropdownItemIcon $iconColor={iconColor}>
                  <Question size={18} weight="bold" />
                </DropdownItemIcon>
                <span>Help</span>
              </DropdownItemContent>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onSelect={handleLogout}
            >
              <DropdownItemContent>
                <DropdownItemIcon $iconColor={destructiveColor}>
                  <SignOut size={18} weight="bold" />
                </DropdownItemIcon>
                <span>Log out</span>
              </DropdownItemContent>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownFooter $mutedColor={footerMutedColor}>
              <span>v1.0.0</span>
              <DropdownFooterLink $mutedColor={footerMutedColor} to="/terms-of-service">
                Terms of Service
              </DropdownFooterLink>
            </DropdownFooter>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </RightSection>
  );
}
