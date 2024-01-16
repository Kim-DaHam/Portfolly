import styled from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;

	display: fixed;
	top: 0;
	z-index: 200;

	background-color: transparent;
`;

export const PopperBox = styled.div<{$top: number, $right: number}>`
	width: auto;

	${mixins.flexColumn}

	position: fixed;
	z-index: 999;
	top: ${(props) => props.$top + 10}px;
	right: ${(props) => document.documentElement.clientWidth - props.$right}px;

	border-radius: 16px;
	background-color: lightgray;
`;

export const Separator = styled.div`
	width: 100%;
	height: 0.1rem;

	background-color: black;
`;

export const Group = styled.div<{size?: 'fit'}>`
	width: ${(props)=> props.size === 'fit' ?'fit-content' : '14rem'};
	height: 100%;

	${mixins.flexColumn}

	padding: 8px;
`;

export const Item = styled.a`
	display: flex;
	gap: 1rem;

	padding: 0.5rem;

	cursor: pointer;
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
`;