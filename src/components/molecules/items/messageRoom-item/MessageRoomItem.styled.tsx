import styled from "styled-components";

export const Wrapper = styled.a<{$isClicked: boolean}>`
	width: 100%;
	height: 5rem;

	display: flex;
	align-items: center;
	gap: 0.7rem;

	padding: 0 0.8rem 0 0.8rem;
	cursor: pointer;
	background-color: ${(props) => props.$isClicked ? '#f0f0f0' : 'white'};
	border-bottom: 1px solid #e8e9f0;
	transition: background-color 0.1s ease;

	&:hover {
		background-color: #f0f0f0;
	}
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 1;
	gap: 0.5rem;
`;

export const LabelBox = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	& span:last-child {
		flex: none;
	}
	& span:first-child {
		display: block;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
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