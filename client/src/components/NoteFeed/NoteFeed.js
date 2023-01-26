import * as React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../../utils/queries";
import { Card, CardActions, CardContent, Typography, Box } from "@mui/material";
import LikeButton from "../Buttons/LikeButton";
import Grid from "@mui/material/Unstable_Grid2";
import Auth from "../../utils/auth";

const NoteFeed = () => {
	const user = Auth.getProfile().data.username;

	const { loading, error, data } = useQuery(QUERY_POSTS, { variables: { username: user } });
	console.log(data);
	if (error) {
		console.log("error", error);
	}

	const postList = data?.posts || [];
	return (
		<Grid container>
			<Typography variant="h3" component="h3">
				User posts ~~~ number: {postList.length}
			</Typography>
			<Grid container xs={12}>
				{loading ? (
					<div>Loading...</div>
				) : (
					postList.map((post) => {
						console.log(post);
						return (
							<Card key={post._id} sx={{ m: 1, p: 3, width: "50%" }}>
								<CardContent>
									<Typography variant="h3" component="h3">
										{post.postText}
									</Typography>
								</CardContent>
								<CardActions>
									<Grid container xs={12}>
										<Box xs={6}>~{post.postAuthor}</Box>
										{/* <Box xs={6}>{post.createdAt}</Box> */}
									</Grid>
								</CardActions>
							</Card>
						);
					})
				)}
			</Grid>
		</Grid>
	);
};

export default NoteFeed;
