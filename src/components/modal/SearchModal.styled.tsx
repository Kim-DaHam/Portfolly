import { styled } from 'styled-components';

export const ModalLayout = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;

	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;

	background-color: #0000007e;
`;

export const ModalBox = styled.div`
	width: 50%;
	height: 80%;

	display: flex;
	flex-direction: column;

	border-radius: 16px;
	background-color: white;
`;

export const SearchContainer = styled.section`
	width: 100%;

	padding: 0.75rem 1.25rem 0.75rem 1.25rem;
`

export const ContentContainer = styled.section`
	width: 100%;
	height: 100%;

	display: flex;
	gap: 2rem;

	padding: 0 1.25rem 1rem 1.25rem;
`

export const FilterGroup = styled.aside`
	display: flex;
	flex-direction: column;
	flex-basis: 20%;
`;

export const OptionButton = styled.button`
	display: flex;
`;

export const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 80%;
	row-gap: 1rem;
`;

export const ItemList = styled.ul`
	list-style: none;
`;

export const Item = styled.li`
	width: 100%;

	display: flex;
	justify-content: space-between;
`;

export const FlexBox = styled.div`
	width: 100%;

	display: flex;
	gap: 2rem;
`;
