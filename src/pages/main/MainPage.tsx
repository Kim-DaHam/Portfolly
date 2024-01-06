import { Suspense, lazy, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { MainContainer, MainLayout, PortfolioSection, Summary, Title, TitleSection } from "./MainPage.styled";

import { mainPageSectionSummary } from '@/assets/data/phrase';
import CategorySlider from "@/components/organisms/category-slider/CategorySlider";
import Header from "@/components/organisms/header/Header";
import PortfolioListSkeleton from "@/components/skeletons/portfolio-list/PortfolioListSkeleton";
import { section, setSection } from "@/redux/sectionSlice";
import { sectionUrlParameterMap } from "@/utils/path";

const PortfolioList = lazy(() => import('@/components/organisms/portfolio-list/PortfolioList'));

export default function MainPage(){
	const [category, setCategory] = useState('전체');

	const dispatch = useDispatch();

	const params = useParams() as {section: string};
	const currentSection = useSelector(section);

	const getSectionUrlParameter = () => {
		const section = sectionUrlParameterMap[params.section];
		dispatch(setSection(section));
	};

	useEffect(()=>{
		window.addEventListener("popstate", getSectionUrlParameter);
    return () => window.removeEventListener("popstate", getSectionUrlParameter);
	}, []);

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