import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.main`
	width: 100%;

	${mixins.flexColumn}
	flex-basis: 1;

	overflow: hidden;
`;

export const TitleBox = styled.div`
	height: 4.5rem;

	${mixins.flexRow}
	justify-content: space-between;
	align-items: center;
	flex: none;

	padding: 0 2.2rem 0 0.7rem;

	border-bottom: 1px solid gray;

	background-color: white;
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
`;