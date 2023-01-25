import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ADD_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
		event.preventDefault();
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
		<Grid container xs={12} md={8} lg={5} sx={{ m: "auto" }}>
			<Grid xs={12}>
				<Typography variant="h1" component="h1" align="center">
					Signup
				</Typography>
			</Grid>
			<Grid xs={12}>
				<TextField name="username" id="signup-username" variant="outlined" helperText="Username" onChange={handleInputChange} required fullWidth />
			</Grid>
			<Grid xs={12}>
				<TextField
					name="email"
					type="email"
					id="signup-email"
					variant="outlined"
					helperText="Email"
					onChange={handleInputChange}
					required
					fullWidth
				/>
			</Grid>
			<Grid xs={12}>
				<TextField
					type="password"
					name="password"
					id="signup-password"
					variant="outlined"
					helperText="Password"
					onChange={handleInputChange}
					required
					fullWidth
				/>
			</Grid>
			{error && <Typography variant="body1">{error.message}</Typography>}
			<Grid xs={11} md={8} m="auto">
				<Button color="secondary" onClick={handleSignUp} fullWidth>
					<Typography variant="button">Submit</Typography>
				</Button>
			</Grid>
		</Grid>
	);
};

export default Register;
