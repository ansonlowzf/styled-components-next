import { FaHome } from "react-icons/fa";
import styled from "styled-components";

export const Nav = styled.div`
  background-color: ${(props) => props.theme.bgColors.primary};
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavContainer = styled.div`
  max-width: ${(props) => props.theme.breakpoints.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const NavLogo = styled.a`
  height: 64px;
  color: hsl(0, 0%, 100%);
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
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

export const MainNavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 64px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const MainNavItems = styled.a`
  color: hsl(0, 0%, 100%);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  padding-right: 1rem;
  padding-left: 1rem;
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: 0.2s ease-in-out;
  }
`;
