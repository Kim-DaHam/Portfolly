import { styled } from 'styled-components';

import { ButtonStyle } from '@/components/atoms/index';
import * as mixins from '@/styles/mixins';

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 7rem;

	padding: 6rem;

	border-bottom: solid 1px black;
`

export const TextBox = styled.div`
	height: 100%;

	${mixins.flexCenter}
	${mixins.flexColumn}
	gap: 2rem;
	flex-basis: 35%;

	border: solid 1px black;
`;

export const PreviewBox = styled.div<{$column: number}>`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(${(props)=>props.$column}, 1fr);
	column-gap: 3rem;
	align-items: center;
	gap: 2rem;
	flex-basis: 65%;

	overflow: hidden;

	border: solid 1px black;
`;

export const ViewMoreButton = styled(ButtonStyle)`
	position: absolute;
	z-index: 200;
	right: 3rem;
`;