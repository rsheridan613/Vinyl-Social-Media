import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import Login from "../Login/Login";
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

const RegistrationModal = ({ props }) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
			<Box sx={modalStyle}>{props.name == "Login" ? <Login /> : <Signup />}</Box>
		</Modal>
	);
};
export default RegistrationModal;
