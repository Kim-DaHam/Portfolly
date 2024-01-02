import { styled } from 'styled-components';

import { HEADER_HEIGHT } from '@/components/organisms/header/Header.styled';

export const MainLayout = styled.div`
	width: 100%;
	height: 100%;

	position: relative;
	z-index: 100;
	top: ${HEADER_HEIGHT};
`;

export const MainContainer = styled.main`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1.7rem;

	padding: 3rem 5rem 3rem 5rem;
`;

export const TitleSection = styled.section`
	width: 100%;
	height: 100%;

	display: flex;
	gap: 2rem;
	align-items: end;

	border: 1px solid black;
`;

export const Title = styled.h1`
	font-size: 3rem;
`;

export const Summary = styled.span`
	font-size: 1.1rem;
`;

export const PortfolioSection = styled.section`
	width: 100%;
	height: 100%;

	padding-top: 1rem;
`;