import { useColor } from "@/providers/theme-provider";
import {
  BaseHeader,
  HeaderContainer,
  LeftSection,
  MiddleSection,
  RightSection,
} from "./styled";
import HeaderLogo from "./header-logo";
import HeaderMiddleLinks from "./header-middle-links";
import HeaderAccount from "./header-account";
import MobileMenu, { MobileMenuToggle } from "./mobile-menu";
import { HIDE_FOOTER_HEADER_PATHS } from "@/lib/data/header-footer-hide-data";
import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageHeader() {
  const borderColor = useColor("border.border-subtle");
  const bgColor = useColor("surface.surface-l0");
  const pathName = useLocation().pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const showHeader = useMemo(() => {
    return !HIDE_FOOTER_HEADER_PATHS.header.includes(pathName);
  }, [pathName]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathName]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const mobileHideLinks = [
    '/schedule-demo-success',
    '/schedule-demo',
    '/login',
    '/forgot-password',
    '/new-password',

  ]


  const showHamburger = useMemo(() => {
    if (mobileHideLinks.includes(pathName)) {
      return false;
    }
    return true;
  }, [pathName, mobileHideLinks]);

  return showHeader ? (
    <>
      <BaseHeader bgColor={bgColor} borderColor={borderColor}>
        <HeaderContainer>
          <LeftSection>
            <HeaderLogo />
            
          </LeftSection>

          <MiddleSection>
            <HeaderMiddleLinks />
          </MiddleSection>

          <RightSection>
            <HeaderAccount />
            {showHamburger && <MobileMenuToggle onClick={handleMobileMenuToggle} />}
          </RightSection>
        </HeaderContainer>
      </BaseHeader>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  ) : null;
}
