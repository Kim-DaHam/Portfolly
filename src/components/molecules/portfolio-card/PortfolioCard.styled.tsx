import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;

	display: grid;
	grid-template-rows: 1fr;
	row-gap: 0.5rem;

	position: relative;

	padding-bottom: 4rem;
	cursor: pointer;

	&:hover {
		& .button-group {
			display: flex;
		}

		& span:first-child {
			text-decoration: underline;
		}
	}
`;

export const ProfileBox = styled.div`
	width: 100%;
	height: 2.749rem;

	display: flex;
	align-items: center;
	gap: 0.5rem;

	position: absolute;
	bottom: 0.1rem;
`;

export const ButtonGroup = styled.div`
	display: none;
	align-items: center;
	gap: 0.4rem;

	background-color: transparent;
	box-shadow: 0 0 1rem 1rem white;

	& button {
		width: 2.5rem;
		height: 2.5rem;
		flex: none;
	}
`;