import React from "react";
import { FaBars } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

function Navbar({ isOpen, toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">
                <FiHome></FiHome>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">ABOUT ME</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">PORTFOLIO</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">
                <IoMailOutline></IoMailOutline>
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
