import { styled } from 'styled-components';

export const MainLayout = styled.div`
	width: 100%;
	height: 100%;
`;

export const MainContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 8rem 5rem 3rem 5rem;

	background-color: #fff5f5;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5rem;
`;

export const TitleSection = styled.section`
	width: 100%;
	height: 7rem;

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