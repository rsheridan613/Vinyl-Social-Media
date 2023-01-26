import React from "react";
import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import NoteFeed from "../components/NoteFeed/NoteFeed";
import NoteForm from "../components/NoteForm/NoteForm";

const Dashboard = () => {
	return (
		<Box elevation={2}>
			<Typography variant="h1" component="h1">
				Dashboard
			</Typography>
			<Grid container xs={12}>
				<NoteForm />
				<NoteFeed />
			</Grid>
		</Box>
	);
};

export default Dashboard;
