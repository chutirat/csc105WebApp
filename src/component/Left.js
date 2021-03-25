import {
  faDollyFlatbed,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../img/warehouse.png";

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

      <div class="profile">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src={ProfileImg}
            style={{ width: "52px", height: "52px" }}
          />
          <Typography variant="h6">My Profile</Typography>
          <Typography variant="h6" gutterBottom>
            {" "}
            Earth{" "}
          </Typography>
        </Box>
        <Button variant="contained">Seting</Button>
      </div>

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
