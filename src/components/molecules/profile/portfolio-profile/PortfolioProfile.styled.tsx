import { styled } from 'styled-components';

export const PorfolioProfileLayout = styled.div`
	width: 100%;
	height: 3.5rem;

	display: flex;
	gap: 0.5rem;

	position: absolute;
	bottom: 0;

	background-color: yellow;
`;

export const SpanBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
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
	height: 100%;

	display: none;
	gap: 0.4rem;

	& button {
		flex: none;
	}
`;