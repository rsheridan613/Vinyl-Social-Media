import { Typography, Card, CardContent } from "@mui/material";

const FriendCard = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography>{props.username}</Typography>
      </CardContent>
    </Card>
  );
};

export default FriendCard;
