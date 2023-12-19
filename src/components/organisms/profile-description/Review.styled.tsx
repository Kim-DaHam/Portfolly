import { styled } from 'styled-components';

export const ReviewLayout = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 3rem;
`;

export const ReviewList = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 2rem;

	padding-left: 2rem;

	background-color: lightpink;
`;

export const ReviewBox = styled.div`
	width: 60%;
	height: 10rem;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	background-color: beige;
`;

export const ProfileBox = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	gap: 1rem;

	background-color: brown;
`;

export const ProfileImage = styled.div`
	width: 60px;
	height: 60px;

	flex: none;

	background-color: white;
`;

export const FlexColumnBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;

	gap: 0.5rem;
`;

export const Span = styled.span`
	font-size: 1.1rem;
	font-weight: 600;
`;

export const ContentBox = styled.div`
	width: 100%;
	height: 100%;

	flex-basis: 1;

	padding-left: 1rem;

	background-color: #b3d2ee;
`;