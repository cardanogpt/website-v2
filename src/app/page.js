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
				<section className={styles.sectionTwo}>
					<div className={styles.sectionTwoContent}>
						<span className={styles.headerPills}>our mission</span>
						<h2 className={styles.headerTwo}>
							dedicated to pioneering the integration of
							artificial intelligence on the blockchain
						</h2>
						<p className={styles.paragraph}>
							Our mission is to develop and deploy cutting-edge AI
							solutions that enhance the web3 ecosystem, providing
							accessible, secure, and intelligent tools that drive
							growth, foster community engagement, and pave the
							way for a future where technology and human
							creativity to flourish together.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
