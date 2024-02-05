import styled, { css, keyframes } from 'styled-components';

import * as mixins from '@/styles/mixins';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 100;
	}
`;

const fadeOut = keyframes`
	from {
		opacity: 100;
	}
	to {
		opacity: 0;
	}
`;

export const Wrapper = styled.div<{ $popperState: boolean }>`
	width: 100vw;
	height: 100vh;

	display: fixed;
	top: 0;
	z-index: 200;

	background-color: transparent;

	${(props) => props.$popperState ?
		css`animation: ${fadeIn} 0.1s 0s 1 normal forwards;`
	:
		css`animation: ${fadeOut} 0.1s 0s 1 normal forwards;`
	};
`;

export const PopperBox = styled.div<{$top: number, $right: number}>`
	width: auto;

	${mixins.flexColumn}

	position: fixed;
	z-index: 999;
	top: ${(props) => props.$top + 10}px;
	right: ${(props) => document.documentElement.clientWidth - props.$right}px;

	border-radius: 1rem;
	background-color: white;
	box-shadow: 0 0 1rem 0.1rem #e7e7e7;
`;

export const Separator = styled.div`
	width: 100%;
	height: 0.01rem;

	background-color: lightgray;
`;

export const Group = styled.div<{size?: string}>`
	width: ${(props)=> props.size || '14rem'};
	height: 100%;

	${mixins.flexColumn}
	gap: 0.5rem;

	padding: 0.5rem;

	& a {
		display: flex;
		gap: 1rem;

		padding: 0.5rem 1rem 0.5rem 1rem;

		cursor: pointer;
		border-radius: 0.5rem;

		&:hover {
			background-color: #f5f5f5;
		}
	}
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
`;