import styled from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullWidthHeight}
	${mixins.flexColumn}
	gap: 2.5rem;
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 1rem;

	& ul {
		padding-left: 2rem;
	}
	& span:last-child, & div:last-child, & li {
		font-family: 'NotoSansTTFMedium';
	}
`;

export const TextBox = styled.div`
	width: 30rem;
	height: 100%;

	background-color: white;
`;

export const TagBox = styled.div`
	display: flex;
	gap: 1rem;
`;