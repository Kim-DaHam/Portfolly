import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	width: 100%;
	min-width: 0;

	display: flex;
	gap: 0.75rem;

	& > div:first-child {
		background-color: #f3f3f3;
	}
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
	& img {
		aspect-ratio: 1/1;
		cursor: pointer;
	}
`;

export const PortfolioProfileWrapper = styled(Wrapper)`
	& img {
		aspect-ratio: 1/1;
		cursor: pointer;
	}
`;

export const PortfolioCardProfileWrapper = styled(Wrapper)`
	& img {
		border-radius: 1rem;
	}

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
		border-radius: 1rem;
	}
`;

export const MyPageProfileWrapper = styled(Wrapper)`
	display: flex;
	align-items: center;
	gap: 2rem;

	& > div {
		gap: 1rem;
	}
`;