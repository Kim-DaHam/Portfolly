import styled from 'styled-components';

import { ButtonStyle } from '@/components/atoms/index';
import { ratios } from '@/styles/portfolio';
import { Section } from '@/types/portfolio';

export const Wrapper = styled.div<{$section: Section}>`
	width: 100%;
	aspect-ratio: ${(props) => ratios[props.$section]};

	position: relative;

	overflow: hidden;

	background-color: lightgray;
	border-radius: 1.8rem;

	& :hover {
		& .slick-dots {
			visibility: visible;
		}

		& button {
			display: inline-block;
		}
	}
`;

export const Content = styled.div`
	width: 100%;
	height: 100%;

	position: relative;

	padding: 1.4em 1.5em 1.4em 1.5em;

	cursor: pointer;

	& .slick-initialized {
		width: 100%;
		height: 100%;

		border-radius: 1.8rem;
		background-color: gray;
	}

	& .slick-list {
		width: 100%;
		height: 100%;

		border-radius: 1.8rem;
	}

	& .slick-track {
		height: 100%;
	}

	& .slick-dots {
		visibility: hidden;
	}

	& .slick-dots > li {
		margin: 0;

		cursor: default;
	}

	& .slick-dots button {
		pointer-events: none;
	}
`;

export const SliderItem = styled.div`
	width: 100%;
	height: 100%;

	border-radius: 1.8rem;
	background-color: gray;
`;

export const ArrowBox = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	position: absolute;
	z-index: 100;
	top: 49%;
	left: 0;

	padding: 0 0.5rem 0 0.5rem;
`;

export const PrevArrow = styled(ButtonStyle)<{$showPrevArrow: boolean}>`
	display: none;
	visibility: ${(props) => props.$showPrevArrow ? 'visible' : 'hidden'};
	cursor: pointer;
`;

export const NextArrow = styled(ButtonStyle)<{$showNextArrow: boolean}>`
	display: none;
	visibility: ${(props) => props.$showNextArrow ? 'visible' : 'hidden'};
	cursor: pointer;
`;