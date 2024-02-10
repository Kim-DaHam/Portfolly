import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { ErrorBoundary as ApiErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";

import { mainPageSectionSummary } from '@/assets/data/phrase';
import { section } from "@/redux/sectionSlice";

import * as S from "./MainPage.styled";

import { useDispatchSectionParameter } from "@/hooks";
import { getFilterQueryString } from "@/utils";

import { Text, CategorySlider, PortfolioListSkeleton, ApiErrorFallback } from "@/components";

const PortfolioCardList = lazy(() => import('@/components/organisms/portfolio-list/PortfolioList'));

export default function MainPage(){
	const currentSection = useSelector(section);
	const currentCategory = getFilterQueryString().filterValue;

	const { reset } = useQueryErrorResetBoundary();

	useDispatchSectionParameter();

	return(
		<S.Wrapper>
			<S.Content>
				<S.TitleSection>
					<Text size='headingMedium'>{currentSection}</Text>
					<Text size='bodyLarge'>{mainPageSectionSummary[currentSection]}</Text>
				</S.TitleSection>

				<CategorySlider/>

				<S.PortfolioSection>
					<ApiErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
						<Suspense fallback={<PortfolioListSkeleton type='portfolio-card' />}>
							<PortfolioCardList category={currentCategory} />
						</Suspense>
					</ApiErrorBoundary>
				</S.PortfolioSection>
			</S.Content>
		</S.Wrapper>
	)
}