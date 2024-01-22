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