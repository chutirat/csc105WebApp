import {
  faDollyFlatbed,
  faSearch,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "../css/ProductList.css";
import CardList1 from "./CardList1";
import Left from "./Left";
const ProductList1 = () => {
  const [invs, setInvs] = useState([
    {
      title: "Orange",
    },
    {
      title: "Banana",
    },
    {
      title: "Mango",
    },
    {
      title: "Coconut",
    },
    {
      title: "Cherry",
    },
    {
      title: "Water Melon",
    },
    {
      title: "Durian",
    },
    {
      title: "Rose Apple",
    },
    {
      title: "Pine Apple",
    },
    {
      title: "Papaya",
    },
    {
      title: "Apple",
    },
    {
      title: "Strawberry",
    },
  ]);

  return (
    <div className="inventory">
      <Left />
      <div className="right">
        <Box
          display="flex"
          justifyContent="space-between"
          height="64px"
          alignItems="center"
          padding="10px 20px"
        >
          <h3>In-Stock Product</h3>

          <div className="search">
            <FontAwesomeIcon icon={faSearch} className="Search" />
            &nbsp; &nbsp;
            <TextField
              id="outlined-basic"
              label="Search"
              size="small"
              variant="outlined"
            />
          </div>
        </Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            {invs.map((el) => (
              <Grid item xs={4}>
                <CardList1 title={el.title} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default ProductList1;
