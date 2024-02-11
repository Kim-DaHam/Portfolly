import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.section`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}

	overflow: hidden;
`;

export const TitleBox = styled.div`
	height: 4.5rem;

	${mixins.flexRow}
	justify-content: space-between;
	align-items: center;
	flex: none;

	padding: 0 2.2rem 0 1.5rem;
	border-bottom: 1px solid #e8e9f0;
	background-color: white;

	& svg {
		cursor: pointer;
	}
`;

export const InputBox = styled.div`
	height: fit-content;
	${mixins.flexColumn}
	gap: 0.5rem;

	padding: 1rem 0.8rem 1rem 0.8rem;
	border-top: 1px solid #e8e9f0;

	& button {
		align-self: flex-end;
	}
`;

export const TextInput = styled.input`
	width: 100%;
	height: fit-content;
	flex: none;
	padding: 0.5rem 1.2rem;
	border-radius: 1rem;
	border: 1px solid #e8e9f0;
`;

export const FileInput = styled.div`
	height: fit-content;
	${mixins.flexRow}
	gap: 0.5rem;
`;

export const Input = styled.input`
	display: none;
`;

export const Label = styled.label`
	height: fit-content;

	${mixins.flexRow}
	gap: 0.2rem;
	align-items: center;

	font-family: 'NotoSansTTFMedium';
	cursor: pointer;
	color: gray;
`;

export const Box = styled.div`
	${mixins.fullWidthHeight}
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