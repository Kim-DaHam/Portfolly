import { styled, css } from 'styled-components';

import { portfolioItemSize as sizes } from '@/styles/token';
import { Section } from '@/types/portfolio';

export const PortfolioItemContainer = styled.div<{type: Section}>`
	width: 100%;
	aspect-ratio: ${(props) => sizes[props.type].aspectRatio};

	position: 'relative';

	background-color: lightgray;
	border-radius: 1.8rem;
	overflow: hidden;

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
	cursor: pointer;
	padding: 1.4em 1.5em 1.4em 1.5em;

	position: relative;

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
	border-radius: 1.8rem;

	overflow: hidden;
	background-color: gray;
`;

export const ArrowBox = styled.div`
	width: 100%;
	padding: 0 0.5rem 0 0.5rem;

	position: absolute;
	z-index: 100;
	top: 49%;
	left: 0;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Arrow = css`
	cursor: pointer;
	width: 1rem;
	height: 1rem;
	display: none;
`;

export const PrevArrow = styled.button<{current: number}>`
	${Arrow}
	visibility: ${(props) => props.current === 0 ? 'hidden' : 'visible'}
`;

export const NextArrow = styled.button<{current: number, last:number}>`
${Arrow}
visibility: ${(props) => props.current === props.last ? 'hidden' : 'visible'}
`;