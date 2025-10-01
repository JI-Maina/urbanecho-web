import {
  FooterContainer,
  FooterContent,
  FooterContentBottomLegal,
  FooterContentTop,
  FooterMapBottom,
} from "./footer.styled";
import { Link, useLocation } from "react-router-dom";
import HeaderLogo from "../header/header-logo";
import { useColor } from "@/providers/theme-provider";
import { useMemo } from "react";
import { HIDE_FOOTER_HEADER_PATHS } from "@/lib/data/header-footer-hide-data";

type QuickLink = {
  type: "link" | "email" | "phone" | "external-link";
  label: string;
  href: string;
};
type QuickLinkCategory = "quick" | "contact" | "legal";
const quickLinks: Record<QuickLinkCategory, QuickLink[]> = {
  quick: [
    //echo paltform,about us,blog
    {
      type: "link",
      label: "Echo Platform",
      href: "/",
    },
    {
      type: "link",
      label: "About Us",
      href: "/about-us",
    },
    {
      type: "link",
      label: "Blog",
      href: "/blog",
    },
  ],
  contact: [
    {
      type: "email",
      label: "Email Us",
      href: "mailto:info@urbanecho.com",
    },
    {
      type: "phone",
      label: "Call Us",
      href: "tel:+1234567890",
    },
  ],
  legal: [
    {
      type: "link",
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      type: "link",
      label: "Terms of Service",
      href: "/terms-of-service",
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathName = useLocation().pathname;

  const showFooter = useMemo(() => {
    return !HIDE_FOOTER_HEADER_PATHS.footer.includes(pathName);
  }, [pathName]);
  const bgColor = useColor("surface.surface-l0");
  const headerColor = useColor("content.content-tertiary");
  const textColor = useColor("content.content-secondary");
  return showFooter ? (
    <FooterContainer bgColor={bgColor}>
      <FooterContent>
        <FooterContentTop headerColor={headerColor} textColor={textColor}>
          <div className="logo-section">
            {/* <img src="/images/logo_white.svg" alt="UrbanEcho Logo" /> */}
            <HeaderLogo />
            <p>
              UrbanEcho is an ETH Zurich spin-off. We provide AI-powered urban
              digital twins to help planners build more resilient and inclusive
              cities worldwide.
            </p>
          </div>
          <div className="quick-links">
            <div className="quick-access-links">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.quick.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contact">
              <h4>Contact</h4>
              <ul>
                {quickLinks.contact.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="legal">
              <h4>Legal</h4>
              <ul>
                {quickLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FooterContentTop>
        <FooterContentBottomLegal>
          <p>© UrbanEcho {currentYear}. All Rights Reserved</p>
        </FooterContentBottomLegal>
      </FooterContent>
      <FooterMapBottom bgImgPath="/images/footer_img.png" />
    </FooterContainer>
  ) : null;
}
