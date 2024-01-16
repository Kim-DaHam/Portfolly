import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";

import * as S from "./MainPage.styled";

import { mainPageSectionSummary } from '@/assets/data/phrase';
import { Header, CategorySlider, PortfolioListSkeleton } from "@/components";
import { useDispatchSectionParameter } from "@/hooks";
import { section } from "@/redux/sectionSlice";
import { getFilterQueryParameter } from "@/utils";

const PortfolioList = lazy(() => import('@/components/organisms/portfolio-list/PortfolioItemList'));

export default function MainPage(){
	useDispatchSectionParameter();

	const currentSection = useSelector(section);
	const currentCategory = getFilterQueryParameter().filterValue;

	return(
		<S.Wrapper>
			<Header/>
			<S.Content>
				<S.TitleSection>
					<S.Title>{currentSection}</S.Title>
					<S.Summary>{mainPageSectionSummary[currentSection]}</S.Summary>
				</S.TitleSection>

				<CategorySlider/>

				<S.PortfolioSection>
					<Suspense fallback={<PortfolioListSkeleton profile='portfolio-item'/>}>
						<PortfolioList category={currentCategory}/>
					</Suspense>
				</S.PortfolioSection>
			</S.Content>
		</S.Wrapper>
	)
}