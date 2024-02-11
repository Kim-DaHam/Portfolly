import { styled } from 'styled-components';

import { ButtonStyle } from '@/components/atoms/index';

export const Content = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const SearchSection = styled.section`
	width: 100%;
`;

export const ContentSection = styled.section`
	width: 100%;
	height: 100%;

	display: flex;
	flex-basis: 1;
	gap: 1rem;
	padding-top: 1rem;
`;

export const FilterGroup = styled.aside`
	width: 15rem;

	display: flex;
	flex-direction: column;
	gap: 0.2rem;

	padding-top: 0.5rem 0 1.25rem 0;
`;

export const Option = styled(ButtonStyle)<{$isClicked: boolean}>`
	height: 3.2rem;

	display: flex;
	align-items: center;
	padding: 0.5rem 0.75rem 0.5rem 0.75rem;

	background-color: ${props => props.$isClicked ? '#f5f5f5' : 'white'};
`;

export const ContentBox = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	flex-basis: 1;
	gap: 1.2rem;

	overflow-y: scroll;

	& span:first-child {
		font-weight: 600;
	}
`;

export const ItemList = styled.ul`
	list-style: none;
`;

export const Item = styled.li`
	width: 100%;

	display: flex;
	justify-content: space-between;
`;
