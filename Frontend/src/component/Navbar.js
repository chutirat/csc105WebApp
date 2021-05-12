import {
  faChartArea,
  faClipboard,
  faClipboardList,
  faGlobeAmericas,
  faHome,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
// import Home from "../img/home.png";

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
        boxShadow: "0px 3px 10px 0px rgba(0,0,0,0.3)",
        zIndex: "20",
        position: "fixed",
        top: 0,
      }}
    >
      <h4>
        <FontAwesomeIcon icon={faGlobeAmericas} className="faGlobe" />
      </h4>

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
        {Cookies.get("user_id") ? (
          <Link to="/login">
            <FontAwesomeIcon icon={faRegistered} className="faRegis" /> Register
          </Link>
        ) : (
          <Link to="/login">
            <FontAwesomeIcon icon={faRegistered} className="faRegis" /> Log Out
          </Link>
        )}
        <Link to="/next/right1">
          <FontAwesomeIcon icon={faClipboardList} className="faClip" />
          Product List
        </Link>
        <Link to="/Dashboard">
          <FontAwesomeIcon icon={faChartArea} className="faChart" />
          Montly Report
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
