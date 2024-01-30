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

export const MessageSection = styled.section`
	width: 100%;
	${mixins.flexColumn}

	flex-basis: 1;
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

	${mixins.flexCenter}
	flex-basis: 1;

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

export const NotificationBox = styled.div`
	${mixins.fullWidthHeight}
	${mixins.flexCenter}
`;