import { styled } from 'styled-components';

export const RatingLayout = styled.div`
	width: 10rem;

	display: flex;
	gap: 1rem;
	justify-content: space-between;

	background-color: yellow;
`;

export const RatingBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	gap: 0.1rem;
	flex-basis: 1;

	background-color: salmon;
`;

export const Score = styled.span`
	width: 100%;
	line-height: 100%;

	font-size: 1rem;
	color: gray;
`;