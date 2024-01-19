import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	width: 100%;
	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 0.5rem;

	position: absolute;
	z-index: 999;
	bottom: 2rem;
`;