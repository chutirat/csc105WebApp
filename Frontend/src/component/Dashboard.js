import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@material-ui/core";
import React from "react";
import Left from "./Left";
import Cookies from "js-cookie";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  return (
    <div className="inventory">
      <Left />
      <div className="right" style={{ alignSelf: "center" }}>
        <div>
          {!Cookies.get("user_id") ? (
            <>
              <Box maxWidth="500px" margin="auto">
                <Card>
                  <CardHeader
                    title="You're not Login now "
                    style={{ textAlign: "center" }}
                  />

                  <CardContent>
                    <Box display="flex" flexDirection="column">
                      <Typography
                        color="textSecondary"
                        align="left"
                        style={{ textAlign: "center" }}
                      >
                        Require to login!!!
                      </Typography>
                      <Box display="flex" justifyContent="space-between">
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="flex-start"
                        ></Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
