import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.aside`
	width: 19rem;
	height: 100%;
	${mixins.flexColumn}
	flex: none;
`;

export const SearchBox = styled.div`
	height: 4.5rem;
	${mixins.flexRow}
	flex: none;
	align-items: center;

	padding: 0 0.7rem 0 0.7rem;

	border-right: 1px solid #e8e9f0;
	border-bottom: 1px solid #e8e9f0;
	background-color: white;
`;

export const MessageRoomBox = styled.div`
	height: 100%;

	${mixins.flexColumn}

	overflow-y: scroll;
	overflow-x: hidden;

	background-color: #f5f6fa;
`;

export const Box = styled.div`
	${mixins.flexCenter}
`;

export const Notification = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;