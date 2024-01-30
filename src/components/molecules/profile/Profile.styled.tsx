import styled, { css } from "styled-components";

import { Profile } from "./Profile";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div<{$type: Profile}>`
	width: 100%;
	height: fit-content;

	display: flex;
	justify-content: ${(props) => props.$type === 'message' && 'center'};
	align-items: ${(props) => props.$type === 'portfolio-detail' && 'center'};
	gap: 0.5rem;
	flex-shrink: 1;

	overflow: hidden;

	background-color: yellow;
`;

export const SpanBox = styled.div`
	${mixins.flexColumn}
	justify-content: space-around;
	flex-shrink: 1;

	overflow: hidden;

	& span {
		overflow: hidden;

		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 1rem;
	padding-top: 1rem;
`;

export const MessageProfileWrapper = styled.div`
	height: fit-content;

	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 1rem;
`;