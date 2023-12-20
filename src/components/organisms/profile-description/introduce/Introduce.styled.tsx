import { styled } from 'styled-components';

import { FlexColumnBox } from '@/styles/Container.styled';

export const IntroduceLayout = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const ContentBox = styled(FlexColumnBox)`
	& ul {
		padding-left: 2rem;
	}

	background-color: lightpink;
`;

export const TextBox = styled.div`
	width: 30rem;
	height: 100%;

	background-color: white;
`

export const Span = styled.span`
	font-size: 1rem;
`;