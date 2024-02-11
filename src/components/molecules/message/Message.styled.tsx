import styled, { css } from "styled-components";

export const Wrapper = styled.div<{$isOwned: boolean, $isLongMessage: boolean}>`
	width: 100%;

	display: flex;
	align-items: ${props => props.$isLongMessage ? 'end' : 'center'};
	justify-content: ${(props) => props.$isOwned ? 'end' : 'start'};

	padding: 0.4rem 1rem 0.4rem 1rem;
	gap: 0.4rem;
`;

export const Content = styled.div<{$isOwned: boolean, $isLongMessage: boolean}>`
	max-width: 20rem;
	width: fit-content;

	padding: 0.5rem 0.8rem 0.5rem 0.8rem;
	border-radius: ${props => props.$isLongMessage ? '0.8rem' : '5rem'};
	background-color: ${(props) => props.$isOwned ? 'black' : '#f0f0f0'};

	& span {
		white-space: pre-line;
		word-break: break-all;
		color: ${(props) => props.$isOwned ? 'white' : 'black'};
	}
`;