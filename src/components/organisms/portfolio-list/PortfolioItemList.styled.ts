import styled from "styled-components";

export const GridBox = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: repeat(6, 1fr);
	justify-content: space-between;
	gap: 1.7rem;
`;

export const Notification = styled.div`
	width: 100vw;

	display: flex;
	justify-content: center;
	align-items: center;

	padding-top: 5rem;
`;