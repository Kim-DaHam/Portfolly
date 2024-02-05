import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";

import { mainPageSectionSummary } from '@/assets/data/phrase';
import { section } from "@/redux/sectionSlice";

import * as S from "./MainPage.styled";

import { useDispatchSectionParameter } from "@/hooks";
import { getFilterQueryString } from "@/utils";

import { Text, CategorySlider, PortfolioListSkeleton } from "@/components";

const PortfolioList = lazy(() => import('@/components/organisms/portfolio-list/PortfolioItemList'));

export default function MainPage(){
	const currentSection = useSelector(section);
	const currentCategory = getFilterQueryString().filterValue;

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
					<Suspense fallback={<PortfolioListSkeleton type='portfolio-card' />}>
						<PortfolioList category={currentCategory} />
					</Suspense>
				</S.PortfolioSection>
			</S.Content>
		</S.Wrapper>
	)
}