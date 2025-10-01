// Header component types
export interface HeaderProps {
  className?: string;
}

export interface ThemeToggleProps {
  className?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HeaderAccountProps {
  isAuthenticated?: boolean;
  userName?: string;
  onLogin?: () => void;
  onLogout?: () => void;
  onSignup?: () => void;
}