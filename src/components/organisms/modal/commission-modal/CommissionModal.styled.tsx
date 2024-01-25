import { styled } from 'styled-components';

import { types } from '@/styles//text';
import * as mixins from '@/styles/mixins';

export const Content = styled.div`
	${mixins.flexColumn}

	background-color: beige;
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 0.5rem;
`;

export const Form = styled.form`
	height: 90%;
	${mixins.flexColumn}
	gap: 2rem;

	overflow: hidden;
	overflow-y: scroll;

	border: 1px solid black;
`;

export const ButtonBox = styled.div`
	width: 100%;

	display: flex;
	justify-content: right;

	cursor: pointer;
`;

export const ButtonGroup = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	gap: 1rem;

	position: relative;
	bottom: 4rem;
`;

export const Input = styled.input`
`;

export const TextInput = styled(Input)`
	height: 3rem;
	${types['titleSmall']};
`;

export const TextArea = styled.textarea`

`;