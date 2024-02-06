import styled from "styled-components";

export const Wrapper = styled.div`
	min-width: 100%;
	width: fit-content;
	height: fit-content;

	position: sticky;
	z-index: 200;
	bottom: 0;

	padding: 1rem;

	background-color: #eeeeeee2;

	& > svg {
		float: right;
		cursor: pointer;
	}
`;

export const Box = styled.div<{$flex: 'row' | 'column'}>`
	display: flex;
	flex-direction: ${(props) => props.$flex};
	gap: 1rem;
`;

export const FileItem = styled.div`
	width: 80%;

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

	& svg {
		flex: none;
		cursor: pointer;
	}
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
		cursor: pointer;
	}
`;