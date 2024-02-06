import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}

	${mixins.flexColumn}
	gap: 1rem;

	position: relative;
	cursor: pointer;

	& > a {
		border-radius: 1rem;
		background-color: #f5f5f5;
	}

	&:hover {
		& span:first-child {
			text-decoration: underline;
		}
	}
`;

export const Box = styled.div`
	width: 100%;
	${mixins.flexColumn}
	padding: 0 0.5rem;
`;