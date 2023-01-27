import { Typography, Card, CardContent } from "@mui/material";

import RemoveFriendButton from "./RemoveFriendButton";

const FriendCard = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography>{props.username}</Typography>
        <RemoveFriendButton friendId={props._id} />
      </CardContent>
    </Card>
  );
};

export default FriendCard;
