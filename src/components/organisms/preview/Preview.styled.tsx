import { styled } from 'styled-components';

import { ButtonStyle } from '@/components/atoms/index';
import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	${mixins.fullScreen}
	${mixins.flexCenter}

	justify-content: space-between;

	padding: 6rem;
`;

export const TextBox = styled.div`
	height: 100%;

	${mixins.flexCenter}
	${mixins.flexColumn}

	align-items: start;
	flex-basis: 33%;
	gap: 2rem;
`;

export const PreviewBox = styled.div<{$column: number}>`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(${(props)=>props.$column}, 1fr);
	column-gap: 3rem;

	align-items: center;
	flex-basis: 65%;
	gap: 2rem;

	overflow: hidden;
`;

export const ViewMoreButton = styled(ButtonStyle)`
	width: 5rem;
	height: 3.5rem;

	font-size: large;

	position: absolute;
	z-index: 200;
	right: 3rem;

	box-shadow : 0 0 1rem 1rem white;
`;