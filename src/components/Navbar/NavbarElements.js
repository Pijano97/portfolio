import styled from "styled-components";
import { COLORS } from "../color";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    width: 200px;
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    width: 0;
    background: none;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 24px;
  /* max-width: 1100px; */
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-top: 180px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  width: 100%;
`;

export const NavLinks = styled(Link)`
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 100%;
  width: 300px;
  padding: 1rem 0;

  @media screen and (max-width: 1024px) {
    width: 200px;
    transition: 0.8s all ease;
  }
  cursor: pointer;
  border-bottom: 2px solid ${COLORS.primary};

  &:active {
    border-bottom: 3px solid #01bf71;
  }
`;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   border-radius: 50px;
//   background: #01bf71;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `;
