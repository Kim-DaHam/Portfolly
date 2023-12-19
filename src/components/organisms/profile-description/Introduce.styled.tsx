import { styled } from 'styled-components';

export const IntroduceLayout = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const FlexColumnBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	& ul {
		padding-left: 2rem;
	}

	background-color: lightpink;
`;

export const ContentBox = styled.div`
	width: 30rem;
	height: 100%;

	background-color: white;
`

export const Span = styled.span`
	font-size: 1rem;
`;