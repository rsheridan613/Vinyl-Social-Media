import React, { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import NoteFeed from "../components/NoteFeed/NoteFeed";

const CreatePost = () => {
	const [addPost, { error }] = useMutation(ADD_POST);
	const [formData, setFormData] = useState({
		postText: "JavaScript",
	});
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = async (event) => {
		console.log("submit", formData);
		try {
			const { data } = await addPost({
				variables: { ...formData },
			});
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Grid container spacing={2} xs={12}>
			<Typography variant="h3" component="h3">
				Add Post
			</Typography>
			<TextField
				id="AddText"
				label="Text"
				variant="outlined"
				name="postText"
				multiline
				sx={{ m: 1, width: "50%" }}
				rows={4}
				onChange={handleInputChange}
			></TextField>
			<Button color="secondary" onClick={handleSubmit}>
				Post
			</Button>
			{/* <TextareaAutosize></TextareaAutosize> */}
		</Grid>
	);
};

const Dashboard = () => {
	return (
		<Box elevation={2}>
			<Typography variant="h1" component="h1">
				Dashboard
			</Typography>
			<Grid container xs={12}>
				<CreatePost />
				<NoteFeed />
			</Grid>
		</Box>
	);
};

export default Dashboard;
