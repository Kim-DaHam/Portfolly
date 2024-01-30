import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.main`
	height: 100%;

	${mixins.flexRow}

	overflow: hidden;
`;

export const MessageBox = styled.div`
	width: 100%;
	height: 100%;

	${mixins.flexColumn}
	gap: 1rem;

	padding: 1rem;
	overflow-y: scroll;
	background-color: pink;
`;

export const ProfileBox = styled.div`
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