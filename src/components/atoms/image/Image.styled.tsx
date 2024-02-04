import styled from "styled-components";

import { Props } from "@/components/atoms/image/Image";

export const ImageLayout = styled.div<Props>`
	width: ${(props)=>props.size};
	height: 100%;
	aspect-ratio: ${(props)=> props.shape !== 'square' ? '1/1' : ''};

	flex: none;

	border-radius: ${(props)=> props.shape === 'circle' ? '999px' : ''};

	& img {
		width: 100%;
		height: inherit;
		aspect-ratio: ${(props)=> props.shape === 'foursquare' ? '1/1' : ''};

		object-fit: cover;
	}

	overflow: hidden;
`;