import styled from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}

	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 3rem;

	background-color: lightpink;
`;

export const GridBox = styled.div`
	${mixins.fullWidthHeight}

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
`;

export const GridItem = styled.div`
	${mixins.fullWidthHeight}

	${mixins.flexColumn}
	gap: 1rem;

	cursor: pointer;

	background-color: red;
`;

export const Thumbnail = styled.div`
	width: 100%;
	aspect-ratio: 1 / 1;

	background-color: white;
`;

export const TitleBox = styled.div`
	width: 100%;

	${mixins.flexColumn}

	background-color: lightgreen;
`;