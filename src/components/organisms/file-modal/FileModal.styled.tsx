import styled from "styled-components";

export const Wrapper = styled.div`
	min-width: 100%;
	width: fit-content;
	height: fit-content;

	position: sticky;
	z-index: 200;
	bottom: 0;

	padding: 1rem;

	background-color: #ffffffac;

	& > svg {
		float: right;
	}
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const FlexBox = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	flex-basis: 1;
	gap: 0.5rem;

	& span {
		display: block;

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	& svg, & img {
		flex: none;
	}
`;

export const FileItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ImageBox = styled.div`
	width: fit-content;
	height: fit-content;

	position: relative;

	& > svg {
		position: absolute;
		z-index: 200;
		top: 0;
		right: 0;
	}
`;