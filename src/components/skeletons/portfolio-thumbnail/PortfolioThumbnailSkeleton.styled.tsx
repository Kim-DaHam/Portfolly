import { styled } from "styled-components";

import { ratios } from "@/styles/portfolioThumbnail";
import { Section } from "@/types/portfolio";

export const PortfolioItemSkeletonLayout = styled.div<{$section: Section}>`
	width: 100%;
	aspect-ratio: ${(props) => ratios[props.$section]};

	position: 'relative';

	overflow: hidden;

	background-color: lemonchiffon;
	border-radius: 1.8rem;
`;

