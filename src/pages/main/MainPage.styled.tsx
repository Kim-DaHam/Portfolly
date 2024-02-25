import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';
import { sizes } from '@/styles/text';
import theme from '@/styles/theme';

export const Wrapper = styled.main`
	${mixins.fullScreen}
	${mixins.flexCenter}
	${mixins.flexColumn}
	padding-top: 7rem;
`;

export const TitleSection = styled.section`
	width: 100%;
	height: fit-content;

	display: flex;
	gap: 2rem;
	align-items: end;

	padding: 1rem 0 1.5rem 0;

	& span {
		font-weight: 600;
	}

	@media ${theme.mainPageSize.app5th} {
		& > span:first-child {
			${sizes['headingSmall']};
		}
	};
`;

export const PortfolioSection = styled.section`
	width: 100%;
	padding-top: 1.5rem;
`;