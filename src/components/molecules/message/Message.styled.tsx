import styled from "styled-components";

export const Wrapper = styled.div<{$isOwned: boolean}>`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: ${(props) => props.$isOwned ? 'end' : 'start'};

	padding: 0.4rem 1rem 0.4rem 1rem;
	gap: 0.4rem;
`;

export const Content = styled.div<{$isOwned: boolean}>`
	width: fit-content;

	padding: 0.5rem 0.8rem 0.5rem 0.8rem;
	background-color: ${(props) => props.$isOwned ? 'black' : '#f0f0f0'};
	border-radius: 5rem;

	& span {
		color: ${(props) => props.$isOwned ? 'white' : 'black'};
	}
`;