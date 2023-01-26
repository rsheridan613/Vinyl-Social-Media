import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Footer = () => {
	return (
		<Grid
			container
			sx={{
				backgroundColor: "primary.main",
				justifyContent: "center",
				py: 1,
				mt: 3,
			}}
			columns={{ xs: 4, sm: 8, md: 12 }}
		>
			<Grid xs={2}>
				<Button variant="contained" disableElevation>
					Log In
				</Button>
			</Grid>
			<Grid xs={2}>
				<Button variant="contained" disableElevation>
					Sign Up
				</Button>
			</Grid>
		</Grid>
	);
};

export default Footer;
