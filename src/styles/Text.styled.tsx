import { css, styled } from "styled-components";

import { bodyFontSize, fontColor, headingFontSize } from "./token";

import { FontColor, FontSize } from "@/types/style";

export const Heading = styled.div<{size: FontSize, color: FontColor}>`
	color: ${(props)=>fontColor[props.color].color};

	${(props)=>{
		const size = props.size;

		return css`
			font-size: ${headingFontSize[size].fontSize};
			line-height: ${headingFontSize[size].lineHeight};
			letter-spacing: ${headingFontSize[size].letterSpacing};
			font-weight: ${headingFontSize[size].fontWeight};
		`;
	}}
`;

export const Text = styled.span<{size: FontSize, color: FontColor}>`
	color: ${(props)=>fontColor[props.color].color};

	${(props)=>{
		const size = props.size;

		return css`
			font-size: ${bodyFontSize[size].fontSize};
			line-height: ${bodyFontSize[size].lineHeight};
			letter-spacing: ${bodyFontSize[size].letterSpacing};
			font-weight: ${bodyFontSize[size].fontWeight};
		`;
	}}
`;

export const Label = styled.label<{color: FontColor}>`
	color: ${(props)=>fontColor[props.color].color};

	font-size: 1rem;
	line-height: 1.5rme;
	letter-spacing: -.008em;
	font-weight: 500;
`;