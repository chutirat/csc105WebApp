import {
  faDollyFlatbed,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <div className="left">
      <h1>
        <FontAwesomeIcon icon={faDollyFlatbed} className="faDolly" />
        Inventory
      </h1>

      <Link
        ClassName="link1"
        to="/next/right1"
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="InStock">
          <a>In-Stock Product </a>
        </div>
      </Link>

      <Link
        className="link2"
        to="/next/right2"
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <div className="OutStock">
          <a>Out of Stock</a>
        </div>
      </Link>

      <div class="profile"></div>

      <div className="Logout">
        <a>
          <FontAwesomeIcon icon={faSignOutAlt} className="Logout" />
          Log Out
        </a>
      </div>
    </div>
  );
};

export default Left;
