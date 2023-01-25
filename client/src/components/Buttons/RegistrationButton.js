import { Typography, Modal, Box, Button } from "@mui/material";
import { useState } from "react";
import Signup from "../Register/Register";

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
const RegisterButton = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button onClick={handleOpen}>
				<Typography variant="button" color="#fff">
					Register
				</Typography>
			</Button>
			<Modal open={open} onClose={handleClose} aria-labelledby="Registration" aria-describedby="Registration">
				<Box sx={modalStyle}>
					<Signup />
				</Box>
			</Modal>
		</>
	);
};

export default RegisterButton;
