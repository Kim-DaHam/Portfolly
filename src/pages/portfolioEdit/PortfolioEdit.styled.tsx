import { styled } from 'styled-components';

import { SquareButton } from '@/components/button/Button.styled';
import { HEADER_HEIGHT } from '@/components/header/Header.styled';

export const PortfolioEditLayout = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;

	background-color: salmon;;
`;

export const EditHeader = styled.header`
	width: 100%;
	height: ${HEADER_HEIGHT};

	display: flex;
	justify-content: space-between;

	background-color: black;
`;

export const Logo = styled.div`
	background-color: white;
`;

export const FlexContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: blue;
`;

export const EditorSection = styled.section`
	width: 100%;
	height: 100%;

	background-color: lemonchiffon;
`;

export const FormSection = styled.section`
	width: 22rem;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: end;
	flex: none;

	padding: 3rem 1rem 2rem 1rem;

	background-color: violet;
`;

export const FormBox = styled.form`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
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

export const SubmitButton = styled(SquareButton)`
	width: 8rem;
	height: 7%;
`;

export const TagInput = styled.div`
	min-width: 5rem;
	max-width: fit-content;
	height: 2rem;

	display: flex;
	align-items: center;

	padding: 0 1rem 0 1rem;

	border-radius: 1rem;

	color: white;
	background-color: black;
`;