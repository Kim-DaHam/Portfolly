import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense, lazy, useEffect } from "react";
import { ErrorBoundary as ApiErrorBoundary } from "react-error-boundary";
import { FiX as DeleteIcon , FiArrowLeft as LeftArrowIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as S from "@/pages/search/SearchPage.styled";
import { section } from "@/redux/sectionSlice";

import { useDispatchSectionParameter } from "@/hooks";
import { getFilterQueryString, toUrlParameter } from "@/utils";

import { Text, PortfolioListSkeleton, ApiErrorFallback, Selector } from "@/components";

const PortfolioCardList = lazy(() => import('@/components/organisms/portfolio-list/PortfolioList'));

export default function SearchPage(){
	const navigate = useNavigate();
	const currentSection = useSelector(section);

	const sectionParameter = toUrlParameter(currentSection);
	const filterList = getFilterQueryString();
	const mainFilterType = Object.keys(filterList)[0];
	const mainFilter = filterList[mainFilterType];

	const { reset } = useQueryErrorResetBoundary();

	useDispatchSectionParameter();

	const handleFilter = (removeFilterType: string) => {
		let url = `/search/${sectionParameter}?`;

		Object.keys(filterList).forEach((filterType: string) => {
			if(filterType === removeFilterType) return;
			url += `${filterType}.${filterList[filterType]}_`;
		});

		url = url.slice(0, -1);
		navigate(url);
	};

	return(
		<S.Wrapper>
			<S.TitleSection>
				<S.Box>
					<LeftArrowIcon
						size={20}
						onClick={() => navigate(`/main/${sectionParameter}`)}
					/>
					<Text size='bodyLarge'>
						홈
					</Text>
				</S.Box>

				<Text size='headingMedium'>
					Search "{mainFilter}"
				</Text>

				<S.Box>
					{ !filterList['appCategory'] ?
						<Selector
							size='10rem'
							type='category'
							placeholder='카테고리'
						/>
						:
						<S.FilterItem>
							{filterList['appCategory']}
							<S.Icon>
								<DeleteIcon onClick={() => handleFilter('appCategory')} />
							</S.Icon>
						</S.FilterItem>
					}

					{ mainFilterType !== 'keyword' && !filterList['keyword'] &&
						<S.Input
							placeholder='제목을 검색하세요'
						/>
					}
					{ mainFilterType !== 'keyword' && filterList['keyword'] &&
						<S.FilterItem>
							{filterList['keyword']}
							<S.Icon>
								<DeleteIcon onClick={() => handleFilter('keyword')} />
							</S.Icon>
						</S.FilterItem>
					}
				</S.Box>
			</S.TitleSection>

			<S.PortfolioSection>
				<ApiErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
					<Suspense fallback={<PortfolioListSkeleton type='portfolio-card' />}>
						<PortfolioCardList category={filterList['appCategory'] || '전체'} />
					</Suspense>
				</ApiErrorBoundary>
			</S.PortfolioSection>
		</S.Wrapper>
	)
}