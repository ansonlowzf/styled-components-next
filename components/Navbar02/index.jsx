import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElement";
import Link from "next/link";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Link href="/" passHref>
        <NavLink>Pizza</NavLink>
      </Link>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
};

export default Navbar;
