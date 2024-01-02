import { styled } from "styled-components";

import { portfolioItemSize } from "@/styles/token";
import { Section } from "@/types/portfolio";

export const PortfolioItemSkeleton = styled.div<{type: Section}>`
	width: 100%;
	aspect-ratio: ${(props) => portfolioItemSize[props.type].aspectRatio};

	position: 'relative';

	overflow: hidden;

	background-color: lightgray;
	border-radius: 1.8rem;
`;

