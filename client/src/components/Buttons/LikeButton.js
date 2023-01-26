import { Typography, Modal, Box, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useState, useMutation } from "react";
import { ADD_LIKE, REMOVE_LIKE } from "../../utils/mutations";

const LikeButton = () => {
  // use variable to toggle if post was liked
  // by default, post is unliked
  let [liked, setLiked] = useState(false);

  const handleClick = () => {
    // if unliked post is clicked:
    if (!liked) {
      // add like to post doc
      // toggle icon to full heart
      // toggle liked to true
      setLiked(true);
    }
    // if liked post is clicked:
    else {
      // remove like from post doc
      // toggle icon back to border heart
      // toggle liked to false
      setLiked(false);
    }
    console.log(liked);
  };

  // reference number of likes to count next to button

  // let [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <IconButton aria-label="like" onClick={handleClick}>
        <Typography>{`${liked}`}</Typography>
        <FavoriteBorderIcon />
      </IconButton>
    </div>
  );
};

export default LikeButton;
