import { styled, css } from 'styled-components';

import { portfolioItemSize } from '@/styles/token';
import { Section } from '@/types/portfolio';

export const PortfolioItemContainer = styled.div<{type: Section}>`
	width: 100%;
	aspect-ratio: ${(props) => portfolioItemSize[props.type].aspectRatio};

	position: 'relative';

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
`

export const SliderBox = styled.div`
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

	overflow: hidden;

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

const Arrow = css`
	width: 1rem;
	height: 1rem;

	display: none;

	cursor: pointer;
`;

export const PrevArrow = styled.button<{current: number}>`
	${Arrow}
	visibility: ${(props) => props.current === 0 ? 'hidden' : 'visible'};
`;

export const NextArrow = styled.button<{current: number, last:number}>`
	${Arrow}
	visibility: ${(props) => props.current === props.last ? 'hidden' : 'visible'};
`;