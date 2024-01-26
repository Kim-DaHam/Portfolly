import styled from "styled-components";

export const Wrapper = styled.li`
	display: flex;
	flex-direction: column;

	border-radius: 1rem;

	background-color: white;
`;

export const Content = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	align-items: center;

	padding: 0.1rem 1.5rem 0.1rem 0rem;

	& > span {
		width: 5rem;
		height: 100%;

		display: flex;
		justify-content: center;
	}

	& > button {
		flex: none;
	}
`;

export const Box = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	flex-basis: 1;
	gap: 0.5rem;

	& span, & label {
		cursor: pointer;
	}
`;

export const ReviewBox = styled.div`
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
	width: 90%;
	height: 5rem;

	resize: none;
`;

export const ButtonBox = styled.div`
	display: flex;
	justify-content: end;
	gap: 1rem;
`;