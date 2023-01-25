import { Typography, Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import Login from "../Login/Login";

const modalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};
const LoginButton = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button onClick={handleOpen}>
				<Typography variant="button" color="#fff">
					Login
				</Typography>
			</Button>
			<Modal open={open} onClose={handleClose} aria-labelledby="Registration" aria-describedby="Registration">
				<Box sx={modalStyle}>
					<Login isOpen={setOpen} />
				</Box>
			</Modal>
		</>
	);
};

export default LoginButton;
