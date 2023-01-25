import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Container, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const Nav = () => {
	return (
		<Grid container sx={{ backgroundColor: "primary.main", mt: 1 }}>
			<Grid xs={8}>
				<Typography variant="h3" component="h1" color="#F2F7F2">
					VINYL
				</Typography>
			</Grid>
			<Grid xs={2}>
				<TextField id="navSearch" label="Search" variant="outlined" color="background" />
			</Grid>
			<Grid xs={1}>
				<Button>
					<Link to="/signup">Signup</Link>
				</Button>
			</Grid>
			<Grid xs={1}>
				<Button>
					<Link to="/login">Login</Link>
				</Button>
			</Grid>
		</Grid>
	);
};

export default Nav;
