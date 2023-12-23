import { styled } from "styled-components";

export const ImageLayout = styled.div<{size: string}>`
	width: ${(props)=>props.size};

	flex: none;

	& img {
		width: 100%;
		object-fit: cover;
	}

	overflow: hidden;

	background-color: salmon;
`;