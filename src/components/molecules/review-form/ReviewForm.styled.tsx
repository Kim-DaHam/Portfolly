import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	padding: 1.5rem 2rem 1.5rem 2rem;
`;

export const Form = styled.form`
	height: 100%;

	display: flex;
	flex-direction: column;
	gap: 1rem;

	background-color: white;
`;

export const TextArea = styled.textarea`
	width:75%;
	height: 5rem;

	resize: none;
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: end;
	gap: 1rem;
`;