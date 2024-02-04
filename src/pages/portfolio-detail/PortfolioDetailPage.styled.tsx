import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';
import { sizes } from '@/styles/text';

export const Wrapper = styled.div`
	${mixins.fullScreen}
	${mixins.flexColumn}

	background-color: salmon;
`;

export const Content = styled.main`
	${mixins.flexColumn}
	gap: 0.5rem;

	padding: 1rem 3rem 2rem 3rem;
`;

export const FlexBox = styled.div`
	${mixins.flexRow}
	gap: 1.2rem;
`

export const PortfolioSection = styled.section`
	${mixins.fullWidthHeight}

	flex-basis: 1;
	padding: 2.5rem 3rem 2rem 3rem;

	background-color: lightgreen;
`;

export const HtmlContent = styled.div`
	${mixins.fullWidthHeight}

	background-color: white;
`;

export const Aside = styled.aside`
	width: 23rem;
	height: 100%;

	${mixins.flexColumn}
	flex: none;
	gap: 1rem;

	background-color: cornsilk;
`;

export const FlexColumnBox = styled.div`
	${mixins.flexColumn}
	padding: 2.4rem 1rem 2rem 1rem;
	border-radius: 1.5rem;
	gap: 1rem;
	background-color: violet;
`;

export const ProfileBox = styled(FlexColumnBox)`
	${mixins.flexCenter}
	gap: 1.7rem;
`;

export const PortfolioInfoBox = styled(FlexColumnBox)`
	${mixins.flexColumn}
	gap: 1rem;
`;

export const TitleBox = styled(FlexColumnBox)`
	padding: 0;
	border-radius: 0;
	gap: 0.2rem;
	background-color: white;
`;

export const ButtonGroup = styled.div`
	${mixins.flexRow}
	justify-content: end;
	align-items: center;
	gap: 	1rem;
`;

export const TagBox = styled.div`
	${mixins.flexRow}
	gap: 0.5rem;
	margin-bottom: 1rem;
	background-color: lightsalmon;
`;

export const SummaryBox = styled.div`
	margin-bottom: 1rem;
	background-color: lightpink;
`;

export const GridBox = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	justify-content: space-between;
	align-items: center;
	gap: 0.4rem;

	background-color: bisque;
`;

export const GridItem = styled.div`
	overflow: hidden;

	border-radius: 0.6rem;
	cursor: pointer;

	& img {
		width: 100%;
		height: 100%;
	}

	background-color: brown;
`;

export const TextButton = styled.label`
	${sizes['label']}
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;