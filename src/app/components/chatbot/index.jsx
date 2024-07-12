"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import {
	CloseChatIcon,
	MicrophoneIcon,
	MinimizeIcon,
	ScaleIcon,
	SendIcon,
	botImage,
} from "@/app/assets";

const ChatBot = () => {
	useEffect(() => {
		const chatBox = document.querySelector(".chatBox");
		const minimize = document.querySelector(".minimize");
		const scale = document.querySelector(".scale");
		const close = document.querySelector(".close");
		console.log(chatBox, minimize, scale, close);

		minimize.addEventListener("click", () => {
			chatBox.style.height = "150px";
		});
		scale.addEventListener("click", () => {
			chatBox.style.height = "400px";
		});
		close.addEventListener("click", () => {
			chatBox.style.height = "75px";
		});
	}, []);

	return (
		<div className={`${styles.chatBox} chatBox`}>
			<div className={styles.topBar}>
				<MinimizeIcon className="minimize" />
				<ScaleIcon className="scale" />
				<CloseChatIcon className="close" />
			</div>
			<div className={styles.chatCont}>
				<div className={styles.chatBoxTitle}>
					<Image
						src={botImage}
						width={20}
						height={20}
						alt="Captain Lace"
					/>
					<h4>Chat with Captain Lace</h4>
				</div>
				<div className={styles.chatHistory}></div>
				<div className={styles.chatBoxControls}>
					<span className={styles.record}>
						<MicrophoneIcon />
					</span>
					<input
						className={styles.input}
						type="text"
						placeholder="Type a message..."
					/>
					<button className={styles.button}>
						<SendIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatBot;
