import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Home = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { userId: userId },
  });

  const user = data?.me || data?.user || {};
  if (loading) {
    //basic loading bar
    return <div>Loading...</div>;
  }
  console.log(user);
  return (
    <Box elevation={2}>
      <Carousel />
      <Footer />
    </Box>
  );
};

export default Home;
