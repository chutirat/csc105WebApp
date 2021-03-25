import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import CardList1 from "./CardList1";
import Left from "./Left";

const ProductList2 = () => {
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
        <div className="right">
          <Box
            display="flex"
            justifyContent="space-between"
            height="64px"
            alignItems="center"
            padding="10px 20px"
          >
            <h3>Out Of Stock</h3>

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
            <Grid container spacing={2} alignItems="center" justify="center">
              {invs.map((el) => (
                <Grid item xs={4}>
                  <CardList1 title={el.title} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList2;
