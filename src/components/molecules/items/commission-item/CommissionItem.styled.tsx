import styled from "styled-components";

export const Wrapper = styled.li`
	width: 100%;
	height: fit-content;

	display: flex;
	align-items: center;

	padding: 0.1rem 1.5rem 0.1rem 0rem;

	background-color: white;

	& > span {
		width: 5rem;
		height: 100%;

		display: flex;
		justify-content: center;
	}

	& > button {
		flex: none;
	}
`;

export const Box = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	flex-basis: 1;
	gap: 0.5rem;

	& span, & label {
		cursor: pointer;
	}
`;