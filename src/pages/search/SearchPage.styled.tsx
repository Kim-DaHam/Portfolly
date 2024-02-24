import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullScreen}
	${mixins.flexColumn}
	align-items: center;
	padding-top: 7rem;
`;

export const TitleSection = styled.section`
	width: 100%;
	height: fit-content;

	${mixins.flexColumn}
	gap: 1rem;

	padding: 1rem 0 1.5rem 0;

	& span {
		font-weight: 600;
	}

	& button {
		border-radius: 9999px;
	}
`;

export const PortfolioSection = styled.section`
	width: 100%;
	padding-top: 1.5rem;
`;

export const Box = styled.div`
	${mixins.flexRow}
	align-items: center;
	gap: 1rem;
`;