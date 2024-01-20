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
			align-items: center;
		}
	}
`;

export const ProfileBox = styled.div`
	width: 100%;

	display: flex;
	align-items: center;

	position: absolute;
	bottom: 0;
`;

export const ButtonGroup = styled.div`
	height: 100%;

	display: none;
	gap: 0.4rem;

	& button {
		flex: none;
	}
`;