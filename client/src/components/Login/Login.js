import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../utils/mutations";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Box, TextField, Button } from "@mui/material";

const Login = () => {
	const [login, { error }] = useMutation(LOGIN);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
	let navigate = useNavigate();
	const handleLogin = async (event) => {
		console.log("submit", formData);
		try {
			const { data } = await login({
				variables: { ...formData },
			});
			console.log(data);
			if (data.login.token) {
				localStorage.setItem("id_token", data.login.token);
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
					Login
				</Typography>
			</Grid>
			<Grid xs={12} m="auto">
				<TextField name="email" id="login-email" variant="outlined" helperText="Email" onChange={handleInputChange} fullWidth />
			</Grid>
			<Grid xs={12} m="auto">
				<TextField name="password" id="login-password" variant="outlined" helperText="Password" onChange={handleInputChange} fullWidth />
			</Grid>
			<Grid xs={11} md={8} m="auto">
				<Button color="secondary" onClick={handleLogin} fullWidth>
					<Typography variant="button">Submit</Typography>
				</Button>
			</Grid>
		</Grid>
	);
};

export default Login;
