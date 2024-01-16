import styled from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.footer`
	width: 100%;
	height: 4rem;

	${mixins.flexCenter}

	border-top: 1px solid gray;

	background-color: #ffffff;
`;