import * as React from "react";
import { Typography, CircularProgress, Card, CardContent, CardActions } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AddFriendButton from "./AddFriendButton";

const UserCard = ({ username, userKey, postNumber }) => {
	return (
		<Card id={userKey} key={userKey} sx={{ m: 1 }}>
			<CardContent>
				<Typography>{username}</Typography>
				<Typography>Posts: {postNumber} </Typography>
			</CardContent>
			<AddFriendButton friendId={userKey} />
		</Card>
	);
};

export default UserCard;
