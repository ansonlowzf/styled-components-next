import NextLink from "../NextLink";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MainMenu } from "../../const/navlinks";
import Sidebar02 from "../Sidebar02";
import {
  MainNavContainer,
  MobileIcon,
  Nav,
  NavContainer,
  NavIcon,
  NavLogo,
  MainNavItems,
} from "./Navbar01Element";

const Navbar01 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavContainer>
        <Link href="/" passHref>
          <NavLogo>
            <NavIcon />
          </NavLogo>
        </Link>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <MainNavContainer>
          {MainMenu.map(({ id, name, path }) => (
            <NextLink activeClassName="active" href={path} key={id}>
              <MainNavItems>{name}</MainNavItems>
            </NextLink>
          ))}
        </MainNavContainer>
        <Sidebar02 isOpen={isOpen} toggle={toggle} />
      </NavContainer>
    </Nav>
  );
};

export default Navbar01;
