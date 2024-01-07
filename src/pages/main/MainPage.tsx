import { Suspense, lazy, useState } from "react";
import { useSelector } from "react-redux";

import { MainContainer, MainLayout, PortfolioSection, Summary, Title, TitleSection } from "./MainPage.styled";

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
		<MainLayout>
			<Header/>
			<MainContainer>
				<TitleSection>
					<Title>{currentSection}</Title>
					<Summary>{mainPageSectionSummary[currentSection]}</Summary>
				</TitleSection>

				<CategorySlider/>

				<PortfolioSection>
					<Suspense fallback={<PortfolioListSkeleton profile='portfolio-item'/>}>
						<PortfolioList category={currentCategory}/>
					</Suspense>
				</PortfolioSection>
			</MainContainer>
		</MainLayout>
	)
}