import { useTheme } from "@/providers/theme-provider";
import { Link } from "react-router-dom";
import styled from "styled-components";
const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;

  img {
    height: 32px;
  }
`;

type HeaderLogoProps = {
  className?: string;
};
export default function HeaderLogo(props: HeaderLogoProps) {
  const { theme } = useTheme();
  return (
    <LogoContainer to={"/"} className={props.className}>
      {theme === "light" ? (
        <img src="/UrbanEcho_full_Logo_primary.svg" alt="Logo" />
      ) : (
        <img src="/UrbanEcho_full_logo_for_darkBG.svg" alt="Logo" />
      )}
    </LogoContainer>
  );
}
