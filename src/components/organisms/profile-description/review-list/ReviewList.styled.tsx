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
	gap: 2rem;

	padding-left: 2rem;

	background-color: lightpink;
`;

export const ReviewBox = styled.div`
	width: 60%;
	height: 10rem;

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

export const ProfileImage = styled.div`
	width: 60px;
	height: 60px;

	flex: none;

	background-color: white;
`;

export const Span = styled.span`
	font-size: 1.1rem;
	font-weight: 600;
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