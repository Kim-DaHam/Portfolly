import { css } from "styled-components";

/** Types */
const title = css`
	font-size: 2.75rem;
	line-height: 3rem;
	letter-spacing: -.024em;
	font-weight: 600;
`;

const titleSmall = css`
	font-size: 1.5rem;
	line-height: 2rem;
	letter-spacing: -.008em;
	font-weight: 600;
`;

const common = css`
	font-size: 1rem;
	line-height: 1.5rem;
	letter-spacing: -.008em;
	font-weight: 500;
`;

const small = css`
	font-size: 0.875rem;
	line-height: 1.25rem;
	letter-spacing: -.024em;
	font-weight: 400;
`;

const label = css`
	font-size: 1rem;
	line-height: 1.5rme;
	letter-spacing: -.008em;
	font-weight: 500;
`;

/** Colors */
const black = css`
	color: #111111;
`;

const gray = css`
  color: #747474;
`;

const lightgray = css`
  color: #989898;
`;

const white = css`
	color: white;
`;

export const types = { title, titleSmall, common, small, label };
export const colors = { black, gray, lightgray, white };