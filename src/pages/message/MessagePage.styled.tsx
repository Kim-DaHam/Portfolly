import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullScreen}
	${mixins.flexCenter}

	background-color: yellow;
`;

export const Content = styled.main`
	width: 80%;
	height: 40rem;

	${mixins.flexRow}

	background-color: green;
`;

export const MessageSection = styled.section`
	width: 100%;

	${mixins.flexColumn}
	flex-basis: 1;
`;

export const NotificationBox = styled.div`
	${mixins.fullWidthHeight}
	${mixins.flexCenter}
`;