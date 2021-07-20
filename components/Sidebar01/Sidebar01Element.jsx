import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: ${(props) => props.theme.bgColors.primary};
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s, ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
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
