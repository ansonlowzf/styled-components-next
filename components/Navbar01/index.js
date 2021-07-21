import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar02 from "../Sidebar02";
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavIcon,
  NavLogo,
  MainNavContainer,
  MainNavItems,
} from "./Navbar01Element";
import { MainMenu } from "../../const/navlinks";

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
            <Link href={path} passHref key={id}>
              <MainNavItems>{name}</MainNavItems>
            </Link>
          ))}
        </MainNavContainer>
        <Sidebar02 isOpen={isOpen} toggle={toggle} />
      </NavContainer>
    </Nav>
  );
};

export default Navbar01;
