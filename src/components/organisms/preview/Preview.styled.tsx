import { styled } from 'styled-components';

export const PreviewLayout = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 7rem;

	padding: 6rem;

	border-bottom: solid 1px black;
`

export const FlexBox = styled.div`
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
	flex-basis: 35%;

	border: solid 1px black;
`;

export const PreviewRow = styled.div<{column: number}>`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(${(props)=>props.column}, 1fr);
	column-gap: 3rem;
	align-items: center;
	gap: 2rem;
	flex-basis: 65%;

	overflow: hidden;

	border: solid 1px black;
`;

export const ViewMoreButton = styled.button`
	width: 3rem;
	height: 2rem;

	position: absolute;
	right: 3rem;
`;