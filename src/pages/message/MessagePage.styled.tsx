import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullScreen}
	${mixins.flexCenter}

	background-color: yellow;
`;

export const Content = styled.main`
	width: 80%;
	height: 40rem;

	${mixins.flexRow}

	background-color: green;
`;

export const MessageSection = styled.aside`
	width: 19rem;

	${mixins.flexColumn}
	flex: none;
`;

export const ChatSection = styled.section`
	width: 100%;
	${mixins.flexColumn}

	flex-basis: 1;
`;

export const SearchBox = styled.div`
	height: 4.5rem;
	${mixins.flexRow}
	justify-content: space-between;
	align-items: center;

	border-right: 1px solid gray;
	border-bottom: 1px solid gray;
	background-color: white;
`;

export const MessageBox = styled.div`
	height: 100%;

	${mixins.flexCenter}
	${mixins.flexColumn}

	overflow-y: scroll;

	background-color: gray;
`;

export const UserNameBox = styled.div`
	height: 4.5rem;

	${mixins.flexRow}
	flex: none;
	gap: 0.5rem;

	border-bottom: 1px solid gray;

	background-color: white;
`;

export const ChatBox = styled.div`
	height: 100%;
	${mixins.flexRow}
	flex-basis: 1;

	background-color: pink;
`;

export const InputBox = styled.div`
	height: 7.5rem;
	${mixins.flexColumn}
	gap: 0.5rem;

	padding: 1rem 0.8rem 1rem 0.8rem;
	border-top: 1px solid gray;

	background-color: lemonchiffon;
`;

export const TextArea = styled.textarea`
	width: 100%;
	height: 3rem;

	resize: none;
`;

export const LabelButton = styled.button`
	width: fit-content;
	height: fit-content;
	${mixins.flexRow}

	cursor: pointer;
	background-color: transparent;
	font-size: medium;
`;

export const Box = styled.div`
	${mixins.flexRow}
	justify-content: space-between;
`;