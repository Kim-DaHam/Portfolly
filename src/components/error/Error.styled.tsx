import styled, { css } from "styled-components";

export const Wrapper = styled.main<{type: 'page' | 'component'}>`
	${props => props.type === 'page' ?
		css`
			width: 100vw;
			height: 100vh;
		`
		:
		css`
			width: 100%;
			height: 100%;
			padding: 4rem;
		`
	}

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