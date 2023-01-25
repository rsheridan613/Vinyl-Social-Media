import React from "react";
// import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SignupContainer from "./SignupContainer";

const SignupModal = () => {
	return (
		<Box elevation={2} sx={{ flexGrow: 1 }}>
			<Typography variant="h1" component="h1">
				Signup
			</Typography>
			<Grid container>
				<SignupContainer />
			</Grid>
		</Box>
	);
};

export default SignupModal;
