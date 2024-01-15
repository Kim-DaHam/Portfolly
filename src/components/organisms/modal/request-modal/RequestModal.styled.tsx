import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';

export const ButtonBox = styled.div`
	width: 100%;

	display: flex;
	justify-content: right;

	cursor: pointer;
`;

export const Content = styled.div`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}
	gap: 2rem;

	overflow-y: auto;

	background-color: beige;
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 0.5rem;
`;

export const Form = styled.form`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}
	gap: 2rem;

	border: 1px solid black;
`;

export const ButtonGroup = styled.div`
	width: 100%;
	height: 5rem;

	display: flex;
	justify-content: center;
	gap: 1rem;
`;