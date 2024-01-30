import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.aside`
	width: 19rem;

	${mixins.flexColumn}
	flex: none;
`;

export const SearchBox = styled.div`
	height: 4.5rem;
	${mixins.flexRow}
	flex: none;
	align-items: center;

	padding: 0 0.7rem 0 0.7rem;

	border-right: 1px solid gray;
	border-bottom: 1px solid gray;
	background-color: white;
`;

export const MessageRoomBox = styled.div`
	height: 100%;

	${mixins.flexColumn}

	overflow-y: scroll;

	background-color: gray;
`;

export const Box = styled.div`
	${mixins.flexCenter}
`;