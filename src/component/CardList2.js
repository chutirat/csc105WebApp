import React, { useState } from "react";
import "./ProductList2";
import "../css/Card2.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function cardList1({ title }) {
  return (
    <Card
      classNames="card2"
      style={{
        maxWidth: "300px",
        margin: "5px",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea className="actionArea">
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
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
            Photo card pack new single of EXO
            (Sehun,Chanyeol,Baekhyun,Xiamin,D.O., KAI)
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
