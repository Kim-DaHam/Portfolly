import styled from "styled-components";

import { Profile } from "@/components/molecules/profile/Profile";
import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div<{$type: Profile}>`
	width: 100%;
	min-width: 0;

	display: flex;
	flex-basis: 1;
	justify-content: ${(props) => props.$type === 'message-room' && 'center'};
	align-items: ${(props) => props.$type === 'portfolio-detail' && 'center'};
	gap: 0.75rem;
`;

export const SpanBox = styled.div`
	width: 100%;
	min-width: 0;

	${mixins.flexColumn}
	justify-content: space-around;
	flex-shrink: 1;

	& span {
		width: 99%;
		display: block;

		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	& > span:first-child {
		cursor: pointer;
	}

	& > span:first-child:hover {
		text-decoration: underline;
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