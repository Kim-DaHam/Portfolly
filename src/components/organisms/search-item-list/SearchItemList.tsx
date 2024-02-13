import * as S from '@/components/organisms/search-item-list/SearchItemList.styled';

import { SearchItem } from '@/components';

type Props = {
	type: 'filter' | 'keyword';
};

export default function SearchItemList({ type }: Props) {
	return (
		<S.Wrapper>
			<SearchItem type='keyword' />
		</S.Wrapper>
	)
}