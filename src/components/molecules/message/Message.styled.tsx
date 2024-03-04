import styled, { css } from "styled-components";

const ownMessageStyle = css`
	flex-direction: row-reverse;
	justify-content: end;

	& > div:first-child {
		display: none;
	}
`;

export const Wrapper = styled.div<{$isOwned: boolean, $isLongMessage: boolean}>`
	width: 100%;

	display: flex;
	align-items: center;
	padding: 0.4rem 1rem 0.4rem 1rem;
	gap: 0.4rem;

	& > div:first-child { // 프로필 이미지
		align-self: ${props => props.$isLongMessage && 'flex-start' };
	}

	& > span { // 전송
		align-self: ${props => props.$isLongMessage && 'flex-end' };
	}

	${props => props.$isOwned && ownMessageStyle}
`;

export const Content = styled.div<{$isOwned: boolean, $isLongMessage: boolean}>`
	max-width: 20rem;
	width: fit-content;
	height: fit-content;

	padding: 0.5rem 0.8rem 0.5rem 0.8rem;
	border-radius: ${props => props.$isLongMessage ? '0.8rem' : '5rem'};
	background-color: ${(props) => props.$isOwned ? 'black' : '#f0f0f0'};

	& span {
		white-space: pre-line;
		word-break: break-all;
		color: ${(props) => props.$isOwned ? 'white' : 'black'};
	}
`;

export const Box = styled.div<{$isOwned: boolean}>`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: ${props => props.$isOwned ? 'end' : 'start'};
`;