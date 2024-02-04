import styled from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.main`
	${mixins.fullWidthHeight}

	position: fixed;
	top: 0;
	z-index: 100;

	overflow-y: auto;

	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

export const Introduce = styled.div`
	${mixins.fullScreen}
	${mixins.flexCenter}
	${mixins.flexColumn}
	padding: 0;
`;

export const TextBox = styled.div`
	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 1.5rem;
`;

export const Divider = styled.div`
	width: 100%;
	height: 5px;

	background-color: transparent;
`

export const Label = styled.span`
	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 0.2rem;

	& span {
		font-family: 'NotoSansTTFMedium';
	}
`;