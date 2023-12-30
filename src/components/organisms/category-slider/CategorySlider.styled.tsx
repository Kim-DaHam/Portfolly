import { styled } from "styled-components";

import { RoundButton } from "@/components/atoms/button/Button.styled";

export const CategorySliderLayout = styled.section`
	width: 100%;
	height: 3rem;

	display: flex;
	gap: 2rem;

	border: 1px solid black;
`;

export const Divider = styled.div`
	width: 1px;
	height: inherit;

	background-color: lightgray;
`;

export const CategoryBox = styled.div`
	width: 100%;
	height: inherit;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	gap: 1rem;

	position: relative;

	overflow: hidden;
`;

export const CategoryRow = styled.div`
	width: 100%;
	height: 100%;

	position: relative;

	& .slick-initialized {
		width: 100%;
		height: 100%;
	}

	& .slick-slide {
		margin: 0 3px;
	}

	& .slick-list {
		width: 100%;
		height: 100%;

		margin: 0 -3px;
	}

	& .slick-track {
		height: 100%;
	}

	& .slick-active div {
		height: 100%;

		padding: 0 0.2rem 0 0.2rem;
	}
`;

export const PrevArrow = styled(RoundButton)<{$current: number}>`
	position: absolute;
	z-index: 100;
	top: 0;
	left: 0;

	cursor: pointer;
	visibility: ${(props) => props.$current === 6 ? 'hidden' : 'visible'};
`;

export const NextArrow = styled(RoundButton)<{$current: number, $last:number}>`
	position: absolute;
	z-index: 100;
	top: 0;
	right: 0;

	cursor: pointer;
	visibility: ${(props) => props.$current === props.$last ? 'hidden' : 'visible'};
`;