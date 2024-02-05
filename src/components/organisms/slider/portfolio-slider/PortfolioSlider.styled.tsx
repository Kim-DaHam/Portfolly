import styled from 'styled-components';

import { ratios } from '@/styles/portfolio';
import { Section } from '@/types';

import { ButtonStyle } from '@/components';

export const Wrapper = styled.div<{$section: Section}>`
	width: 100%;
	aspect-ratio: ${(props) => ratios[props.$section]};

	position: relative;
	overflow: hidden;

	cursor: pointer;
	border-radius: 1.75rem;
	background-color: #f5f5f5;
	transition: background-color 0.2s;

	&:hover {
		& .slick-dots, & button {
			opacity: 100;
		}
		background-color: #e4e4e4;
	}

	.slick-slider, .slick-list, .slick-track {
		width: 100%;
		height: 100%;
		border-radius: 1.8rem;

		div {
			height: 100%;
		}
	}

	& .slick-dots {
		padding-bottom: 0.2rem;
		transition: opacity 0.1s;
		opacity: 0;
	}

	& .slick-dots > li {
		margin: 0;
		cursor: default;
	}

	& .slick-dots button {
		pointer-events: none;
	}
`;

export const Content = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	padding: 1.4em 1.5em 1.4em 1.5em;
`;

export const SliderItem = styled.div`
	width: 100%;
	height: 100%;

	border-radius: 1.8rem;
	background-color: #e4e4e4;
`;

export const ArrowBox = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	position: absolute;
	z-index: 300;
	top: 50%;
	left: 0;
	transform: translate(0, -50%);

	padding: 0 0.5rem 0 0.5rem;
	background-color: transparent;

	& button {
		width: 2.5rem;
		height: 2.5rem;

		opacity: 0;
		transition: opacity 0.1s;
		cursor: pointer;

		& svg {
			width: fit-content;
			height: fit-content;
		}
	}
`;

export const PrevArrow = styled(ButtonStyle)<{$showPrevArrow: boolean}>`
	visibility: ${(props) => props.$showPrevArrow ? 'visible' : 'hidden'};
`;

export const NextArrow = styled(ButtonStyle)<{$showNextArrow: boolean}>`
	visibility: ${(props) => props.$showNextArrow ? 'visible' : 'hidden'};
`;

export const Video = styled.iframe`
	width: 100%;
	height: 100%;

	object-fit: cover;
`;