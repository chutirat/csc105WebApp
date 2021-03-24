import {
  faClipboard,
  faClipboardList,
  faHome,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import Home from "../img/home.png";

const Navbar = () => {
  return (
    <div
      style={{
        width: "calc(100% - 48px)",
        height: "64px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
      }}
    >
      <h4>home</h4>

      <div
        className="navBarRightSide"
        style={{
          justifyContent: "space-around",
          alignItems: "baseline",
        }}
      >
        <Link to="/">
          <FontAwesomeIcon icon={faHome} className="faHome" />
          Home
        </Link>
        <Link to="/login">
          <FontAwesomeIcon icon={faRegistered} className="faRegis" /> Register
        </Link>
        <Link to="/next/right1">
          <FontAwesomeIcon icon={faClipboardList} className="faClip" />
          Product List
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
