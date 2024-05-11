'use client'

import { ContactProps } from "@/types/Contact.tytpes";
import { useState } from "react";
import MyButton from "../../elements/Button/Button";
import { motion } from "framer-motion";
import { cardVariants } from "../../common/Animation";

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
    <motion.div id="contact" className="flex w-5/12 flex-col gap-2" ref={contactRef}
			initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
			whileHover={{ 
        scale: 1.1,
        transition: {duration:0.5}
       }}
		>
			<motion.div className="card" variants={cardVariants}>
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
							<MyButton type="submit">送信</MyButton>
						</div>
					</form>
				</div>
			</motion.div>
		</motion.div>
  )
}

export default Contact;