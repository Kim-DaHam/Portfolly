import { Suspense, lazy, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "./MainPage.styled";

import { mainPageSectionSummary } from '@/assets/data/phrase';
import CategorySlider from "@/components/organisms/category-slider/CategorySlider";
import Header from "@/components/organisms/header/Header";
import PortfolioListSkeleton from "@/components/skeletons/portfolio-list/PortfolioListSkeleton";
import { useDispatchSectionParameter } from "@/hooks";
import { section } from "@/redux/sectionSlice";
import { getFilterQueryParameter } from "@/utils/path";

const PortfolioList = lazy(() => import('@/components/organisms/portfolio-list/PortfolioList'));

export default function MainPage(){
	useDispatchSectionParameter();

	const currentSection = useSelector(section);
	const currentCategory = getFilterQueryParameter().filterValue;

	return(
		<S.MainLayout>
			<Header/>
			<S.MainContainer>
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
			</S.MainContainer>
		</S.MainLayout>
	)
}