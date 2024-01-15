import { css } from "styled-components";

/** Shapes */
const square = css`
	border-radius: 1em;
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
  background-color: #FFFFFF;
	&:hover {
		background-color: #f3f3f3;
	}
	color: #111111;
	border: 0px;
`;

const black = css`
  background-color: #111111;
	&:hover {
		background-color: #1d1d1d;
	}
	color: #FFFFFF;
	border: 0px;
`;

const gray = css`
  background-color: #f3f3f3;
	&:hover {
		background-color: #d0d0d0;
	}
	color: #111111;
	border: 0px;
`;

const transparent = css`
  background-color: transparent;
	&:hover {
		background-color: transparent;
	}
	color: #111111;
	border: 0px;
`;

export const shapes = { square, round };
export const sizes = { full, fit, large, medium, small };
export const colors = { white, black, gray, transparent };