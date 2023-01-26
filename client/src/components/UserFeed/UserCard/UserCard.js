import * as React from "react";
import { Typography, Card, CardContent } from "@mui/material";
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
