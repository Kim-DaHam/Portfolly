import { styled } from 'styled-components';

export const SelectorLayout = styled.div`
	width: 45%;

	display: flex;
	flex-direction: column;

	position: relative;
`;

export const SelectorBox = styled.div`
	width: 100%;
	height: 2rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 0.7rem 0 1rem;

	border-radius: 1rem;
	border: 1px solid gray;
	background-color: white;

	cursor: pointer;
`;

export const Span = styled.span`

`

export const DropDownBox = styled.div`
	width: 100%;
	max-height: 15rem;

	position: absolute;
	z-index: 200;
	top: 2rem;

	overflow-y: auto;

	border-radius: 0 0 1rem 1rem;
	border: 1px solid gray;
	background-color: white;
`;

export const DropDownItem = styled.div`
	width: 100%;
	height: 3rem;

	display: flex;
	align-items: center;

	padding-left: 0.7rem;

	background-color: lightyellow;

	&:hover {
		background-color: lightgray;
	}
`;