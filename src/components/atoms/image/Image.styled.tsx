import { styled } from "styled-components";

export const ImageLayout = styled.div<{size: string}>`
	width: ${(props)=>props.size};
	height: 100%;
	aspect-ratio: 1 / 1;

	flex: none;

	overflow: hidden;

	background-color: salmon;
`;