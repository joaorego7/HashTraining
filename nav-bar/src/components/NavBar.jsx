import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { PiPlugBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import "../components/NavBar.css";

const BottomNavigationBar = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container">
      <TabItem
        label={
          <FaHome style={{ color: "#419EF4", width: "25px", height: "25px" }} />
        }
        tab="home-page"
        selectedTab={selectedTab}
        onClick={handleTabClick}
      />
      <TabItem
        label={
          <IoSearch
            style={{ color: "#419EF4", width: "25px", height: "25px" }}
          />
        }
        tab="search-page"
        selectedTab={selectedTab}
        onClick={handleTabClick}
      />
      <TabItem
        className="postar"
        label={
          <CgAdd style={{ color: "#419EF4", width: "25px", height: "25px" }} />
        }
        tab="post-page"
        selectedTab={selectedTab}
        onClick={handleTabClick}
      />
      <TabItem
        label={
          <PiPlugBold
            style={{ color: "#419EF4", width: "25px", height: "25px" }}
          />
        }
        tab="connections-page"
        selectedTab={selectedTab}
        onClick={handleTabClick}
      />
      <TabItem
        label={
          <FaUser style={{ color: "#419EF4", width: "25px", height: "25px" }} />
        }
        tab="profile-page"
        selectedTab={selectedTab}
        onClick={handleTabClick}
      />
    </div>
  );
};

const TabItem = ({ label, tab, selectedTab, onClick }) => {
  const isSelected = selectedTab === tab;

  return (
    <div
      className={`tab ${isSelected ? "selectedTab" : ""}`}
      onClick={() => onClick(tab)}
    >
      {label}
    </div>
  );
};

export default BottomNavigationBar;
