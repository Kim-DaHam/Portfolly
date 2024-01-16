import styled from 'styled-components';

import { HEADER_HEIGHT } from '@/components/organisms/header/Header.styled';
import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}

	background-color: salmon;;
`;

export const Content = styled.main`
	width: 100%;
	height: 100vh;
	${mixins.flexCenter}

	background-color: blue;
`;

export const Header = styled.header`
	width: fit-content;
	height: ${HEADER_HEIGHT};

	${mixins.alignCenter}
	justify-content: space-between;

	position: absolute;
	z-index: 200;
	top: 0;

	padding: 0 1rem 0 1rem;

	background-color: transparent;
`;

export const Logo = styled.div`
	background-color: white;
`;

export const EditorSection = styled.section`
	${mixins.fullWidthHeight}

	position: relative;

	background-color: lemonchiffon;
`;

export const FormSection = styled.aside`
	width: 22rem;
	height: 100%;

	${mixins.flexColumn}
	align-items: end;
	flex: none;

	padding: 3rem 1rem 2rem 1rem;

	background-color: violet;
`;

export const Form = styled.form`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}
	gap: 1.5rem;

	background-color: skyblue;
`;

export const TitleInput = styled.input`
	height: 3.5rem;
`;

export const CategorySelector = styled.div`
	width: 8rem;
	height: 2rem;

	background-color: gold;
`;

export const TagBox = styled.div`
	width: 100%;

	display: flex;
	gap: 1rem;

	background-color: yellow;
`;

export const SummaryInputArea = styled.div`
	width: 100%;
	height: 5rem;

	background-color: red;
`;

export const TagInput = styled.div`
	min-width: 5rem;
	max-width: fit-content;

	${mixins.alignCenter}

	padding: 0 1rem 0 1rem;

	border-radius: 1rem;

	color: white;
	background-color: black;
`;