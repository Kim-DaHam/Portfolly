import { styled } from 'styled-components';

import { SquareButton } from '@/components/button/Button.styled';
import { HEADER_HEIGHT } from '@/components/header/Header.styled';


export const PortfolioDetailLayout = styled.div`
	width: 100%;
	height: 100%;

	position: absolute;
	z-index: 100;
	top: ${HEADER_HEIGHT};
`;

export const PortfolioDetailContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	gap: 1.2rem;

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
	width: 23rem;
	height: 100%;

	display: flex;
	flex-direction: column;
	flex: none;
	gap: 1rem;

	background-color: cornsilk;
`;

export const UserBox = styled.div`
	width: 100%;
	height: 32rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.7rem;

	padding: 2.4rem 1rem 2rem 1rem;

	border-radius: 1.5rem;

	& div {
		flex-basis: 1;
	}

	background-color: violet;
`;

export const AskButton = styled(SquareButton)`
	width: 70%;
	height: 5rem;
`;

export const InformationBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	padding: 1rem 1rem 2rem 1rem;

	border-radius: 1.5rem;

	background-color: skyblue;
`;

export const TitleBox = styled.div`
	width: 100%;

	display: grid;
	grid-template-rows: 0.8fr 1fr;
	row-gap: 0.4rem;

	background-color: white;
`;

export const Category = styled.span`
	font-weight: 600;
	color: gray;
`;

export const ButtonBox = styled.div`
	width: 100%;
	height: 3rem;

	display: flex;
	justify-content: end;
	align-items: center;
	gap: 	1rem;

	margin-top: 1rem;
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


