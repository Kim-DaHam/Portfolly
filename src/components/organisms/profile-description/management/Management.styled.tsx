import { styled } from "styled-components";

export const ManagementLayout = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;

	background-color: lightpink;
`;

export const Notice = styled.div`
	display: flex;
	gap: 0.5rem;
	justify-content: right;
	align-items: center;

	padding-right: 2rem;

	background-color: lightgreen;
`

export const SearchFilterSection = styled.div`
	width: 100%;
	height: 100%;

	padding: 0.5rem 1rem 0.5rem 1rem;

	margin-top: 1.5rem;

	background-color: violet;
`;

export const FilterForm = styled.form`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const DateSelector = styled.div`
	background-color: lime;
`;

export const SearchInput = styled.input`

`;

export const ContentSection = styled.div`
	width: 100%;
	height: 38rem;

	padding: 1rem;
	margin-top: 1rem;

	background-color: skyblue;
`;

export const List = styled.ul`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
`;

export const Item = styled.li`
	width: 100%;
	height: fit-content;

	display: flex;
	gap: 3rem;

	padding: 0.1rem 0 0.1rem;

	background-color: white;
`;