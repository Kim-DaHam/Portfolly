import styled from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
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
	width: 100%;
	height: 100vh;

	${mixins.flexCenter}
	${mixins.flexColumn}

	background-color: aliceblue;
`;

export const Divider = styled.div`
	width: 100%;
	height: 5px;

	background-color: transparent;
`