import { styled } from 'styled-components';

export const PortfolioListLayout = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3rem;

	background-color: lightpink;
`;

export const GridBox = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
`;

export const GridItem = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	cursor: pointer;

	background-color: red;
`;

export const ThumbnailImage = styled.div`
	width: 100%;
	aspect-ratio: 1 / 1;

	background-color: white;
`;

export const TitleBox = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;

	background-color: lightgreen;
`;