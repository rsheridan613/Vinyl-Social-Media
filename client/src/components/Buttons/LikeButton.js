import { Typography, Modal, Box, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const LikeButton = () => {
  return (
    <IconButton aria-label="delete">
      <FavoriteBorderIcon />
    </IconButton>
  );
};

export default LikeButton;
