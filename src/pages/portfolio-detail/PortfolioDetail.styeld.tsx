import { styled } from 'styled-components';

import { HEADER_HEIGHT } from '@/components/header/Header.styled';


export const PortfolioDetailLayout = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: 3.5fr 1fr;

	position: absolute;
	z-index: 100;
	top: ${HEADER_HEIGHT};

	padding: 2.5rem 3rem 2rem 3rem;

	background-color: salmon;
`;

export const PortfolioContentSection = styled.section`
	width: 100%;
	height: 100%;

	padding: 2.5rem 3rem 2rem 3rem;

	background-color: lightgreen;
`;

export const HtmlContentBox = styled.div`
	width: 100%;
	height: 100%;

	background-color: white;
`;

export const RightSideSection = styled.aside`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	padding: 2.5rem 1rem 2rem 1rem;

	background-color: cornsilk;
`;

export const UserBox = styled.div`
	width: 100%;
	height: 30rem;

	display: flex;
	gap: 5rem;

	border-radius: 1.5rem;

	background-color: violet;
`;

export const InformationBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	background-color: gainsboro;
`;

export const TitleBox = styled.div`
	width: 100%;
	height: 5rem;

	display: grid;
	grid-template-columns: 1fr 1fr;

	background-color: white;
`;

export const TagBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;

	background-color: lightsalmon;
`;

export const SummaryBox = styled.div`
	width: 100%;
	height: 100%;

	background-color: lightpink;
`;

export const GridBox = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	background-color: bisque;
`;


