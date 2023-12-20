import { styled } from 'styled-components';

import { HEADER_HEIGHT } from '@/components/organisms/header/Header.styled';

export const MyPageLayout = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
`;

export const ProfileContainer = styled.div`
	width: 100%;
	height: 100%;

	position: relative;
	top: ${HEADER_HEIGHT};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 3rem 10rem 2rem 10rem;

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

export const NavigationSection = styled.section`
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

export const ContentContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;

	background-color: lightgreen;
`;

export const DescriptionSection = styled.section`
	width: 100%;
	height: 100%;

	flex-basis: 1;

	padding: 3rem 2rem 3rem 2rem;

	background-color: yellow;
`;

export const InformationSection = styled.aside`
	width: 24rem;
	height: 100%;

	padding: 1rem;

	background-color: white;
`;