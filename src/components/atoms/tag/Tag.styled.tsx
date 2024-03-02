import styled from 'styled-components';

export const Wrapper = styled.div<{readOnly: boolean}>`
	width: fit-content;
	height: 2.5rem;

	position: relative;
	display: flex;
	align-items: center;
	flex: none;
	gap: 0.5rem;

	padding: 1rem;
	border-radius: 9999px;
  background-color: #f3f3f3;
	transition: all 0.2s;
	cursor: ${props => props.readOnly ? '' : 'pointer'};

	&:hover{
		background-color: ${props => !props.readOnly && '#d7d7d7'};
	}
`;

export const Icon = styled.div`
	width: 1rem;
	height: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: white;

	& > svg {
		width: 0.7rem;
		color: black;
	}
`;