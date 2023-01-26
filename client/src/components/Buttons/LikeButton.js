import { Typography, Modal, Box, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { useState } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { ADD_LIKE, REMOVE_LIKE } from "../../utils/mutations";
import { QUERY_POST } from "../../utils/queries";

const LikeButton = ({ postId }) => {
  // query posts to find number of likes
  const [getLikes, { loading, error, data }] = useLazyQuery(QUERY_POST);
  const postData = data?.post || [];
  console.log(postData);

  const [addLike, { error2 }] = useMutation(ADD_LIKE);
  const [removeLike, { error3 }] = useMutation(REMOVE_LIKE);

  // use variable to toggle if post was liked
  // by default, post is unliked
  let [liked, setLiked] = useState(false);

  const handleClick = async () => {
    // if unliked post is clicked:
    if (!liked) {
      // add like to post doc
      const { data } = await addLike({ variables: { postId: postId } });

      // requery to update number on post
      const { data2 } = await getLikes({
        variables: { postId: postId },
      });

      // toggle liked to true
      setLiked(true);
    }
    // if liked post is clicked:
    else {
      // remove like from post doc
      const { data } = await removeLike({ variables: { postId: postId } });

      // requery to update number on post
      const { data2 } = await getLikes({
        variables: { postId: postId },
      });
      console.log(data2);

      // toggle liked to false
      setLiked(false);
    }
  };

  return (
    <div>
      <IconButton aria-label="like" onClick={handleClick}>
        <Typography>{postData.likes}</Typography>
        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </div>
  );
};

export default LikeButton;
