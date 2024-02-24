import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { ErrorBoundary as ApiErrorBoundary } from "react-error-boundary";
import { useForm } from "react-hook-form";
import { FiArrowLeft as LeftArrowIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as S from "@/pages/search/SearchPage.styled";
import { section } from "@/redux/sectionSlice";

import { useDispatchSectionParameter } from "@/hooks";
import { getFilterQueryString, toUrlParameter } from "@/utils";

import { Text, PortfolioListSkeleton, ApiErrorFallback, SearchFilterBar } from "@/components";

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

				<SearchFilterBar filterList={filterList}/>
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