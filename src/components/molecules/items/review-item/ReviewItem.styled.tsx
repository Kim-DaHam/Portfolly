import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	width: 100%;
	${mixins.flexColumn}
	gap: 1rem;
`;

export const ProfileBox = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	gap: 1rem;

	padding-bottom: 0.5rem;
	border-bottom: 2px solid #f5f5f5;

	& img:last-child {
		align-self: flex-end;
		cursor: pointer;
	}
`;

export const ContentBox = styled.div`
	${mixins.fullWidthHeight}

	flex-basis: 1;
	padding-left: 0.5rem;
`;

export const Box = styled.div`
	width: 100%;
	${mixins.flexColumn}
	justify-content: center;
	flex-basis: 1;
	gap: 0.1rem;
`;