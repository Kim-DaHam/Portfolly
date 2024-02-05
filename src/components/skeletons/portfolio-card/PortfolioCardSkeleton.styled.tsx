import { styled } from "styled-components";

import { ratios } from "@/styles/portfolio";
import { Section } from "@/types";

export const Layout = styled.div<{$section: Section}>`
	width: 100%;
	aspect-ratio: ${(props) => ratios[props.$section]};

	position: 'relative';

	overflow: hidden;

	background-color: #e4e4e4;
	border-radius: 1.75rem;
`;

