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

export default function cardList1({ title }) {
  return (
    <Card
      className="card1"
      style={{
        maxWidth: "300px",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea className="actionArea">
        <CardMedia
          image="/static/images/cherry.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className="cardContent">
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            className="typography"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Good For Health Good For You
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardAction">
        <Button size="small" color="primary">
          In Stock
        </Button>
        <Button className="button" size="small" color="primary">
          Out Of Stock
        </Button>
      </CardActions>
    </Card>
  );
}
