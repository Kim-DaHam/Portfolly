import { useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { categories } from '@/assets/data/fields';
import * as S from '@/components/organisms/search-item-list/SearchItemList.styled';
import { Portfolio } from '@/types';

import { searchKeyword, section } from '@/redux';
import { usePortfoliosCountQuery } from '@/utils';

import { SearchItem } from '@/components';

export type TSearchItem = 'category' | 'tag' | 'keyword';

type Props = {
	type: TSearchItem,
};

export default function SearchItemList({ type }: Props) {

	const currentSection = useSelector(section);
	const queryClient = useQueryClient();

	const keyword = useSelector(searchKeyword);
	const { data } = usePortfoliosCountQuery(currentSection);
	const portfolios: any = queryClient.getQueriesData({ queryKey: ['portfolios', currentSection], type: 'all' })[0][1];

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
			{ type === 'keyword' &&
				<>
					{portfolios?.pages.flat().map((portfolio: Portfolio) => {
						if(!portfolio.title.includes(keyword)) return;
						const content = {
							title: portfolio.title,
							summary: portfolio.summary,
							thumbnail: portfolio.images[0],
						};
						return (
							<SearchItem type={type} content={content} />
						)
					})}
					<SearchItem
						type={type}
						content={
							{
								title: `"${keyword}"`,
								summary: `"${keyword}"를 포함한 더 많은 결과 보기`,
							}
						}
					/>
				</>
			}
		</S.Wrapper>
	)
}