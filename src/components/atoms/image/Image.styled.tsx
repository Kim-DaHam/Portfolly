import { styled } from "styled-components";

import { Shape } from "./Image";

export const ImageLayout = styled.div<{$size: string, $shape: Shape}>`
	width: ${(props)=>props.$size};
	aspect-ratio: ${(props)=> props.$shape === 'foursquare' ? '1/1' : ''};

	flex: none;

	border-radius: ${(props)=> props.$shape === 'circle' ? '999px' : ''};

	& img {
		width: 100%;
		object-fit: cover;
	}

	overflow: hidden;

	background-color: salmon;
`;