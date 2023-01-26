import React from "react";
import { Paper, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import carouselImg1 from "../../assets/vinyl.img.1.jpg";
import carouselImg2 from "../../assets/vinyl.img.2.jpg";
import carouselImg3 from "../../assets/vinyl.img.3.jpg";

const CarouselComp = () => {
	var items = [
		{
			src: carouselImg1,
			alt: "Probably the most random thing you have ever seen!",
		},
		{
			src: carouselImg2,
			alt: "Probably the most random thing you have ever seen!",
		},
		{
			src: carouselImg3,
			alt: "Probably the most random thing you have ever seen!",
		},
	];

	return (
		<Carousel>
			{items.map((item, i) => (
				<Item key={i} item={item} />
			))}
		</Carousel>
	);
};

function Item(props) {
	return (
		<Paper>
			<img src={props.item.src} alt={props.item.alt} />
			<Button className="CheckButton">Check it out!</Button>
		</Paper>
	);
}

export default CarouselComp;
