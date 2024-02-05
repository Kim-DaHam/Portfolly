import { css } from "styled-components";

/** Shapes */
const square = css`
	border-radius: 1rem;
`;

const round = css`
  border-radius: 9999px;
`;

/** Sizes */
const full = css`
	width: 100%;
`;

const fit = css`
	width: fit-content;
`;

const large = css`
	width: 13rem;
`;

const medium = css`
	width: 9rem;
`;

const small = css`
	width: 5rem,;
`;

/** Colors */
const white = css`
	color: #111111;
	border: 0px;
  background-color: #FFFFFF;
	transition: all 0.2s;
	&:hover {
		background-color: #f5f5f5;
	}
`;

const black = css`
	color: #FFFFFF;
	border: 0px;
  background-color: #111111;
	&:hover {
		background-color: #1d1d1d;
	}
`;

const gray = css`
	color: #111111;
	border: 0px;
  background-color: #f3f3f3;
	transition: all 0.2s;
	&:hover {
		background-color: #d7d7d7;
	}
`;

const transparent = css`
	color: #111111;
	border: 1px solid #f0f0f0;
  background-color: transparent;
	transition: all 0.2s;
	&:hover {
		background-color: #f5f5f5;
	}
`;

export const shapes = { square, round };
export const sizes = { full, fit, large, medium, small };
export const colors = { white, black, gray, transparent };