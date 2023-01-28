import { Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@apollo/client";

import FriendCard from "./FriendCard/FriendCard";

import { QUERY_ME } from "../../utils/queries";

const FriendList = () => {
  //  query me to grab friends
  const { loading, error, data } = useQuery(QUERY_ME);

  let friends = data?.me.friends || [];

  return (
    <Typography>
      <Grid container>
        <Paper>
          {friends.map((user) => {
            return (
              <Grid key={user._id}>
                <FriendCard username={user.username} userKey={user._id} />
              </Grid>
            );
          })}
        </Paper>
      </Grid>
    </Typography>
  );
};

export default FriendList;
