import * as React from "react";
import { Typography, CircularProgress, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../../utils/queries";
import UserCard from "./UserCard/UserCard";
const UserFeed = () => {
	const { loading, error, data } = useQuery(QUERY_USERS);
	if (error) {
		return (
			<Grid>
				<Typography color="red">Something Went Wrong!</Typography>
			</Grid>
		);
	}
	if (loading) {
		return (
			<Grid>
				<CircularProgress />
			</Grid>
		);
	}

	const userList = data?.users || [];
	return (
		<Grid container>
			<Paper elevation={2}>
				{loading ? (
					<CircularProgress />
				) : (
					userList.map((user) => {
						return (
							<Grid key={user._id}>
								<UserCard username={user.username} userKey={user._id} postNumber={user.posts.length} />
							</Grid>
						);
					})
				)}
			</Paper>
		</Grid>
	);
};

export default UserFeed;
