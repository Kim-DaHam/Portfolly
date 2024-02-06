import styled from "styled-components";

export const Wrapper = styled.main`
	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	& > svg {
		cursor: pointer;
		color: gray;
		transition: all 0.1s ease;

		&:hover {
			color: lightgray;
			transform: rotate(40deg);
		}
	}
`;