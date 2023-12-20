import { styled } from 'styled-components';

export const PorfolioProfileLayout = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	gap: 0.5rem;
`;

export const Image = styled.img`
	width: 23%;
	height: 100%;

	flex: none;

	background-color: pink;
`;

export const SpanBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
	flex-shrink: 1;

	overflow: hidden;

	& span {
		overflow: hidden;

		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

export const ButtonGroup = styled.div`
	display: none;
	gap: 0.4rem;

	& button {
		flex: none;
	}
`;