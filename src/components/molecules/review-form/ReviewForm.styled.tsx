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
	width: 100%;
	height: 5rem;
	padding: 0.5rem 1.2rem;
	border: 1px solid #e9e8e8;
	border-radius: 1rem;
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: end;
	gap: 1rem;
`;