import React from "react";
import { Typography, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import RegisterButton from "../Buttons/RegistrationButton";
import LoginButton from "../Buttons/LoginButton";
const Nav = () => {
	return (
		<Grid container sx={{ backgroundColor: "primary.main", mt: 1 }}>
			<Grid xs={7}>
				<Typography variant="h3" component="h1" color="#F2F7F2">
					VINYL
				</Typography>
			</Grid>
			<Grid xs={3}>
				<TextField id="navSearch" label="Search" variant="outlined" color="background" />
			</Grid>
			<Grid xs={1}>
				<RegisterButton />
			</Grid>
			<Grid xs={1}>
				<LoginButton />
			</Grid>
		</Grid>
	);
};

export default Nav;
