import { css, styled } from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div<{$size: string}>`
	width: ${(props) => props.$size};

	${mixins.flexColumn}

	font-weight: 500;
	position: relative;
`;

export const SelectorBox = styled.div<{$isSelectorOpen: boolean}>`
	width: 100%;
	height: 2.75rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 1rem;
	line-height: 1.5em;
	font-size: 1em;
	letter-spacing: -.008em;

	cursor: pointer;

	border: 1px solid #f0f0f0;
	border-radius: 9999px;
  background-color: transparent;
	transition: all 0.2s;

	&:hover {
		background-color: #f5f5f5;
	}

	${props => props.$isSelectorOpen &&
		css`
			& > svg {
				transition: all 0.1s linear;
				transform: rotateX( 180deg );
			}
		`
	}
`;

export const DropDown = styled.div`
	width: 100%;
	max-height: 15rem;

	position: absolute;
	z-index: 200;
	top: 3.2rem;

	overflow-y: auto;

	border-radius: 1rem;
	background-color: white;
	box-shadow: 0 0 1rem 0.1rem #e7e7e7;
`;

export const DropDownItem = styled.div`
	width: 100%;
	height: 3rem;

	display: flex;
	align-items: center;

	padding: 0 1rem;
	cursor: pointer;

	&:hover {
		background-color: #f5f5f5;
	}
`;

export const SelectorOutside = styled.div`
	width: 100%;
	height: 100%;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;

	background-color: transparent;
`;