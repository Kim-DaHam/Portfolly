import { css, styled } from 'styled-components';

export const MainLayout = styled.div`
	width: 100%;
	height: 100%;

	position: absolute;
	z-index: 100;
`;

export const MainContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 8rem 5rem 3rem 5rem;

	background-color: #fff5f5;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.7rem;
`;

export const TitleSection = styled.section`
	width: 100%;
	height: 7rem;

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

	border: 1px solid black;

	display: flex;
	gap: 2rem;
`;

export const FilterButton = styled.button`

`;

export const Divider = styled.div`
	width: 1px;
	height: inherit;

	background-color: lightgray;
`;

export const CategoryBox = styled.div`
	width: 100%;
	height: inherit;
	overflow: hidden;
	position: relative;

	display: flex;
	gap: 2rem;
	align-items: center;
	flex-grow: 1;
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

export const CategoryButton = styled.button`
	width: 10rem;
	height: 100%;

	border-radius: 2rem;
	background-color: lightgray;
`

export const ArrowBox = styled.div`
	width: 100%;

	position: absolute;
	z-index: 100;
	left: 0;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Arrow = css`
	cursor: pointer;
	width: 1rem;
	height: 1rem;
`;

export const PrevArrow = styled.button<{current: number}>`
	${Arrow}
	visibility: ${(props) => props.current === 7 ? 'hidden' : 'visible'}
`;

export const NextArrow = styled.button<{current: number, last:number}>`
	${Arrow}
	visibility: ${(props) => props.current === props.last ? 'hidden' : 'visible'}
`;
