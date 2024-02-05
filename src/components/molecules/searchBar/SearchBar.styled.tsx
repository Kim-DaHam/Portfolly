import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 3rem;

	display: flex;
	align-items: center;
	gap: 10px;

	padding: 0 1.25rem 0 1.25rem;

	cursor: pointer;

	border-radius: 1.5rem;
	background-color: #f0f0f0;

	& span {
		font-weight: 600;
	}
`;

export const Input = styled.input`
	flex-grow: 1;

	border: none;
	background-color: transparent;

	font-weight: 600;
	font-size: 1rem;

	&:focus {
		outline: none;
	}
`;