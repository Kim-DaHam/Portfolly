import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';
import { sizes } from '@/styles/text';

export const Content = styled.div`
	${mixins.flexColumn}

	overflow: hidden;
	overflow-y: scroll;

	background-color: beige;
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 0.5rem;
`;

export const Form = styled.form`
	${mixins.flexColumn}
	gap: 2rem;

	border: 1px solid black;
`;

export const ButtonBox = styled.div`
	width: 100%;

	display: flex;
	justify-content: right;

	margin-bottom: 0.5rem;

	cursor: pointer;
`;

export const ButtonGroup = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	gap: 1rem;

	margin-top: 1rem;
`;

export const Input = styled.input`
`;

export const TextInput = styled(Input)`
	height: 3rem;
	${sizes['titleSmall']};
`;

export const TextArea = styled.textarea`

`;