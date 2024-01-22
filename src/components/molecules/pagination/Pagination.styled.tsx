import styled, { css } from "styled-components";

const activePage = css`
	font-weight: 600;
`;

export const Wrapper = styled.div`
	height: 40px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;

	& svg {
		cursor: pointer;
	}

	background-color: green;
`;

export const Page = styled.button<{$active: boolean}>`
	width: 1.2rem;
	${(props) => props.$active ? activePage : ''}
	font-size: medium;
	background-color: transparent;
	border: none;

	cursor: pointer;
`;