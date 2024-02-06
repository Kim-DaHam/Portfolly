import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';
import { sizes } from '@/styles/text';

export const Content = styled.div`
	${mixins.flexColumn}
	gap: 1rem;
	overflow: hidden;
	padding: 1rem;

	& svg {
		align-self: flex-end;
		cursor: pointer;
	}
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 0.5rem;
`;

export const Form = styled.form`
	${mixins.flexColumn}
	gap: 2rem;
	padding: 0 1rem;
	overflow-y: scroll;
`;

export const ButtonGroup = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	gap: 1rem;

	margin-top: 1rem;
`;

export const Input = styled.input`
	height: fit-content;
	padding: 0.5rem 1rem;
	border-radius: 1rem;
	border: 1px solid #dedede;
`;

export const TitleInput = styled(Input)`
	height: 3rem;
	${sizes['titleSmall']};
`;

export const TextArea = styled.textarea`
	height: 5rem;
	padding: 0.5rem 1rem;
	border-radius: 1rem;
	border: 1px solid #dedede;
`;