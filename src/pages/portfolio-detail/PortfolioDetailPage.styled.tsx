import { styled } from 'styled-components';

import { HEADER_HEIGHT } from '@/components/organisms/header/Header.styled';

export const PortfolioDetailLayout = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	position: relative;
	z-index: 100;
	top: ${HEADER_HEIGHT};

	padding-top: 2rem;

	background-color: salmon;
`;

export const PortfolioDetailContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	padding: 1rem 3rem 2rem 3rem;
`;

export const ContentContainer = styled.div`
	display: flex;
	gap: 1.2rem;
`

export const PortfolioSection = styled.section`
	width: 100%;
	height: 100%;

	flex-basis: 1;

	padding: 2.5rem 3rem 2rem 3rem;

	background-color: lightgreen;
`;

export const HtmlContent = styled.div`
	width: 100%;
	height: 100%;

	background-color: white;
`;

export const RightSection = styled.aside`
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
	height: 13rem;

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

export const ProfileBox = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const FlexBox = styled.div`
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

export const ButtonGroup = styled.div`
	width: 100%;
	height: 3rem;

	display: flex;
	justify-content: end;
	align-items: center;
	gap: 	1rem;
`;

export const TagBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	gap: 1rem;

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

	justify-content: space-between;
	align-items: center;
	gap: 0.4rem;

	background-color: bisque;
`;

export const GridItem = styled.div`
	width: 100%;
	height: 6rem;

	overflow: hidden;

	border-radius: 0.6rem;

	background-color: brown;
`;

