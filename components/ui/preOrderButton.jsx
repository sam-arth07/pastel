'use client'
import { Button } from "./button";

const PreOrderButton = ({text}) => {
	return (
		<Button
			onClick={() => {
				return window.open(
					`https://wa.me/+917020739529/?text=${encodeURIComponent(`I'd like to place a pre-order with Pastel:
Item: 
Quantity:
Special Instructions:`)}`,
					"_blank"
				);
			}}>{text}</Button>
	);
};

export default PreOrderButton;
