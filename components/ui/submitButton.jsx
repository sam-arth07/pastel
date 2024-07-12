'use client'

import { Button } from "./button";

export default function SubmitButton() {
	return (
		<Button
			type="submit"
			className="w-full"
			onClick={async (e) => {
				const formData = new FormData(e.target.closest("form"));
				const name = formData.get("name");
				const email = formData.get("email");
				const message = formData.get("message");
				const whatsappMessage = `
    New message from your website:
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;
				const whatsappUrl = `https://wa.me/+917020739529/?text=${encodeURIComponent(
					whatsappMessage
				)}`;
				window.open(whatsappUrl, "_blank");
			}}>
			Submit
		</Button>
	);
}
