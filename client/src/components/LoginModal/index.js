import React from "react";
// import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LoginContainer from "./LoginContainer";

const SignupModal = () => {
	return (
		<Box elevation={2} sx={{ flexGrow: 1 }}>
			<Typography variant="h1" component="h1">
				Login
			</Typography>
			<Grid container>
				<LoginContainer />
			</Grid>
		</Box>
	);
};

export default SignupModal;
