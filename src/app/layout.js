import { Albert_Sans } from "next/font/google";
import "./globals.css";
const albertSans = Albert_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "CardanoGPT | Home",
	description:
		"CardanoGPT, harnessing the potential of AI to drive web3 initiatives and communities forward.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={albertSans.className}>{children}</body>
		</html>
	);
}
