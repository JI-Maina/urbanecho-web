import { useColor } from "@/providers/theme-provider";
import {
  BaseHeader,
  HeaderContainer,
  LeftSection,
  MiddleSection,
} from "./styled";
import HeaderLogo from "./header-logo";
import HeaderMiddleLinks from "./header-middle-links";
import HeaderAccount from "./header-account";
import { HIDE_FOOTER_HEADER_PATHS } from "@/lib/data/header-footer-hide-data";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function PageHeader() {
  const borderColor = useColor("border.border-subtle");
  const bgColor = useColor("surface.surface-l0");
  const pathName = useLocation().pathname;

  const showHeader = useMemo(() => {
    return !HIDE_FOOTER_HEADER_PATHS.header.includes(pathName);
  }, [pathName]);
  return showHeader ? (
    <BaseHeader bgColor={bgColor} borderColor={borderColor}>
      <HeaderContainer>
        <LeftSection>
          <HeaderLogo />
        </LeftSection>

        <MiddleSection>
          <HeaderMiddleLinks />
        </MiddleSection>

        <HeaderAccount />
      </HeaderContainer>
    </BaseHeader>
  ) : null;
}
