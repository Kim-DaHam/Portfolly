import styled from 'styled-components';

import { HEADER_HEIGHT } from '@/components/organisms/header/Header.styled';
import * as mixins from '@/styles/mixins';

export const Wrapper = styled.main`
	min-width: 1000px;
	width: 100%;
	height: 100vh;
	${mixins.flexCenter}

	span {
		font-weight: 600;
	}
`;

export const Header = styled.header`
	width: fit-content;
	height: ${HEADER_HEIGHT};

	${mixins.flexCenter}
	justify-content: space-between;

	position: absolute;
	z-index: 200;
	top: 0;

	padding: 0 4rem;
	background-color: transparent;
`;

export const Logo = styled.button`
	border: 0;
	cursor: pointer;
	padding-bottom: 0.7rem;
	background-color: transparent;
`;

export const EditorSection = styled.section`
	${mixins.fullWidthHeight}
	position: relative;
`;

export const FormSection = styled.aside`
	width: 22rem;
	height: fit-content;

	${mixins.flexColumn}
	align-items: end;
	flex: none;

	padding: 3rem 2rem 2rem 1rem;

	border-radius: 1rem 0 0 1rem;
	box-shadow: 0 0 1rem 0.1rem #e7e7e7;
	background-color: white;
`;

export const Form = styled.form`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}
	gap: 2rem;

	padding: 0.8rem;

	& > button {
		align-self: flex-end;
	}
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 0.8rem;
`;

export const TitleInput = styled.input`
	height: 4rem;
	border: 0;
	font-size: 1.5rem;
	font-weight: 600;
	&:focus {
		outline: none;
	}
`;

export const CategorySelector = styled.div`
	width: 8rem;
	height: 2rem;
`;

export const TagBox = styled.div`
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

export const InputArea = styled.textarea`
	width: 100%;
	height: 10rem;
	border: 1px solid #e5e5e5;
	border-radius: 1rem;
	padding: 0.7rem 1rem;
	margin-bottom: 4rem;
`;

export const TagInput = styled.div`
	min-width: 5rem;
	max-width: fit-content;
	height: 2.5rem;
	line-height: 2.5rem;

	${mixins.flexCenter}
	justify-content: baseline;

	padding: 0 1rem 0 1rem;

	color: white;
	border-radius: 9999px;
	background-color: black;
`;