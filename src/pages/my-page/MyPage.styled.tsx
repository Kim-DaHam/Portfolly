import { styled } from 'styled-components';

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.main`
	${mixins.fullScreen}
	${mixins.flexColumn}
	min-width: 1500px;

	padding: 7rem;

	gap: 1.5rem;

	& > svg { // <LeftArrowIcon>
		cursor: pointer;
	}
`;

export const ProfileSection = styled.section`
	width: 100%;
	height: fit-content;

	${mixins.flexColumn}
	gap: 1rem;
`;

export const ContentSection = styled.section`
	${mixins.fullWidthHeight}
	min-height: 30rem;

	display: flex;
	gap: 4rem;
`;

export const Description = styled.div`
	width: 100%;
	height: auto;

	flex-basis: 1;
`;

export const Aside = styled.aside`
	width: 28rem;
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

export const Divider = styled.div`
	border-bottom: 2px solid #f5f5f5;
	padding: 0.3rem;
`;