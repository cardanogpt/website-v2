"use client";

import { useEffect } from "react";

import styles from "./page.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Footer, Header } from "./components";
import { DiscordIcon, SectionOneImage } from "./assets";

export default function Home() {
	// initialize animation
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<Header />
			<main className={styles.main}>
				<section className={styles.sectionOne}>
					<div>
						<h1>harnessing the potential of AI </h1>
						<p>
							to drive web3 initiatives and communities forward.
						</p>
						<div className={styles.sectionOneButtons}>
							<Button variant="B">Buy CGI</Button>
							<Button variant="C">
								<DiscordIcon />
								<span>Join Discord</span>
							</Button>
						</div>
					</div>
					<SectionOneImage className={styles.sectionOneImage} />
				</section>
			</main>
			<Footer />
		</>
	);
}
