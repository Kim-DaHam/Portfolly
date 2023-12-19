import { styled } from 'styled-components';

import { popperSize } from '@/styles/token';
import { Size } from '@/types/style';

export const PopperLayout = styled.div`
	width: 100vw;
	height: 100%;

	background-color: transparent;
`;

export const PopperContainer = styled.div<{top: number, right: number}>`
	width: auto;

	display: flex;
	flex-direction: column;

	position: fixed;
	z-index: 999;
	top: ${(props) => props.top + 10}px;
	right: ${(props) => document.documentElement.clientWidth - props.right}px;

	border-radius: 16px;
	background-color: lightgray;
`;

export const Separator = styled.div`
	width: 100%;
	height: 0.1rem;

	background-color: black;
`;

export const Group = styled.div<{size: Size}>`
	width: ${(props)=>popperSize[props.size].width};
	height: 100%;

	display: flex;
	flex-direction: column;

	padding: 8px;
`;

export const Item = styled.a`
	display: flex;

	padding: 0.5rem;

	cursor: pointer;
`;