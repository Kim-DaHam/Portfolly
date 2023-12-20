import { styled } from "styled-components";

export const TrackingLayout = styled.div`
	width: 100%;
	height: 100%;

	padding: 1rem 2rem 1rem 2rem;

	background-color: gray;
`;

export const BoxGroup = styled.div`
	width: 100%;
	height: 8rem;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
`;

export const Box = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: end;
	gap: 1rem;

	padding: 1rem;

	background-color: white;
`;

export const LabelGroup = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	justify-content: space-between;

	background-color: salmon;
`;

export const Count = styled.span`
	font-size: 2rem;
	font-weight: 600;
`;

export const TextGroup = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: space-between;

	background-color: salmon;
`;