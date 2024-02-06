import styled, { css } from "styled-components";

const activePage = css`
	color: white;
	font-weight: 600;
	border: black;
	background-color: black;
	&:hover {
		background-color: black;
	}
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
`;

export const Page = styled.button<{$active: boolean}>`
	width: 2.5rem;
	height: 2.5rem;

	cursor: pointer;
	font-size: medium;
	padding: 0.5rem;

	border-radius: 9999px;
	border: 1px solid #dcdcdc;
	background-color: transparent;

	&:hover {
		background-color: #f0f0f0;
	}

	${(props) => props.$active ? activePage : ''}
`;