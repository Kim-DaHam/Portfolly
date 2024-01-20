import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}

	${mixins.flexColumn}
	gap: 1rem;

	cursor: pointer;

	background-color: red;
`;

export const Thumbnail = styled.div`
	width: 100%;
	aspect-ratio: 1 / 1;

	background-color: white;
`;

export const Box = styled.div`
	width: 100%;

	${mixins.flexColumn}

	background-color: lightgreen;
`;