import { styled, css } from 'styled-components';

import { portfolioItemSize as sizes } from '@/styles/token';
import { Section } from '@/types/portfolio';

export const PortfolioItemContainer = styled.div<{type: Section}>`
	width: 100%;
	aspect-ratio: ${(props) => sizes[props.type].aspectRatio};

	position: relative;
	padding: 1.4em 1.5em 1.4em 1.5em;

	background-color: lightgray;
	border-radius: 1.8rem;
	overflow: auto;
	overflow: hidden;
`

export const SliderWrapper = styled.div`
	width: 100%;
	height: 100%;


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

const Arrow = css`
	width: 1rem;
	height: 1rem;
	position: relative;
	z-index: 100;
`;

export const ArrowWrapper = styled.div`
	width: 100%;
	padding: 0 0.5rem 0 0.5rem;

	position: absolute;
	z-index: 100;
	top: 0;
	right: 0;

	display: flex;
	justify-content: space-between;
	top: 50%;
`;

export const PrevArrow = styled.button<{current: number}>`
	${Arrow}
	background-color:red;
	visibility: ${(props) => props.current === 0 ? 'hidden' : 'visible'}
`;

export const NextArrow = styled.button<{current: number, last:number}>`
	${Arrow}
	visibility: ${(props) => props.current === props.last ? 'hidden' : 'visible'}
`;