import styled, { css } from "styled-components";

import { Props } from "@/components/atoms/image/Image";

export const ImageLayout = styled.div<Props>`
	width: ${(props)=>props.size};
	aspect-ratio: ${(props)=> props.shape !== 'square' ? '1/1' : ''};

	flex: none;
	overflow: hidden;

	${(props) => {
		if(props.shape === 'circle'){
			return css`
				border: 0.1px solid #f0f0f0;
				border-radius: 999rem;
			`;
		}
	}}

	& img {
		width: 100%;
		height: inherit;
		aspect-ratio: ${(props)=> props.shape === 'foursquare' ? '1/1' : ''};

		object-fit: cover;
	}
`;