import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./BurgerMenu.css";
import { MdExpandMore } from "react-icons/md";
import { CiBasketball } from "react-icons/ci";
import { IoIosFootball } from "react-icons/io";
import { GiTennisRacket } from "react-icons/gi";
import { LiaRunningSolid } from "react-icons/lia";

const Burger = () => {
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [showMoreSports, setShowMoreSports] = useState(false);

  const updateMenu = () => {
    setMenuClass(isMenuClicked ? "menu hidden" : "menu visible");
    setIsMenuClicked(!isMenuClicked);
  };

  const toggleMoreSports = () => {
    setShowMoreSports(!showMoreSports);
  };

  return (
    <div>
      <nav>
        <RxHamburgerMenu
          style={{ color: "#419EF4" }}
          className="burger-icon"
          onClick={updateMenu}
        />
      </nav>
      <div className={menu_class}>
        <div className="sports-button">
          <div className="title">Suggestions for You</div>
          <div>
            <div>
              <CiBasketball /> <span> # </span> Basketball
            </div>
            <div>
              <IoIosFootball /> <span> # </span>Football
            </div>
            <div>
              <GiTennisRacket /> <span> # </span>Tenis
            </div>
            <div>
              <LiaRunningSolid /> <span> # </span>Running
            </div>
            <div className="more-button" onClick={toggleMoreSports}>
              More
              <MdExpandMore
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: showMoreSports ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
