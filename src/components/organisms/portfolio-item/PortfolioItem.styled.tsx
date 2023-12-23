import { styled, css } from 'styled-components';

import { SquareButton } from '@/components/atoms/button/Button.styled';
import { portfolioItemSize } from '@/styles/token';
import { Section } from '@/types/portfolio';

export const PortfolioItemLayout = styled.div<{type: Section}>`
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

export const SliderContainer = styled.div`
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

export const PrevArrow = styled(SquareButton)<{$current: number}>`
	display: none;
	visibility: ${(props) => props.$current === 0 ? 'hidden' : 'visible'};
	cursor: pointer;
`;

export const NextArrow = styled(SquareButton)<{$current: number, $last:number}>`
	display: none;
	visibility: ${(props) => props.$current === props.$last ? 'hidden' : 'visible'};
	cursor: pointer;
`;