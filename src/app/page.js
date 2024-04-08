"use client";

import { useEffect } from "react";

import styles from "./page.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "./components";

export default function Home() {
	// initialize animation
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<main></main>
			<Footer />
		</>
	);
}
