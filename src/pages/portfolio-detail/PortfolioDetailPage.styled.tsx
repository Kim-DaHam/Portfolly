import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullScreen}
	${mixins.flexColumn}

	padding-top: 6.5rem;
	gap: 0.5rem;

	& > svg {
		float: left;
		cursor: pointer;
	}
`;

export const Content = styled.main`
	${mixins.flexRow}
	gap: 2rem;

	margin-top: 1rem;
`;

export const PortfolioSection = styled.section`
	${mixins.fullWidthHeight}

	flex-basis: 1;
	padding: 2.5rem 1rem;

	border-top: 2px solid #f5f5f5;
`;

export const HtmlContent = styled.div`
	${mixins.fullWidthHeight}
`;

export const Aside = styled.aside`
	width: 23rem;
	height: 100%;

	${mixins.flexColumn}
	flex: none;

	padding-bottom: 5rem;
`;

export const FlexColumnBox = styled.div`
	${mixins.flexColumn}
	padding: 2.4rem 0.5rem 2rem 0.5rem;
	border-radius: 1.5rem;
	gap: 1rem;
`;

export const ProfileBox = styled(FlexColumnBox)`
	${mixins.flexCenter}
	gap: 1.8rem;
	border: 1px solid #efefef;
`;

export const InformationBox = styled(FlexColumnBox)`
	${mixins.flexColumn}
	gap: 1.5rem;
`;

export const TitleBox = styled(FlexColumnBox)`
	padding: 0;
	gap: 0.5rem;

	& span {
		font-weight: 600;
	}
`;

export const ButtonGroup = styled.div`
	${mixins.flexRow}
	justify-content: end;
	align-items: center;
	gap: 	1rem;

	padding-top: 0.7rem;
`;

export const TagBox = styled.div`
	${mixins.flexRow}
	gap: 0.5rem;
	margin-bottom: 1.5rem;
`;

export const SummaryBox = styled.div`
	margin-bottom: 1.5rem;
`;

export const GridBox = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

export const GridItem = styled.div`
	overflow: hidden;

	border-radius: 0.6rem;
	cursor: pointer;

	& img {
		width: 100%;
		height: 100%;
	}
`;