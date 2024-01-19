import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullScreen}
	${mixins.flexColumn}
`;

export const Content = styled.div`
	${mixins.flexCenter}
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

export const NavigationSection = styled.section`
	width: 100%;
	height: 5rem;

	display: flex;
	gap: 1.2rem;
	align-items: center;

	padding: 1rem 2rem 0 2rem;

	background-color: skyblue;
`;

export const Navigation = styled.a`
	height: 100%;

	display: flex;
	align-items: center;

	cursor: pointer;

	font-size: 1.1rem;
	border-bottom: 3px solid black;
`;

export const ContentContainer = styled.div`
	${mixins.fullWidthHeight}

	display: flex;

	background-color: lightgreen;
`;

export const DescriptionSection = styled.section`
	${mixins.fullWidthHeight}

	flex-basis: 1;

	padding: 3rem 2rem 3rem 2rem;

	background-color: yellow;
`;

export const InformationSection = styled.aside`
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