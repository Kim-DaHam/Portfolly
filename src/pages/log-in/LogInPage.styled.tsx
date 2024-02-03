import styled from "styled-components";

import * as mixins from '@/styles/mixins';

export const Wrapper = styled.main`
	width: 100%;
	height: 100vh;

	display: flex;

	padding: 0;
`;

export const LoginSection = styled.section`
	width: 50%;
	height: 100%;

	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 2rem;
`;

export const ImageSection = styled.section`
	width: 50%;
	height: 100%;

	background-color: black;
`;

export const ButtonGroup = styled.div`
	width: 28rem;

	${mixins.flexColumn}
	gap: 2.8rem;

	padding: 2rem;
	padding: 3rem 3rem;

	border: 1px solid gray;
	border-radius: 2rem;
`;

export const Box = styled.div`
	${mixins.flexColumn}
	gap: 1rem;
`;