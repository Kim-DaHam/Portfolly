import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.section`
	${mixins.fullWidthHeight}
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
	${mixins.fullWidthHeight}
	${mixins.flexColumn}

	position: relative;
	overflow-y: scroll;
	background-color: pink;
`;

export const InputBox = styled.div`
	height: fit-content;
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

export const FileInput = styled.div`
	${mixins.flexRow}
	gap: 0.5rem;
`;

export const Input = styled.input`
	display: none;
`;

export const Label = styled.label`
	height: fit-content;

	${mixins.flexRow}
	align-items: center;

	cursor: pointer;
	color: gray;
`;

export const Box = styled.div`
	height: 100%;
	${mixins.flexRow}
	flex-basis: 1;
	justify-content: space-between;
	overflow: hidden;
`;

export const FlexColumnBox = styled.div`
	${mixins.flexColumn}
	justify-content: center;
	flex: none;
	gap: 0.5rem;
`;