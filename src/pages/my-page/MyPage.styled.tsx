import { styled } from 'styled-components';

import { HEADER_HEIGHT } from '@/components/organisms/header/Header.styled';

export const MyPageLayout = styled.div`
	width: 100%;
	height: 100vh;

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

	padding: 1rem 2rem 1rem 2rem;

	background-color: salmon;
`;

export const ProfileMainSection = styled.section`
	width: 100%;
	height: 10rem;

	background-color: violet;
`;

export const ProfileNavigationSection = styled.section`
	width: 100%;
	height: 5rem;

	display: flex;
	gap: 2rem;

	background-color: skyblue;
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

	background-color: yellow;
`;

export const ProfileInformationSection = styled.section`
	width: 30rem;
	height: 100%;

	flex: none;

	background-color: white;
`;