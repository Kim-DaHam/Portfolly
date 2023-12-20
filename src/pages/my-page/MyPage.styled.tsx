import { styled } from 'styled-components';

import { SquareButton } from '@/components/atoms/button/Button.styled';
import { HEADER_HEIGHT } from '@/components/organisms/header/Header.styled';

export const MyPageLayout = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
`;

export const UserProfileContainer = styled.div`
	width: 100%;
	height: 100%;

	position: relative;
	top: ${HEADER_HEIGHT};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 5rem 10rem 2rem 10rem;

	background-color: salmon;
`;

export const ProfileMainSection = styled.section`
	width: 100%;
	height: fit-content;

	display: flex;
	gap: 1rem;

	padding: 2rem 3rem 2rem 3rem;

	background-color: violet;
`;

export const ProfileImg = styled.div`
	width: 150px;
	height: 150px;

	flex: none;

	background-color: white;
`;

export const FlexCoulumnBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	background-color: goldenrod;
`;

export const UserName = styled.div`
	font-size: 2em;
	font-weight: 600;
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: end;
`;

export const ContactButton = styled(SquareButton)`
	/* height: 3rem; */
`;

export const ProfileNavigationSection = styled.section`
	width: 100%;
	height: 5rem;

	display: flex;
	gap: 1.2rem;
	align-items: center;

	padding: 1rem 2rem 0 2rem;

	background-color: skyblue;
`;

export const Navigation = styled.a`
	height: 100%;

	display: flex;
	align-items: center;

	cursor: pointer;

	font-size: 1.1rem;
	border-bottom: 3px solid black;
`;

export const ProfileContentContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;

	background-color: lightgreen;
`;

export const ProfileDescriptionSection = styled.section`
	width: 100%;
	height: 100%;

	flex-basis: 1;

	padding: 3rem 2rem 3rem 2rem;

	background-color: yellow;
`;

export const ProfileInformationSection = styled.section`
	width: 24rem;
	height: 100%;

	padding: 1rem;

	background-color: white;
`;

export const InformationBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	padding: 1rem;

	background-color: lightsteelblue;
`;

export const FlexColumBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	background-color: aqua;
`;

export const SpanBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: space-between;

	background-color: thistle;
`;