import { Typography, Modal, Box, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useState } from "react";
import { ADD_LIKE } from "../../utils/mutations";
import { REMOVE_LIKE } from "../../utils/mutations";

const LikeButton = () => {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(`New value of count: ${count}`);
  };

  return (
    <IconButton aria-label="like" onClick={handleClick}>
      <FavoriteBorderIcon />
      <Typography>{count}</Typography>
    </IconButton>
  );
};

export default LikeButton;
