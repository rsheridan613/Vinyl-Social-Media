import React from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import NoteFeed from "../components/NoteFeed/NoteFeed";
import NoteForm from "../components/NoteForm/NoteForm";
import UserFeed from "../components/UserFeed/UserFeed";
import FriendList from "../components/FriendList/FriendList";

const Dashboard = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Typography variant="h1" component="h1">
          Dashboard
        </Typography>
      </Grid>
      <Grid container ws={3}>
        <FriendList />
      </Grid>
      <Grid container xs={6}>
        <NoteForm />
        <NoteFeed />
      </Grid>
      <Grid container xs={3}>
        <UserFeed />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
