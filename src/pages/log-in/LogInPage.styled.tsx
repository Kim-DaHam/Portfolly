import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.main`
	${mixins.fullScreen}
	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 2rem;

	padding: 0;

	& img {
		cursor: pointer;
	}
`;

export const ButtonGroup = styled.div`
	width: 28rem;

	${mixins.flexColumn}
	gap: 2.8rem;

	padding: 2rem;
	padding: 3rem 3rem;

	border: 1px solid gray;
	border-radius: 2rem;
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 1rem;
`;