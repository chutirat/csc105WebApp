import React, { useState } from "react";
import "./ProductList1";
import "../css/Card1.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../css/Card1.css";
import Cookies from "js-cookie";

export default function cardList1({ id, name, picture, type, open, amount }) {
  return (
    <>
      {Cookies.get("user_id") ? (
        <Card
          className="card1"
          style={{
            justifyContent: "space-between",
          }}
        >
          <CardActionArea className="actionArea">
            <CardMedia
              image={picture}
              title="Cherry"
              style={{
                height: 280,
              }}
            />
            <CardContent className="cardContent">
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography
                className="typography"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {
                  {
                    simple_fruit: "Simple Fruit",
                    aggregate_fruit: "Aggregate Fruit",
                  }[type]
                }
              </Typography>
              <Typography
                variant="body2"
                component="p"
                style={{
                  color:
                    amount == 0 ? "red" : amount < 100 ? "indianred" : "black",
                }}
              >
                Amount {amount}
              </Typography>
            </CardContent>
          </CardActionArea>

          {Cookies.get("user_id") && (
            <CardActions className="cardAction">
              <Button
                size="small"
                color="primary"
                onClick={open.bind(this, id)}
              >
                Update Stock
              </Button>
            </CardActions>
          )}
        </Card>
      ) : null}
    </>
  );
}
