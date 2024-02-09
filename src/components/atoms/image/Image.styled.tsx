import styled, { css } from "styled-components";

import { Props } from "@/components/atoms/image/Image";

export const ImageLayout = styled.div<Props>`
	width: ${(props) => props.size};
	aspect-ratio: ${(props) => props.shape !== 'square' ? '1/1' : ''};
	border-radius: ${(props) => props.shape === 'foursquare' ? '1rem' : ''};

	flex: none;
	overflow: hidden;
	background-color: #f3f3f3;

	${(props) => {
		if(props.shape === 'circle'){
			return css`
				height: ${props.size};
				border: 0.1px solid #f0f0f0;
				border-radius: 50%;
			`;
		}
	}}

	& img {
		width: 100%;
		height: 100%;
		aspect-ratio: ${(props)=> props.shape === 'foursquare' ? '1/1' : ''};

		object-fit: cover;
	}
`;