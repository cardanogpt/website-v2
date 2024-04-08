import React from "react";
import styles from "./styles.module.css";
import { Button } from "../button";
import { DiscordIcon, MediumIcon, TelegramIcon, XIcon } from "@/app/assets";

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
							href="mailto:contact@cardanogpt.ai"
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
									<a href="#" target="_blank">
										Learn the concept
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										Documentation
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										Blog
									</a>
								</li>
							</ul>
							<ul>
								<li>
									<a href="#" target="_blank">
										How to buy CGI
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										How to Farm CGI
									</a>
								</li>
								<li>
									<a href="#" target="_blank">
										Disclaimer
									</a>
								</li>
							</ul>
						</div>
						<div className={styles.copyRightAndSocials}>
							<p>2024 CardanoGPT. All Right Reserved </p>
							<div>
								<a href="" target="_blank">
									<XIcon />
								</a>
								<a href="" target="_blank">
									<TelegramIcon />
								</a>
								<a href="" target="_blank">
									<DiscordIcon />
								</a>
								<a href="" target="_blank">
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
