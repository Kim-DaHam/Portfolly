import { css, styled } from 'styled-components';

import { HEADER_HEIGHT } from '@/components/organisms/header/Header.styled';

export const MainLayout = styled.div`
	width: 100%;
	height: 100%;

	position: relative;
	z-index: 100;
	top: ${HEADER_HEIGHT};
`;

export const MainContainer = styled.main`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.7rem;

	padding: 3rem 5rem 3rem 5rem;

	background-color: #fff5f5;
`;

export const TitleSection = styled.section`
	width: 100%;
	height: 100%;

	display: flex;
	gap: 2rem;
	align-items: end;

	border: 1px solid black;
`;

export const Title = styled.h1`
	font-size: 3rem;
`;

export const Summary = styled.span`
	font-size: 1.1rem;
`;

export const CategorySection = styled.section`
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
	gap: 2rem;
	align-items: center;
	flex-grow: 1;

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

	& .slick-list {
		width: 100%;
		height: 100%;
	}

	& .slick-track {
		height: 100%;
	}

	& .slick-active div {
		height: 100%;

		padding: 0 0.2rem 0 0.2rem;
	}
`;

export const ArrowBox = styled.div`
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	position: absolute;
	z-index: 100;
	left: 0;
`;

const Arrow = css`
	width: 1rem;
	height: 1rem;

	cursor: pointer;
`;

export const PrevArrow = styled.button<{$current: number}>`
	${Arrow}
	visibility: ${(props) => props.$current === 6 ? 'hidden' : 'visible'};
`;

export const NextArrow = styled.button<{$current: number, $last:number}>`
	${Arrow}
	visibility: ${(props) => props.$current === props.$last ? 'hidden' : 'visible'};
`;

export const PortfolioSection = styled.section`
	width: 100%;
	height: 100%;

	padding-top: 1rem;
`;

export const GridBox = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: repeat(6, 1fr);
	justify-content: space-between;
	gap: 1.7rem;

	border: 1px solid red;
`;

export const GridItem = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-rows: 1fr;

	position: relative;

	padding-bottom: 4rem;

	cursor: pointer;

	&:hover {
		& .button-box {
			display: flex;
			align-items: center;
		}
	}
`;