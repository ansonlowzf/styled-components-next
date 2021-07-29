import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MainMenu } from "../../const/navlinks";
import NextLink from "../NextLink";
import Sidebar02 from "../Sidebar02";
import {
  MenuContainer,
  MenuItems,
  MobileIcon,
  Nav,
  NavContainer,
  NavIcon,
  NavLogo,
} from "./HeaderElement";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <NextLink href="/">
          <NavLogo>
            <NavIcon />
          </NavLogo>
        </NextLink>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <MenuContainer>
          {MainMenu.map(({ id, name, path }) => (
            <NextLink activeClassName="active" href={path} key={id}>
              <MenuItems>{name}</MenuItems>
            </NextLink>
          ))}
        </MenuContainer>
        <Sidebar02 isOpen={isOpen} toggle={toggle} />
      </NavContainer>
    </Nav>
  );
};

export default Header;
