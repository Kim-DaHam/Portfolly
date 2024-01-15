import { styled } from "styled-components";

export const GridBox = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-columns: repeat(6, 1fr);
	justify-content: space-between;
	gap: 1.7rem;

	border: 1px solid red;
`;