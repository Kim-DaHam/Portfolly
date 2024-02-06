import styled from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}
	align-items: center;

	gap: 3rem;
`;

export const Content = styled.div`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}
	gap: 3rem;
`;