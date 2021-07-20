import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  background-color: ${(props) => props.theme.bgColors.primary};
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.4rem;
  right: 1.8rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: hsl(0, 0%, 100%);
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;
