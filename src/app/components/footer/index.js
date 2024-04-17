import React from "react";
import styles from "./styles.module.css";
import { Button } from "../button";
import {
	DISCORD_LINK,
	DiscordIcon,
	EMAIL_LINK,
	MEDIUM_LINK,
	MediumIcon,
	TELEGRAM_LINK,
	TWITTER_LINK,
	TelegramIcon,
	XIcon,
} from "@/app/assets";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.grid}>
					<div>
						<h1>Support &amp; Contact</h1>
						<p>
							Got Queries? Explore our Documentation. For bespoke?
							AI tools development, kindly reach us at
						</p>
						<a
							href={EMAIL_LINK}
							className="anchor-link"
							target="_blank"
						>
							<Button variant="A">Contact@cardanogpt.ai</Button>
						</a>
					</div>
					<div>
						<div className={styles.links}>
							<ul>
								<li>
									<a
										href="https://docs.cardanogpt.ai/learn-the-concepts"
										target="_blank"
									>
										Learn the concept
									</a>
								</li>
								<li>
									<a
										href="https://docs.cardanogpt.ai/"
										target="_blank"
									>
										Documentation
									</a>
								</li>
								<li>
									<a
										href="https://medium.com/@cardanogpt"
										target="_blank"
									>
										Blog
									</a>
								</li>
							</ul>
							<ul>
								<li>
									<a
										href="https://docs.cardanogpt.ai/how-to-buy-cgi"
										target="_blank"
									>
										How to buy CGI
									</a>
								</li>
								<li>
									<a
										href="https://docs.cardanogpt.ai/how-to-farm-cgi"
										target="_blank"
									>
										How to Farm CGI
									</a>
								</li>
								<li>
									<a
										href="https://docs.cardanogpt.ai/disclaimer"
										target="_blank"
									>
										Disclaimer
									</a>
								</li>
							</ul>
						</div>
						<div className={styles.copyRightAndSocials}>
							<p>2024 CardanoGPT. All Right Reserved </p>
							<div>
								<a href={TWITTER_LINK} target="_blank">
									<XIcon />
								</a>
								<a href={TELEGRAM_LINK} target="_blank">
									<TelegramIcon />
								</a>
								<a href={DISCORD_LINK} target="_blank">
									<DiscordIcon />
								</a>
								<a href={MEDIUM_LINK} target="_blank">
									<MediumIcon />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
