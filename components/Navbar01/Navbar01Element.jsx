import styled from "styled-components";
import { FaHome } from "react-icons/fa";

export const Nav = styled.div`
  background-color: ${(props) => props.theme.bgColors.primary};
  height: 80px;
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

  @media screen and (max-width: 960px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const NavLogo = styled.a`
  height: 80px;
  color: hsl(0, 0%, 100%);
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  /* text-decoration: none; */
`;

export const NavIcon = styled(FaHome)`
  font-size: 3rem;
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
