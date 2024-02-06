import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullScreen}
	padding-top: 7rem;
`;

export const Content = styled.main`
	width: 100%;

	${mixins.flexCenter}
	${mixins.flexColumn}
`;

export const TitleSection = styled.section`
	width: 100%;
	height: fit-content;

	display: flex;
	gap: 2rem;
	align-items: end;

	padding: 1rem 0 1rem 0;

	& span {
		font-weight: 600;
	}
`;

export const PortfolioSection = styled.section`
	width: 100%;
	padding-top: 1.5rem;
`;