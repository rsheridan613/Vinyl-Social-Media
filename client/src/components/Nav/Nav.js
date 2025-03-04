import React from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import RegisterButton from "../Buttons/RegistrationButton";
import LoginButton from "../Buttons/LoginButton";
import logo from "../../assets/logocropped.png";
const Nav = () => {
	return (
		<Grid container sx={{ backgroundColor: "primary.main", mt: 1 }}>
			<Grid xs={7} p={1}>
				<Link to="/">
					<img src={logo} />
				</Link>
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
