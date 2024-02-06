import styled, { css } from "styled-components";

export const Wrapper = styled.section`
	width: 100%;
	height: 3rem;

	display: flex;
	align-items: center;
	gap: 1.5rem;

	padding: 0 3rem;
	margin-bottom: 3rem;
`;

export const Tab = styled.div<{$active: boolean}>`
	height: 100%;

	display: flex;
	align-items: center;

	cursor: pointer;
	font-size: 1.1rem;

	& a {
		color: #9ca0b5;
		transition: color 0.1s ease;
		&:hover {
			color: black;
		}
	}

	${props => props.$active &&
		css`
			border-bottom: 2px solid black;
			& a {
				color: black;
			}
		`
	}
`;