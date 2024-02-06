import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	width: 100%;
	min-width: 0;

	display: flex;
	gap: 0.75rem;
`;

export const SpanBox = styled.div`
	width: 100%;
	min-width: 0;
	height: 100%;

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
`;

export const UserProfileWrapper = styled(Wrapper)`
`;

export const PortfolioProfileWrapper = styled(Wrapper)`
`;

export const PortfolioCardProfileWrapper = styled(Wrapper)`
	& > span:first-child:hover {
		text-decoration: underline;
	}
`;

export const ColumnProfileWrapper = styled.div`
	width: 100%;
	height: fit-content;

	${mixins.flexCenter}
	${mixins.flexColumn}
	justify-content: center;
	gap: 1rem;

	& img {
		cursor: pointer;
	}
`;

export const MyPageProfileWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	& > div {
		gap: 1rem;
	}
`;