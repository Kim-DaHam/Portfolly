import styled from "styled-components";

export const Wrapper = styled.li`
	display: flex;
	flex-direction: column;

	padding: 0.5rem;
	border-radius: 1rem;
	background-color: white;
`;

export const Content = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	align-items: center;
	padding-right: 1rem;

	& > span {
		height: 100%;

		display: flex;
		justify-content: center;
		padding: 0 2rem;
	}

	& > button {
		flex: none;
	}

	&:hover {
		& > div > span:first-child {
			text-decoration: underline;
		}
	}
`;

export const Box = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	flex-basis: 1;
	gap: 0.2rem;

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