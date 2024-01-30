import styled from "styled-components";

export const Wrapper = styled.a<{$isClicked: boolean}>`
	width: 100%;
	height: 5rem;

	display: flex;
	align-items: center;
	gap: 0.7rem;

	padding: 0 0.8rem 0 0.8rem;

	cursor: pointer;

	background-color: ${(props) => props.$isClicked ? 'lightgray' : 'white'};
	border-bottom: 1px solid lightgray;

	&:hover {
		background-color: lightgray;
	}
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 1;
	gap: 0.5rem;

	background-color: lemonchiffon;
`;

export const LabelBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const MessageBox = styled.div`
	width: 12rem;

	& span {
		display: block;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;