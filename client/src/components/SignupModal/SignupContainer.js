import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ADD_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const SignupContainer = () => {
	const [addUser, { error }] = useMutation(ADD_USER);

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
	let navigate = useNavigate();
	const handleSignUp = async (event) => {
		console.log("submit", formData);
		try {
			const { data } = await addUser({
				variables: { ...formData },
			});
			console.log(data);
			if (data.addUser.token) {
				localStorage.setItem("id_token", data.addUser.token);
				navigate("/dashboard");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Grid container xs={6}>
			<TextField
				name="username"
				id="signup-username"
				variant="outlined"
				helperText="username"
				sx={{ m: 1, width: "50%" }}
				onChange={handleInputChange}
			></TextField>
			<TextField
				name="email"
				type="email"
				id="signup-email"
				variant="outlined"
				helperText="email"
				sx={{ m: 1, width: "50%" }}
				onChange={handleInputChange}
			></TextField>
			<TextField
				name="password"
				id="signup-password"
				variant="outlined"
				helperText="password"
				sx={{ m: 1, width: "50%" }}
				onChange={handleInputChange}
			></TextField>
			{error && <Typography variant="body1">{error.message}</Typography>}
			<Button color="secondary" onClick={handleSignUp}>
				Submit
			</Button>
		</Grid>
	);
};

export default SignupContainer;
