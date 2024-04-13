"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Footer, Header } from "./components";
import {
	DiscordIcon,
	SectionOneImage,
	gridImageOne,
	gridImageThree,
	gridImageTwo,
} from "./assets";

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
				<section className={styles.sectionThree}>
					<span className={styles.headerPills}>our solutions</span>
					<h2 className={styles.headerThree}>
						unlock unprecedented possibilities with cardanoGPT
					</h2>
					<div className={styles.sectionThreeGrid}>
						<div>
							<div>
								<h4 className={styles.headerFour}>
									General Knowledge Discord ChatBot
								</h4>
								<p className={styles.paragraph}>
									CardanoGPT, inspired by Girolamo Cardano, is
									a beta-phase AI chatbot providing real-time
									answers and offering content generation,
									image interpretation, voice recognition and
									more. Exclusive access for CGI token holders
									(meeting threshold).
								</p>
								<a href="#" className="anchor-link">
									<Button variant="A">
										Join Girolamo Beta Testers
									</Button>
								</a>
							</div>
							<div>
								<Image
									src={gridImageOne}
									width={156.33}
									height={235}
									alt="grid-image-one"
									placeholder="blur"
								/>
							</div>
						</div>
						<div>
							<div>
								<h4 className={styles.headerFour}>
									Custom Bot Development
								</h4>
								<p className={styles.paragraph}>
									CardanoGPT builds smart chatbots for
									businesses. These chatbots can handle tasks
									like social media management, customer
									service, and data analysis.
								</p>
								<a href="#" className="anchor-link">
									<Button variant="A">Learn more</Button>
								</a>
							</div>
							<div>
								<Image
									src={gridImageTwo}
									width={171}
									height={310}
									alt="grid-image-two"
									placeholder="blur"
								/>
							</div>
						</div>
						<div>
							<div>
								<h4 className={styles.headerFour}>X Chatbot</h4>
								<p className={styles.paragraph}>
									AskGirolamo is your one-stop shop for
									Cardano info on X. Get instant answers and
									stay updated on the Cardano ecosystem, all
									within X.
								</p>
								<a href="#" className="anchor-link">
									<Button variant="A">Learn more</Button>
								</a>
							</div>
							<div>
								<Image
									src={gridImageThree}
									width={161}
									height={235}
									alt="grid-image-three"
									placeholder="blur"
								/>
							</div>
						</div>
						<div>
							<div>
								<h4 className={styles.headerFour}>
									AI Powered Writing Platform
								</h4>
								<p className={styles.paragraph}>
									CardanoGPT redefines content creation. Our
									AI writing platform (first on blockchain!)
									empowers bloggers, marketers, and businesses
									to craft high-impact content.
								</p>
								<a href="#" className="anchor-link">
									<Button variant="A">Learn more</Button>
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
