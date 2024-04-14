import React from "react";
import styled from "@emotion/styled";
import { Spring } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";

const SlideContainer = styled.div`
	position: absolute;
	top: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transform-origin: 50% 50%;
	z-index: 10;
`;

const SlideCard = styled.div`
	position: relative;
	align-items: center;
	justify-content: center;
	transform-origin: 50% 50%;
`;

function Slide({
	content,
	offsetRadius,
	index,
	animationConfig,
	moveSlide,
	delta,
	down,
}) {
	const offsetFromMiddle = index - offsetRadius;
	const totalPresentables = 2 * offsetRadius + 1;

	const translateYoffset =
		50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
	let translateY = -50;

	if (offsetRadius !== 0) {
		if (index === 0) {
			translateY = 0;
		} else if (index === totalPresentables - 1) {
			translateY = -100;
		}
	}

	if (offsetFromMiddle === 0 && down) {
		translateY += delta[1] / (offsetRadius + 1);
		if (translateY > -40) {
			moveSlide(-1);
		}
		if (translateY < -100) {
			moveSlide(1);
		}
	}
	if (offsetFromMiddle > 0) {
		translateY += translateYoffset;
	} else if (offsetFromMiddle < 0) {
		translateY -= translateYoffset;
	}

	return (
		<Spring to={styles[index]} config={animationConfig}>
			{(style) => (
				<SlideContainer
					style={{
						...style,
						zIndex: Math.abs(Math.abs(offsetFromMiddle) - 10),
					}}
				>
					<SlideCard onClick={() => moveSlide(offsetFromMiddle)}>
						{content}
					</SlideCard>
				</SlideContainer>
			)}
		</Spring>
	);
}

const styles = {
	0: {
		transform: "translateX(0%) translateY(-80%) scale(0.75)",
		bottom: "0",
	},
	1: {
		transform: "translateX(0%) translateY(0%) scale(1)",
		bottom: "0",
	},
	2: {
		transform: "translateX(0%) translateY(-50%) scale(0.8)",
		bottom: "0",
	},
};
export default withGesture()(Slide);
