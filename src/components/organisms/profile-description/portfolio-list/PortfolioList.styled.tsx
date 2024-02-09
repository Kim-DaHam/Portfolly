import styled from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}

	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 3rem;
`;

export const GridBox = styled.div`
	${mixins.fullWidthHeight}

	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2.5rem;
`;

export const Notification = styled.div`
	width: 100%;
	height: 100%;
	${mixins.flexCenter}
`;