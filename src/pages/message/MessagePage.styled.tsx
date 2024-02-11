import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullScreen}
	${mixins.flexCenter}
`;

export const Content = styled.main`
	width: 80%;
	height: 45rem;

	${mixins.flexRow}

	border-radius: 1rem;
	border: 1px solid #e8e9f0;
	overflow: hidden;
`;

export const MessageSection = styled.section`
	width: fit-content;
	flex: none;
	flex-shrink: 0;
	background-color: #f5f6fa;
`;

export const NotificationBox = styled.div`
	${mixins.fullWidthHeight}
	${mixins.flexCenter}
	${mixins.flexColumn}
	background-color: #f5f6fa;
	gap: 0.5rem;

	& span {
		text-align: center;
	}
`;