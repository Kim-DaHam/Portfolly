import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullScreen}
`;

export const Content = styled.main`
	width: 100%;

	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 1.7rem;

	padding: 3rem 5rem 3rem 5rem;
`;

export const TitleSection = styled.section`
	${mixins.fullScreen}

	display: flex;
	gap: 2rem;
	align-items: end;

	border: 1px solid black;
`;

export const Title = styled.h1`
	font-size: 3rem;
`;

export const Summary = styled.span`
	font-size: 1.1rem;
`;

export const PortfolioSection = styled.section`
	${mixins.fullScreen}

	padding-top: 1rem;
`;