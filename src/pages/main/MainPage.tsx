import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { ErrorBoundary as ApiErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";

import * as S from "@/pages/main/MainPage.styled";
import { section } from "@/redux/sectionSlice";

import { useDispatchSectionParameter } from "@/hooks";
import { getFilterQueryString } from "@/utils";

import { Text, CategorySlider, PortfolioListSkeleton, ApiErrorFallback } from "@/components";

const PortfolioCardList = lazy(() => import('@/components/organisms/portfolio-list/PortfolioList'));

export default function MainPage(){
	const currentSection = useSelector(section);
	const filter = getFilterQueryString();

	const { reset } = useQueryErrorResetBoundary();

	useDispatchSectionParameter();

	return(
		<S.Wrapper>
			<S.TitleSection>
				<Text size='headingMedium'>
					{currentSection}
				</Text>
			</S.TitleSection>

			<CategorySlider />

			<S.PortfolioSection>
				<ApiErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
					<Suspense fallback={<PortfolioListSkeleton type='portfolio-card' />}>
						<PortfolioCardList filter={filter} />
					</Suspense>
				</ApiErrorBoundary>
			</S.PortfolioSection>
		</S.Wrapper>
	)
}