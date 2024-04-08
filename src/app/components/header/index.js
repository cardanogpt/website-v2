"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import { Close, Hamburger, LogoFull } from "@/app/assets";
import { Button } from "../button";
import Link from "next/link";

export const Header = () => {
	const [showMobile, setShowMobile] = useState(false);

	return (
		<>
			<header className={styles.header}>
				<a href="#">
					<LogoFull className={styles.logo} />
				</a>
				<nav>
					<ul>
						<li>
							<Link href="#about">About</Link>
						</li>
						<li>
							<Link href="#how-it-works">How it works</Link>
						</li>
						<li>
							<Link href="#faq">FAQ</Link>
						</li>
					</ul>
				</nav>
				<a href="#" className={`anchor-link`} target="_blank">
					<Button variant="C">Get Started</Button>
				</a>
			</header>
			<div className={styles.headerSmallContainer}>
				<header className={styles.headerSmall}>
					<a href="#">
						<LogoFull className={styles.logoSmall} />
					</a>
					<button
						className={styles.toggle}
						onClick={() => setShowMobile(!showMobile)}
					>
						{!showMobile ? <Hamburger /> : <Close />}
					</button>
				</header>
				<nav className={showMobile ? styles.showNav : ""}>
					<ul>
						<li onClick={() => setShowMobile(false)}>
							<Link href="#about">About</Link>
						</li>
						<li onClick={() => setShowMobile(false)}>
							<Link href="#how-it-works">How it works</Link>
						</li>
						<li onClick={() => setShowMobile(false)}>
							<Link href="#faq">FAQ</Link>
						</li>
					</ul>
					<a href="#" className={`anchor-link`} target="_blank">
						<Button variant="C">Get Started</Button>
					</a>
				</nav>
			</div>
		</>
	);
};
