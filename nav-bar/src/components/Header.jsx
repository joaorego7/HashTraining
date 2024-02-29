import React from "react";
import "./Header.css";
import Logo from "../components/LogoExtenso.webp";
import { RxHamburgerMenu } from "react-icons/rx";
import Burger from "./BurgerMenu";

export function Header() {
  return (
    <div className="container-header">
      <div className="flex justify-between">
        <img className="logo" src={Logo} alt="Logo" style={{width: "150px", height: "30px"}} />
        <div className="hamburger-menu">
          <Burger></Burger>
        </div>
      </div>
    </div>
  );
}
