import { styled } from "styled-components";

import { ButtonStyle } from "@/components/atoms/index";

export const Wrapper = styled.section`
	width: 100%;
	height: 3rem;

	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const Divider = styled.div`
	width: 1px;
	height: 2.2rem;

	background-color: lightgray;
`;

export const CategoryBox = styled.div`
	width: 100%;
	height: inherit;

	display: flex;
	align-items: center;
	flex-grow: 1;
	gap: 1rem;

	position: relative;
	overflow: hidden;
`;

export const Slider = styled.ul`
	width: fit-content;
	height: 100%;

	display: flex;
	flex-wrap: nowrap;
	gap: 0.5rem;

	position: absolute;
	left: 0;
	transition: left 0.2s ease-out;
`;

export const PrevArrow = styled(ButtonStyle)<{$showPrevArrow: boolean}>`
	position: absolute;
	z-index: 100;
	top: 0;
	left: 0;

	cursor: pointer;
	visibility: ${(props) => props.$showPrevArrow ? 'visible' : 'hidden'};
`;

export const NextArrow = styled(ButtonStyle)<{$showNextArrow: boolean}>`
	position: absolute;
	z-index: 100;
	top: 0;
	right: 0;

	cursor: pointer;
	visibility: ${(props) => props.$showNextArrow ? 'visible' : 'hidden'};
`;

export const CategoryBoxDiv = styled.label`
	display: inline;
	position: relative;
`

export const SliderBox = styled.label`
	display: inline;
	position: relative;
`