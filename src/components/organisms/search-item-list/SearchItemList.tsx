import { useSelector } from 'react-redux';

import * as S from '@/components/organisms/search-item-list/SearchItemList.styled';

import { section } from '@/redux';
import { usePortfoliosCountQuery } from '@/utils';

import { SearchItem } from '@/components';

type Props = {
	type: 'filter' | 'keyword';
};

export default function SearchItemList({ type }: Props) {

	const currentSection = useSelector(section);

	const { data } = usePortfoliosCountQuery(currentSection);
	console.log(data);

	return (
		<S.Wrapper>
			<SearchItem type={type} />
		</S.Wrapper>
	)
}