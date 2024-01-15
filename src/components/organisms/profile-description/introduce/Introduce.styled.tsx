import styled from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}

	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 1rem;

	& ul {
		padding-left: 2rem;
	}

	background-color: lightpink;
`;

export const TextBox = styled.div`
	width: 30rem;
	height: 100%;

	background-color: white;
`;