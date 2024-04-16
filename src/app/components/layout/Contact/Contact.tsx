'use client'

import { ContactProps } from "@/types/Contact.tytpes";
import { useState } from "react";

const Contact:React.FC<ContactProps> = ({contactRef}: ContactProps) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		try {
			const response = await fetch("http://localhost:3000/api", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({name, email, message})
			});

			if(!response.ok) {
				throw new Error("Faild to send email");
			}

			const result = await response.json();
			alert("Email sent successfully!");
			setName("");
			setEmail("");
			setMessage("");

		} catch (error:any) {
			alert("Error sending Email: " + error.message);
		}
	}


  return (
    <div id="inquire" className="flex w-5/12 flex-col gap-2" ref={contactRef}>
			<div className="text-2xl w-fit border-b-2">
				<h2>Contact</h2>
			</div>
			<div className="flex flex-col gap-1">
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="名前" value={name} onChange={e => setName(e.target.value)} required/>
					<input type="email" placeholder="メールアドレス" value={email} onChange={e => setEmail(e.target.value)} required/>
					<textarea placeholder="内容" value={message} onChange={e => setMessage(e.target.value)} required/>
					<button type="submit">送信</button>
				</form>
			</div>
		</div>
  )
}

export default Contact;