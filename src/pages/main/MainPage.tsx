import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MainContainer, MainLayout, PortfolioSection, Summary, Title, TitleSection } from "./MainPage.styled";

import { mainPageSectionSummary } from '@/assets/data/phrase';
import CategorySlider from "@/components/organisms/category-slider/CategorySlider";
import Header from "@/components/organisms/header/Header";
import PortfolioListSkeleton from "@/components/skeletons/portfolio-list/PortfolioListSkeleton";
import { section as sectionSlice, setSection } from "@/redux/sectionSlice";
import { getSection } from "@/utils/portfolio";

const PortfolioList = lazy(() => import('@/components/organisms/portfolio-list/PortfolioList'));

function MainPage(){
	const [category, setCategory] = useState('전체');

	const dispatch = useDispatch();
	const currentSection = useSelector(sectionSlice);

	useEffect(()=>{
		const section = getSection();
		dispatch(setSection(section));
	});

	return(
		<MainLayout>
			<Header/>
			<MainContainer>
				<TitleSection>
					<Title>{currentSection}</Title>
					<Summary>{mainPageSectionSummary[currentSection]}</Summary>
				</TitleSection>

				<CategorySlider handlePortfolioList={setCategory}/>

				<PortfolioSection>
					<Suspense fallback={<PortfolioListSkeleton profile='portfolio-item'/>}>
						<PortfolioList category={category}/>
					</Suspense>
				</PortfolioSection>
			</MainContainer>
		</MainLayout>
	)
}

export default MainPage;