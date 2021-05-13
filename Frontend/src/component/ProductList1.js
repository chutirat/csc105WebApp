import {
  faDollyFlatbed,
  faSearch,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Slider,
  TextField,
} from "@material-ui/core";
import axios from "../utils/axios";
import { set } from "js-cookie";
import React, { useEffect, useState } from "react";
import "../css/ProductList.css";
import CardList1 from "./CardList1";
import Left from "./Left";
import qs from "qs";

const ProductList1 = ({ list, title }) => {
  const [invs, setInvs] = useState([]);
  const [openStockDialog, setOpenStockDialog] = useState(false);
  const [numStockDialog, setNumStockDialog] = useState(0);
  const [search, setSearch] = useState("");

  if (!list) list = "list";

  useEffect(() => {
    axios.get("http://localhost:8080/stock/" + list).then((response) => {
      if (response.data.success) {
        setInvs(response.data.stocks);
      } else {
        alert("Unable to fetch stock list.");
      }
    });
  }, [list]);

  const openDialog = (stockId) => {
    setOpenStockDialog(stockId);
    setNumStockDialog(0);
  };

  const closeDialog = () => {
    setOpenStockDialog(false);
  };

  const changeDialog = () => {
    axios
      .post(
        "http://localhost:8080/stock/updatestock",
        qs.stringify({
          stock_id: openStockDialog,
          amount: numStockDialog,
        })
      )
      .then((response) => {
        if (response.data.success) {
          alert("Product amount updated");
          window.location.reload();
        } else {
          alert(response.data.text);
        }
      });
  };

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
          <h3>{title}</h3>

          <div className="search">
            <FontAwesomeIcon icon={faSearch} className="Search" />
            &nbsp; &nbsp;
            <TextField
              id="outlined-basic"
              label="Search"
              size="small"
              variant="outlined"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2} style={{ padding: "0 24px" }}>
            {invs
              .filter((el) =>
                JSON.stringify(el).toLowerCase().includes(search.toLowerCase())
              )
              .map((el) => (
                <Grid item xs={4}>
                  <CardList1
                    id={el.id}
                    name={el.name}
                    picture={el.picture}
                    amount={el.amount}
                    type={el.type}
                    open={openDialog}
                  />
                </Grid>
              ))}
          </Grid>

          <Dialog
            open={openStockDialog}
            onClose={closeDialog}
            aria-labelledby="form-dialog-title"
            style={{ minWidth: "700px" }}
          >
            <DialogTitle id="form-dialog-title">Update stock</DialogTitle>
            <DialogContent>
              <TextField
                label="Number"
                type="number"
                variant="outlined"
                value={numStockDialog}
                onChange={(e) => setNumStockDialog(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={changeDialog} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ProductList1;
