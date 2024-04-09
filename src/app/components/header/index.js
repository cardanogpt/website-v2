"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { Close, Hamburger, logo } from "@/app/assets";
import { Button } from "../button";
import Link from "next/link";

export const Header = () => {
	const [showMobile, setShowMobile] = useState(false);

	return (
		<>
			<header className={styles.header}>
				<a href="#">
					<Image src={logo} className={styles.logo} alt="logo" />
				</a>
				<nav>
					<ul>
						<li>
							<Link href="#solutions">Solutions</Link>
						</li>
						<li>
							<Link href="#features">Features</Link>
						</li>
						<li>
							<Link href="#ecosystem">Ecosystem</Link>
						</li>
						<li>
							<Link href="#docs">Docs</Link>
						</li>
					</ul>
				</nav>
				<a href="#" className={`anchor-link`} target="_blank">
					<Button variant="C">Buy CGI</Button>
				</a>
			</header>
			<div className={styles.headerSmallContainer}>
				<header className={styles.headerSmall}>
					<a href="#">
						<Image src={logo} className={styles.logo} alt="logo" />
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
							<Link href="#solutions">Solutions</Link>
						</li>
						<li onClick={() => setShowMobile(false)}>
							<Link href="#features">Features</Link>
						</li>
						<li onClick={() => setShowMobile(false)}>
							<Link href="#ecosystem">Ecosystem</Link>
						</li>
						<li onClick={() => setShowMobile(false)}>
							<Link href="#docs">Docs</Link>
						</li>
					</ul>
					<a href="#" className={`anchor-link`} target="_blank">
						<Button variant="C">Buy CGI</Button>
					</a>
				</nav>
			</div>
		</>
	);
};
