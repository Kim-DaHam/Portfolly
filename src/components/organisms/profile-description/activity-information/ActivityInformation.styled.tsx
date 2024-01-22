import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}
	gap: 1rem;

	padding: 1rem;

	background-color: lightsteelblue;
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 0.5rem;
`;

export const Group = styled.div`
	${mixins.flexColumn}
	justify-content: space-between;
`;