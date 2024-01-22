import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	width: 100%;
	${mixins.flexColumn}
	gap: 1rem;

	background-color: beige;
`;

export const ProfileBox = styled.div`
	width: 100%;
	height: fit-content;

	display: flex;
	gap: 1rem;

	background-color: brown;
`;

export const ContentBox = styled.div`
	${mixins.fullWidthHeight}

	flex-basis: 1;

	padding-left: 1rem;

	background-color: #b3d2ee;
`;

export const Box = styled.div`
	${mixins.flexColumn}
	justify-content: center;
	gap: 0.5rem;
`;