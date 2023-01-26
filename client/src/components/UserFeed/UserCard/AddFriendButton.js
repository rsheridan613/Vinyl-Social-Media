import * as React from "react";
import { Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../../../utils/mutations";
import Auth from "../../../utils/auth";
const AddFriendButton = ({ friendId }) => {
	const [addFriend, { error }] = useMutation(ADD_FRIEND);
	if (error) {
		console.log(JSON.stringify(error));
	}
	const userId = Auth.getProfile().data._id;
	const handleClick = async (event) => {
		event.preventDefault();
		try {
			const { data } = await addFriend({
				variables: { userId: userId, friendId: friendId },
			});

			window.location.reload();
		} catch (error) {
			console.log(JSON.stringify(error));
		}
	};

	return <Button onClick={handleClick}>Add Friend</Button>;
};

export default AddFriendButton;
