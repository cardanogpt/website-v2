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

                    <CountUp
                      start={1}
                      end={10}
                      duration={3}
                      enableScrollSpy={true}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>{" "}
                    Million
                    <CountUp
                      start={1}
                      end={5}
                      duration={3}
                      enableScrollSpy={true}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>{" "}
                    Million
                    <CountUp
                      start={1}
                      end={5}
                      duration={3}
                      enableScrollSpy={true}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>{" "}
                    Million
                  <CountUp
                    start={1}
                    end={percentage}
                    duration={3}
                    delay={index}
                    suffix="%"
                    enableScrollSpy={true}
                  >
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
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
