import { FaHome } from "react-icons/fa";
import styled from "styled-components";
import NextLink from "../NextLink";

export const Nav = styled.header`
  height: 64px;
  background-color: ${(props) => props.theme.bgColors.primary};
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const NavContainer = styled.nav`
  max-width: ${(props) => props.theme.breakpoints.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 3rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0 2rem;
  }
`;

export const NavLogo = styled.button`
  background-color: transparent;
  color: hsl(0, 0%, 100%);
  border: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: 0.2s ease-in-out;
  }
`;

export const NavIcon = styled(FaHome)`
  font-size: 2rem;
`;

export const MobileIcon = styled.div`
  display: none;
  color: hsl(0, 0%, 100%);

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: inline;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  height: 64px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const MenuItems = styled.a`
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  padding: 0 1rem;
  font-weight: bold;
  opacity: 0.7;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: 0.2s ease-in-out;
  }
`;
