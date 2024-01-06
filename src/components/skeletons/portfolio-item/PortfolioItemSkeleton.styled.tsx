import { styled } from "styled-components";

import { portfolioThumbnailSize } from "@/styles/token";
import { Section } from "@/types/portfolio";

export const PortfolioItemSkeletonLayout = styled.div<{section: Section}>`
	width: 100%;
	aspect-ratio: ${(props) => portfolioThumbnailSize[props.section].aspectRatio};

	position: 'relative';

	overflow: hidden;

	background-color: lightgray;
	border-radius: 1.8rem;
`;

