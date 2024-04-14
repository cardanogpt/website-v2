"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Footer, Header, VerticalCarousel } from "./components";
import {
	DiscordIcon,
	LineOne,
	SectionOneImage,
	gridImageOne,
	gridImageThree,
	gridImageTwo,
} from "./assets";
import { config } from "react-spring";

const slides = [
	{
		key: 0,
		content: (
			<div className={styles.sectionFourSliderItem}>
				<div>
					<h3 className={styles.headerThree}>
						Governance & Decision-Making
					</h3>
				</div>
				<div>
					<p className={styles.paragraph}>
						CGI token holders who engage in staking are afforded the
						opportunity to actively participate in the governance of
						the CardanoGPT ecosystem. As members of the DAO, they
						are empowered to propose, deliberate upon, and cast
						votes on pivotal changes, enhancements, and strategic
						directions. This functionality underscores the
						importance of community involvement, ensuring that
						stakeholders have a significant voice in determining the
						future trajectory of CardanoGPT.
					</p>
				</div>
			</div>
		),
	},
	{
		key: 1,
		content: (
			<div className={styles.sectionFourSliderItem}>
				<div>
					<h3 className={styles.headerThree}>
						Providing Liquidity and Farming CGI
					</h3>
				</div>
				<div>
					<p className={styles.paragraph}>
						CardanoGPT offers users the opportunity to participate
						in decentralized finance (DeFi) activities. By providing
						liquidity to CGI liquidity pool and engaging in yield
						farming, users can earn rewards in CGI & WRT tokens
						while supporting CGI token liquidity.
					</p>
					<a href="#" className="anchor-link">
						<Button variant="A">Farm CGI on Wingriders</Button>
					</a>
				</div>
			</div>
		),
	},
	{
		key: 2,
		content: (
			<div
				className={styles.sectionFourSliderItem}
				style={{ transform: "translateY(5%)" }}
			>
				<div>
					<h3 className={styles.headerThree}>
						CGI Staking Unlock the Power of Your CGI Tokens
					</h3>
					<p className={styles.paragraph}>
						Join the CardanoGPT staking journey and transform your
						CGI tokens into a key to exclusive benefits within our
						ecosystem. By staking CGI, you not only earn rewards but
						also gain special access and privileges.
					</p>
				</div>
				<div>
					<p className={styles.paragraph}>locked staking mechanism</p>
					<div
						className={
							styles.sectionFourSliderItemBDivBSubTextContainer
						}
					>
						<h6>Transferable staking keys</h6>
						<p className={styles.paragraph}>
							Beyond staking, your stake keys is transferable,
							allowing you to sell on secondary markets and pass
							on the staking benefits to new holders.
						</p>
						<LineOne />
					</div>
					<a href="#" className="anchor-link">
						<Button variant="A">CGI staking coming soon</Button>
					</a>
				</div>
			</div>
		),
	},
];

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
					<h3 className={styles.headerThree}>
						unlock unprecedented possibilities with cardanoGPT
					</h3>
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
				<section className={styles.sectionFour}>
					<div className={styles.sectionFourTextContainer}>
						<span className={styles.headerPills}>
							Our ecosystem
						</span>
						<h3 className={styles.headerThree}>
							At the heart of cardanoGPT ecosystem is the CGI
							token
						</h3>
						<p className={styles.paragraph}>
							The utility token and key to accessing all
							cardanoGPT Al products, staking and inclusive
							CardanoGPT DAO.
						</p>
					</div>
					<div className={styles.sectionFourSliderContainer}>
						<div className={styles.carousel}>
							<VerticalCarousel
								slides={slides}
								offsetRadius={4}
								showNavigation={false}
								animationConfig={config.gentle}
							/>
						</div>
						<div className={styles.carouselTabletAndMobile}>
							<div className={styles.sectionFourSliderItem}>
								<div>
									<h3 className={styles.headerThree}>
										Providing Liquidity and Farming CGI
									</h3>
								</div>
								<div>
									<p className={styles.paragraph}>
										CardanoGPT offers users the opportunity
										to participate in decentralized finance
										(DeFi) activities. By providing
										liquidity to CGI liquidity pool and
										engaging in yield farming, users can
										earn rewards in CGI & WRT tokens while
										supporting CGI token liquidity.
									</p>
									<a href="#" className="anchor-link">
										<Button variant="A">
											Farm CGI on Wingriders
										</Button>
									</a>
								</div>
							</div>
							<div className={styles.sectionFourSliderItem}>
								<div>
									<h3 className={styles.headerThree}>
										CGI Staking Unlock the Power of Your CGI
										Tokens
									</h3>
									<p className={styles.paragraph}>
										Join the CardanoGPT staking journey and
										transform your CGI tokens into a key to
										exclusive benefits within our ecosystem.
										By staking CGI, you not only earn
										rewards but also gain special access and
										privileges.
									</p>
								</div>
								<div>
									<p className={styles.paragraph}>
										locked staking mechanism
									</p>
									<div
										className={
											styles.sectionFourSliderItemBDivBSubTextContainer
										}
									>
										<h6>Transferable staking keys</h6>
										<p className={styles.paragraph}>
											Beyond staking, your stake keys is
											transferable, allowing you to sell
											on secondary markets and pass on the
											staking benefits to new holders.
										</p>
										<LineOne />
									</div>
									<a href="#" className="anchor-link">
										<Button variant="A">
											CGI staking coming soon
										</Button>
									</a>
								</div>
							</div>
							<div className={styles.sectionFourSliderItem}>
								<div>
									<h3 className={styles.headerThree}>
										Governance & Decision-Making
									</h3>
								</div>
								<div>
									<p className={styles.paragraph}>
										CGI token holders who engage in staking
										are afforded the opportunity to actively
										participate in the governance of the
										CardanoGPT ecosystem. As members of the
										DAO, they are empowered to propose,
										deliberate upon, and cast votes on
										pivotal changes, enhancements, and
										strategic directions. This functionality
										underscores the importance of community
										involvement, ensuring that stakeholders
										have a significant voice in determining
										the future trajectory of CardanoGPT.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
