import { useQueryClient } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { categories } from '@/assets/data/fields';
import * as S from '@/components/organisms/search-item-list/SearchItemList.styled';
import { Portfolio, Section } from '@/types';

import { searchKeyword, section } from '@/redux';
import { toUrlParameter, usePortfoliosCountQuery } from '@/utils';

import { SearchItem } from '@/components';

export type TSearchItem = 'category' | 'tag' | 'keyword';

type Props = {
	type: TSearchItem,
	onClose: () => void,
};

export default function SearchItemList({ type, onClose }: Props) {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const currentSection = useSelector(section);
	const keyword = useSelector(searchKeyword);
	const { data } = usePortfoliosCountQuery(currentSection);

	const portfolios: any = queryClient.getQueriesData({ queryKey: ['portfolios', currentSection], type: 'all' })[0][1];

	const handleClick = (filter: string) => {
		const sectionParameter = toUrlParameter(currentSection);
		const filterParameter = toUrlParameter(filter);

		if(type === 'category') {
			navigate(`/main/${sectionParameter}?filter=appCategory.${filterParameter}`);
		}
		if(type === 'tag') {
			navigate(`/search/${sectionParameter}?filter=tag.${filterParameter}`);
		}
		if(type === 'keyword') {
			navigate(`/search/${sectionParameter}?filter=keyword.${filterParameter}`);
		}
	};

	if(!data) return null;

	return (
		<S.Wrapper onClick={onClose}>
			{ type === 'category' &&
				categories[currentSection].map((category: string) => {
					const content = {
						title: category,
						count: data.categoryPerCount[category],
					};

					return (
						<SearchItem
							$type={type}
							$content={content}
							key={category}
							onClick={() => handleClick(content.title)}
						/>
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
						<SearchItem
							$type={type}
							$content={content}
							key={tag}
							onClick={() => handleClick(content.title)}
						/>
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
							<SearchItem
								$type={type}
								$content={content}
								onClick={() => navigate(`/portfolios/${portfolio.id}`)}
							/>
						)
					})}
					<SearchItem
						$type={type}
						$content={
							{
								title: `"${keyword}"`,
								summary: `"${keyword}"를 포함한 더 많은 결과 보기`,
							}
						}
						onClick={() => handleClick(keyword)}
					/>
				</>
			}
		</S.Wrapper>
	)
}