import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	width: 18rem;

	${mixins.flexColumn}
	flex: none;
	gap: 1.5rem;

	padding: 2rem 1.5rem;

	background-color: white;
`;

export const ActivityBox = styled.div`
	width: 100%;

	${mixins.flexColumn}
	gap: 0.5rem;

	padding: 1rem;
	border-radius: 1rem;
	border: 1px solid #f0f0f0;
`;

export const Box = styled.div`
	height: 100%;
	${mixins.flexRow}
	flex-basis: 1;
	justify-content: space-between;
	overflow: hidden;
`;