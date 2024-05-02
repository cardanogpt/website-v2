"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Footer, Header, VerticalCarousel } from "./components";
import {
	BUY_CGI,
	DISCORD_LINK,
	DOCS_LINK,
	DiscordIcon,
	EcoSystemStats1,
	EcoSystemStats2,
	EcoSystemStats3,
	EcoSystemStats4,
	EcoSystemStats5,
	EcoSystemStats6,
	EcoSystemStats7,
	EcoSystemStats8,
	EcoSystemStats9,
	FARM_CGI,
	LineOne,
	MEDIUM_LINK,
	SectionOneImage,
	UnderLine,
	bitcoinist,
	businessInsider,
	cryptoslate,
	entrepreneur,
	gridImageOne,
	gridImageThree,
	gridImageTwo,
	thedailyhodl,
	utoday,
} from "./assets";
import { config } from "react-spring";
import CountUp from "react-countup";

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
						<h1 data-aos="fade-up">
							harnessing the potential of AI{" "}
						</h1>
						<p>
							to drive web3 initiatives and communities forward.
						</p>
						<div className={styles.sectionOneButtons}>
							<a
								href={BUY_CGI}
								target="_blank"
								className="anchor-link"
							>
								<Button variant="B">Buy CGI</Button>
							</a>
							<a
								href={DISCORD_LINK}
								target="_blank"
								className="anchor-link"
							>
								<Button variant="C">
									<DiscordIcon />
									<span>Join Discord</span>
								</Button>
							</a>
						</div>
					</div>
					<SectionOneImage
						className={styles.sectionOneImage}
						data-aos="zoom-in"
					/>
				</section>
				<section className={styles.sectionTwo}>
					<div className={styles.sectionTwoContent}>
						<span className={styles.headerPills}>our mission</span>
						<h2 className={styles.headerTwo} data-aos="fade-up">
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
				<section className={styles.sectionThree} id="solutions">
					<span className={styles.headerPills}>our solutions</span>
					<h3 className={styles.headerThree} data-aos="fade-up">
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
								<a
									href={`${MEDIUM_LINK}/cardanogpt-has-successfully-deployed-its-generative-discord-chatbot-girolamo-on-beta-66454eef6b3a`}
									target="_blank"
									className="anchor-link"
								>
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
							<a
								href={`${MEDIUM_LINK}/cardanogpt-has-successfully-deployed-its-generative-discord-chatbot-girolamo-on-beta-66454eef6b3a`}
								target="_blank"
								className="anchor-link"
							>
								<Button variant="A">
									Join Girolamo Beta Testers
								</Button>
							</a>
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
								<a
									href={`${DOCS_LINK}/custom-bot-development`}
									target="_blank"
									className="anchor-link"
								>
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
							<a
								href={`${DOCS_LINK}/custom-bot-development`}
								target="_blank"
								className="anchor-link"
							>
								<Button variant="A">Learn more</Button>
							</a>
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
								<a
									href={`${MEDIUM_LINK}/cardanogpt-successfully-launches-the-first-internet-enabled-cardano-focused-chatbot-on-x-72f4fb3ef0eb`}
									target="_blank"
									className="anchor-link"
								>
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
							<a
								href={`${MEDIUM_LINK}/cardanogpt-successfully-launches-the-first-internet-enabled-cardano-focused-chatbot-on-x-72f4fb3ef0eb`}
								target="_blank"
								className="anchor-link"
							>
								<Button variant="A">Learn more</Button>
							</a>
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
								<a
									href={`${MEDIUM_LINK}/unveiling-the-future-of-content-creation-cardanogpt-ai-powered-writing-platform-on-web3-0-bae569c9d6e4`}
									target="_blank"
									className="anchor-link"
								>
									<Button variant="A">Learn more</Button>
								</a>
							</div>
							<a
								href={`${MEDIUM_LINK}/unveiling-the-future-of-content-creation-cardanogpt-ai-powered-writing-platform-on-web3-0-bae569c9d6e4`}
								target="_blank"
								className="anchor-link"
							>
								<Button variant="A">Learn more</Button>
							</a>
						</div>
					</div>
				</section>
				<section className={styles.sectionFour} id="ecosystem">
					<div className={styles.sectionFourTextContainer}>
						<span className={styles.headerPills}>
							Our ecosystem
						</span>
						<h3 className={styles.headerThree} data-aos="fade-up">
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
									<a
										href={FARM_CGI}
										target="_blank"
										className="anchor-link"
									>
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
				<section className={styles.sectionFive}>
					<div className={styles.sectionFiveA}>
						<span className={styles.headerPills}>CGI Token</span>
						<h3 className={styles.headerThree} data-aos="fade-up">
							Powering the CardanoGPT Ecosystem
						</h3>
						<div className={styles.statsHeader}>
							<div>
								<div>
									<h2>CGI Total Supply</h2>
									<h1>
										<CountUp
											start={1}
											end={10}
											duration={3}
											enableScrollSpy={true}
										/>{" "}
										Million
									</h1>
								</div>
								<div
									className={
										styles.statsHeaderSectionOnePartSecondDiv
									}
								>
									<h2>Burnt $CGI</h2>
									<h1>
										{" "}
										<CountUp
											start={1}
											end={5}
											duration={3}
											enableScrollSpy={true}
										/>{" "}
										Million
									</h1>
								</div>
							</div>
							<div className={styles.statsHeaderSmallGrid}>
								<div>
									<h4>Token Name</h4>
									<h3>CardanoGPT</h3>
								</div>
								<div>
									<h4>Ticker</h4>
									<h3>$CGI</h3>
								</div>
								<div>
									<h4>Blockchain</h4>
									<h3>Cardano</h3>
								</div>
								<div>
									<h4>Burnt $CGI</h4>
									<h3>
										{" "}
										<CountUp
											start={1}
											end={5}
											duration={3}
											enableScrollSpy={true}
										/>{" "}
										Million
									</h3>
								</div>
								<div>
									<h4>Policy ID</h4>
									<h3>
										2d587111358801114f04df83dc0015d
										<br />
										e0a740b462b75cce5170fc935
									</h3>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.sectionFiveB}>
						{ecosystemStats.map(
							({ name, percentage, Svg }, index) => (
								<div
									key={name}
									className={styles.ecosystemStatsCard}
								>
									<h5>
										<CountUp
											start={1}
											end={percentage}
											duration={3}
											delay={index}
											suffix="%"
											enableScrollSpy={true}
										/>
									</h5>
									<h6>{name}</h6>
									<Svg />
								</div>
							)
						)}
					</div>
					<div>
						<a
							href={`${DOCS_LINK}/tokenomics-and-distribution`}
							target="_blank"
							className="anchor-link"
						>
							<Button variant="A">
								Dive into our Tokenomics
							</Button>
						</a>
					</div>
				</section>
				<section className={styles.sectionSix}>
					<div className={styles.partners}>
						<h4>
							CardanoGPT <span>on the media</span> and{" "}
							<span>partners with</span>
						</h4>
						<UnderLine />
						<div className={styles.partnersImage}>
							<a
								href="https://bitcoinist.com/top-5-cardano-projects-to-look-out-for-in-2023/"
								target="_blank"
							>
								<Image
									src={bitcoinist}
									alt="bitcoinist.png"
									placeholder="blur"
									width={81}
									height={41}
									data-aos="fade-down"
									data-aos-easing="ease-in-out"
									data-aos-delay="50"
								/>
							</a>
							<a
								href="https://markets.businessinsider.com/news/stocks/cardanogpt-an-innovative-cardano-project-looking-to-utilize-artificial-intelligence-to-increase-productivity-cardano-projects-1032531384"
								target="_blank"
							>
								<Image
									src={businessInsider}
									alt="businessInsider.png"
									placeholder="blur"
									width={85}
									height={41}
									data-aos="fade-down"
									data-aos-easing="ease-in-out"
									data-aos-delay="150"
								/>
							</a>
							<a
								href="https://cryptoslate.com/cardano-enters-beta-test-phase-for-new-blockchain-based-ai-chat-bot-girolamo/"
								target="_blank"
							>
								<Image
									src={cryptoslate}
									alt="cryptoslate.png"
									placeholder="blur"
									width={114}
									height={41}
									data-aos="fade-down"
									data-aos-easing="ease-in-out"
									data-aos-delay="250"
								/>
							</a>
							<a
								href="https://u.today/cardano-makes-ai-progress-with-first-internet-generative-chatbot"
								target="_blank"
							>
								<Image
									src={utoday}
									alt="utoday.png"
									placeholder="blur"
									width={155}
									height={41}
									data-aos="fade-down"
									data-aos-easing="ease-in-out"
									data-aos-delay="350"
								/>
							</a>
							<a
								href="https://dailyhodl.com/2023/11/27/new-artificial-intelligence-ai-powered-chatbot-girolamo-launches-beta-phase-on-cardano-blockchain/"
								target="_blank"
							>
								<Image
									src={thedailyhodl}
									alt="thedailyhodl.png"
									placeholder="blur"
									width={247}
									height={41}
									data-aos="fade-down"
									data-aos-easing="ease-in-out"
									data-aos-delay="450"
								/>
							</a>
							<a
								href="https://www.entrepreneur.com/en-au/technology/fetchai-singularitynet-ocean-protocol-merger-sets-stage/472690"
								target="_blank"
							>
								<Image
									src={entrepreneur}
									alt="entrepreneur.png"
									placeholder="blur"
									width={136}
									height={41.6}
									data-aos="fade-down"
									data-aos-easing="ease-in-out"
									data-aos-delay="550"
								/>
							</a>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

const ecosystemStats = [
	{ name: "Airdrop", percentage: 6, Svg: EcoSystemStats1 },
	{ name: "Private Sale", percentage: 20, Svg: EcoSystemStats2 },
	{ name: "Presale", percentage: 7.2, Svg: EcoSystemStats3 },
	{ name: "Dex Liquidity", percentage: 6.8, Svg: EcoSystemStats4 },
	{ name: "Farming Rewards", percentage: 20, Svg: EcoSystemStats5 },
	{
		name: "Research & Development (R&D)",
		percentage: 14,
		Svg: EcoSystemStats6,
	},
	{ name: "Marketing", percentage: 10, Svg: EcoSystemStats7 },
	{ name: "Reserve", percentage: 6, Svg: EcoSystemStats8 },
	{ name: "Team & Partnership", percentage: 10, Svg: EcoSystemStats9 },
];

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
					<a href={FARM_CGI} target="_blank" className="anchor-link">
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
					<p
						className={`${styles.paragraph} ${styles.sliderLastElemenFirstParagraph}`}
					>
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
