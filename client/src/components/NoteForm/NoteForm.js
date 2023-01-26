import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, TextField, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";

const NoteForm = () => {
	const [addPost, { error }] = useMutation(ADD_POST);
	const [formData, setFormData] = React.useState({
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
			<Grid xs={12}>
				<Typography variant="h3" component="h3">
					Add Post
				</Typography>
			</Grid>
			<Grid xs={12}>
				<TextField id="AddText" label="Text" variant="outlined" name="postText" multiline sx={{ m: 1 }} rows={3} onChange={handleInputChange} />
			</Grid>
			<Grid xs={12}>
				<Button color="secondary" onClick={handleSubmit} sx={{ float: "right" }}>
					Post
				</Button>
			</Grid>
		</Grid>
	);
};

export default NoteForm;
