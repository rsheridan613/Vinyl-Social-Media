import React from "react";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import RegisterButton from "../Buttons/RegistrationButton";
import LoginButton from "../Buttons/LoginButton";

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
      <Grid xs={1}>
        <RegisterButton />
      </Grid>
      <Grid xs={1}>
        <LoginButton />
      </Grid>
    </Grid>
  );
};

export default Footer;
