import AppTheme from "@/lib/theme";
import { useColor } from "@/providers/theme-provider";
import {  NavLink } from "react-router-dom";
import styled from "styled-components";
const NavContainer = styled.nav<{
  textColor: string;
  activeColor: string;
  hoverColor: string;
  activeBgColor: string;
}>`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${(props) => props.textColor};
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    transition: all 0.3s ease;
    position: relative;
    ${AppTheme.typography.label["16/semibold"]}

    /* Active state styling */
    &.active {
      color: ${(props) => props.activeColor};
    }
  }
`;

const NavLinkStyled = styled(NavLink)<{
  activeColor: string;
}>`
  &.active {
    color: ${(props) => props.activeColor};
  }
`;

export default function HeaderMiddleLinks() {
  const linksColor = useColor("content.content-tertiary");
  const activeColor = useColor("content.content-brand");
  const hoverColor = useColor("content.content-primary");
  const activeBgColor = useColor("background.background-brand-subtle");

  return (
    <NavContainer
      textColor={linksColor}
      activeColor={activeColor}
      hoverColor={hoverColor}
      activeBgColor={activeBgColor}
    >
      <NavLinkStyled activeColor={activeColor} to="/product">
        Product
      </NavLinkStyled>
      <NavLinkStyled activeColor={activeColor} to="/company">
        Company
      </NavLinkStyled>
      <NavLinkStyled activeColor={activeColor} to="/blog">
        Blog
      </NavLinkStyled>
    </NavContainer>
  );
}
