import { styled } from 'styled-components';

import { ButtonStyle } from '@/components/atoms/index';

export const Content = styled.div`
`;

export const SearchSection = styled.section`
	width: 100%;

	padding: 0.75rem 1.25rem 0.75rem 1.25rem;
`

export const ContentSection = styled.section`
	width: 100%;
	height: 100%;

	display: flex;
	gap: 2rem;

	padding: 0 1.25rem 1rem 1.25rem;
`

export const FilterGroup = styled.aside`
	display: flex;
	flex-direction: column;
`;

export const Option = styled(ButtonStyle)`
	display: flex;
	align-items: center;
`;

export const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const ItemList = styled.ul`
	list-style: none;
`;

export const Item = styled.li`
	width: 100%;

	display: flex;
	justify-content: space-between;
`;
