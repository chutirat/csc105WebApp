import {
  faDollyFlatbed,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Box, Button, Typography } from "@material-ui/core";
import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
// import ProfileImg from "/img/redd.png";

const Left = () => {
  return (
    <div className="left">
      <div style={{ marginTop: "24px" }}>
        <h1>
          <FontAwesomeIcon icon={faDollyFlatbed} className="faDolly" />
          Inventory
        </h1>

        <Link
          to="/next/right1"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="InStock">
            <a>All Product </a>
          </div>
        </Link>

        {Cookies.get("permission") == "admin" && (
          <>
            <Link
              to="/next/right2"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="InStock">
                <a>In-Stock Product </a>
              </div>
            </Link>

            <Link
              to="/next/right3"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <div className="OutStock">
                <a>Out of Stock</a>
              </div>
            </Link>
          </>
        )}
      </div>

      <div className="leftBottom">
        <div class="profile">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={"/img/redd.png"}
              style={{ width: "160px", height: "160px" }}
            />
            {Cookies.get("user_id") ? (
              <>
                <Typography variant="h6">My Profile</Typography>
                <Typography
                  variant="p"
                  style={{ fontSize: "15px" }}
                  gutterBottom
                >
                  {Cookies.get("username")}
                </Typography>
                <Typography
                  variant="p"
                  style={{ fontSize: "12px" }}
                  gutterBottom
                >
                  {Cookies.get("email")}
                </Typography>
                <Typography variant="p" gutterBottom>
                  Project 105 WebApplication
                </Typography>
              </>
            ) : (
              <Typography variant="h6">Not logged in</Typography>
            )}
          </Box>
          <Link to="/history">
            <Button variant="contained">History</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Left;
