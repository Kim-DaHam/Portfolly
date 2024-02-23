import { useSelector } from 'react-redux';

import { categories } from '@/assets/data/fields';
import * as S from '@/components/organisms/search-item-list/SearchItemList.styled';

import { section } from '@/redux';
import { usePortfoliosCountQuery } from '@/utils';

import { SearchItem } from '@/components';

export type TSearchItem = 'category' | 'tag' | 'keyword';

type Props = {
	type: TSearchItem,
};

export default function SearchItemList({ type }: Props) {

	const currentSection = useSelector(section);

	const { data } = usePortfoliosCountQuery(currentSection);

	if(!data) return null;

	return (
		<S.Wrapper>
			{ type === 'category' &&
				categories[currentSection].map((category: string) => {
					const content = {
						title: category,
						count: data.categoryPerCount[category],
					};

					return (
						<SearchItem type={type} content={content} key={category} />
					)
				})
			}
			{	type === 'tag' &&
				Object.keys(data.tagPerCount).map((tag: string) => {
					const content = {
						title: tag,
						count: data.tagPerCount[tag],
					};

					return (
						<SearchItem type={type} content={content} key={tag} />
					)
				})
			}
			{/* { type === 'keyword' &&
				<SearchItem type={type} />
			} */}
		</S.Wrapper>
	)
}