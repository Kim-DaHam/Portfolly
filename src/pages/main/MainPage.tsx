import { Suspense, lazy, useState } from "react";
import { useSelector } from "react-redux";

import { MainContainer, MainLayout, PortfolioSection, Summary, Title, TitleSection } from "./MainPage.styled";

import { mainPageSectionSummary } from '@/assets/data/phrase';
import CategorySlider from "@/components/organisms/category-slider/CategorySlider";
import Header from "@/components/organisms/header/Header";
import PortfolioListSkeleton from "@/components/skeletons/portfolio-list/PortfolioListSkeleton";
import { section } from "@/redux/sectionSlice";

const PortfolioList = lazy(() => import('@/components/organisms/portfolio-list/PortfolioList'));

function MainPage(){
	const [category, setCategory] = useState<string>('전체');

	const currentSection = useSelector(section);

	return(
		<MainLayout>
			<Header/>
			<MainContainer>
				<TitleSection>
					<Title>{currentSection}</Title>
					<Summary>{mainPageSectionSummary[currentSection]}</Summary>
				</TitleSection>

				<CategorySlider section={currentSection} handleCategory={setCategory}/>

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