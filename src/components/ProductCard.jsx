import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FeedIcon from "@mui/icons-material/Feed";

export default function RecipeReviewCard({ item }) {
  const addToCartHandler = () => {};

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-evenly" }}>
        <IconButton
          aria-label="add to favorites"
          sx={{ ":hover": { color: "#ff7004" } }}
          onClick={addToCartHandler}
        >
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="share" sx={{ ":hover": { color: "#ff7004" } }}>
          <FeedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
