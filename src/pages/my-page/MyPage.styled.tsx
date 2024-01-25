import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullScreen}
	${mixins.flexColumn}
`;

export const Content = styled.main`
	${mixins.fullScreen}
	${mixins.flexColumn}

	padding: 3rem 10rem 2rem 10rem;

	background-color: salmon;
`;

export const ProfileSection = styled.section`
	width: 100%;
	height: fit-content;

	${mixins.flexColumn}
	gap: 1rem;

	padding: 2rem 3rem 2rem 3rem;

	background-color: violet;
`;

export const ContentSection = styled.section`
	${mixins.fullWidthHeight}
	min-height: 30rem;

	display: flex;

	background-color: lightgreen;
`;

export const Description = styled.div`
	width: 100%;
	height: auto;

	flex-basis: 1;

	padding: 3rem 2rem 3rem 2rem;

	background-color: yellow;
`;

export const Aside = styled.aside`
	width: 24rem;
	height: 100%;

	padding: 1rem;

	background-color: white;
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 1rem;
`;

export const ButtonBox = styled.div`
 ${mixins.flexRow}
 justify-content: right;
`;