import React from "react";
import styles from "./styles.module.css";

export const Button = ({ children, variant = "A", ...rest }) => {
	return (
		<button
			className={`${styles.button} ${styles[`variant${variant}`]}`}
			{...rest}
		>
			<div>{children}</div>
		</button>
	);
};
