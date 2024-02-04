import { css } from "styled-components";
import type { RuleSet } from "styled-components";

import { FontColor, FontSize } from "@/types";

/** Types */
const headingMedium = css`
	font-size: 3.5rem;
	line-height: 4rem;
	letter-spacing: -.024em;
	font-weight: 600;
`;

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

const bodyLarge = css`
	font-size: 1.25rem;
	line-height: 1.75rem;
	letter-spacing: -.024em;
	font-weight: 400;
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

export const types: {[key in FontSize]: RuleSet<object>} = { headingMedium, title, titleSmall, bodyLarge, common, small, label };
export const colors: {[key in FontColor]: RuleSet<object>} = { black, gray, lightgray, white };