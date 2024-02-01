import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	width: 18rem;
	height: inherit;

	${mixins.flexColumn}
	flex: none;
	gap: 1rem;

	padding: 1rem;

	background-color: white;
`;

export const ActivityBox = styled.div`
	width: 100%;

	${mixins.flexColumn}
	gap: 0.5rem;

	padding: 1rem;

	background-color: lightgray;
`;

export const Box = styled.div`
	height: 100%;
	${mixins.flexRow}
	flex-basis: 1;
	justify-content: space-between;
	overflow: hidden;
`;