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
			const response = await fetch("/api", {
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
    <div id="contact" className="flex w-5/12 flex-col gap-2" ref={contactRef}>
			<div className="card">
				<div className="text-2xl w-fit border-b-2 border-fuchsia-400 mb-4">
					<h2>Contact</h2>
				</div>
				<div>
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col gap-3 items-center w-full">
							<h2 className="left-0 w-4/5">名前</h2>
							<input className="w-4/5 rounded" type="text" placeholder="名前" value={name} onChange={e => setName(e.target.value)} required/>
							<h2 className="left-0 w-4/5">メールアドレス</h2>
							<input className="w-4/5 rounded" type="email" placeholder="メールアドレス" value={email} onChange={e => setEmail(e.target.value)} required/>
							<h2 className="left-0 w-4/5">お問い合わせ内容</h2>
							<textarea className="w-4/5 rounded h-32" placeholder="内容" value={message} onChange={e => setMessage(e.target.value)} required/>
							<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" type="submit">送信</button>
						</div>
					</form>
				</div>
			</div>
		</div>
  )
}

export default Contact;