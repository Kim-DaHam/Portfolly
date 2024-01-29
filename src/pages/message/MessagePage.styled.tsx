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
	flex: none;
	justify-content: space-between;
	align-items: center;

	padding: 0 0.7rem 0 0.7rem;

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

export const FlexRow = styled.div`
	width: fit-content;

	${mixins.flexRow}
	align-items: center;
	gap: 0.3rem;
`;

export const ChatBox = styled.div`
	width: 100%;
	height: 100%;

	flex-basis: 1;

	overflow-y: scroll;

	background-color: pink;
`;

export const ProfileBox = styled.div`
	width: 18rem;
	height: inherit;

	${mixins.flexColumn}
	justify-content: center;
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
	height: 100%;

	${mixins.flexRow}
	justify-content: space-between;
`;

export const FlexColumnBox = styled.div`
	${mixins.flexColumn}
	justify-content: center;
	flex: none;
	gap: 0.5rem;
`;