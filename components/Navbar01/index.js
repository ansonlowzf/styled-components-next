import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar01 from "../Sidebar01";
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavIcon,
  NavLogo,
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
        <Sidebar01 isOpen={isOpen} toggle={toggle} />
      </NavContainer>
    </Nav>
  );
};

export default Navbar01;
