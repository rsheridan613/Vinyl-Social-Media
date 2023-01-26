import * as React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER_POSTS } from "../../utils/queries";
import { Card, CardActions, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const NoteFeed = () => {
	const { loading, error, data } = useQuery(QUERY_USER_POSTS);

	if (loading) {
		console.log("loading..", loading);
	}
	if (error) {
		console.log("error", error);
	}
	if (data) {
		console.log("data", data);
	}
	const postList = data?.userPosts || [];
	return (
		<Grid container>
			<Typography variant="h3" component="h3">
				User posts
			</Typography>
			<Grid container xs={12}>
				{loading ? (
					<div>Loading...</div>
				) : (
					postList.map((post) => {
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
