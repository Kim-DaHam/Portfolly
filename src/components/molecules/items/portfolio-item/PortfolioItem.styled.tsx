import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}

	${mixins.flexColumn}
	gap: 1rem;

	position: relative;

	cursor: pointer;

	background-color: red;
`;

export const Box = styled.div`
	width: 100%;

	${mixins.flexColumn}

	background-color: lightgreen;
`;