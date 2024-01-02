import { useRef, useState } from "react";
import { useSelector } from "react-redux";

import { GridBox, GridItem, MainContainer, MainLayout, PortfolioSection, Summary, Title, TitleSection } from "./MainPage.styled";

import { mainPageSectionSummary } from '@/assets/data/phrase';
import PortfolioProfile from "@/components/molecules/profile/portfolio-profile/PortfolioProfile";
import CategorySlider from "@/components/organisms/category-slider/CategorySlider";
import Header from "@/components/organisms/header/Header";
import PortfolioItem from "@/components/organisms/portfolio-item/PortfolioItem";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { section } from "@/redux/sectionSlice";
import { Portfolio } from "@/types/portfolio";
import { usePortfoliosQuery } from "@/utils/api-service/portfolio";

const LOADED_DATA_COUNT = 10;
const LIMIT = 100;

function MainPage(){
	const [category, setCategory] = useState<string>('전체');
	const [lastPage, setLastPage] = useState(LOADED_DATA_COUNT);
	const [loadNextPage, setLoadNextPage] = useState(true);

	const currentSection = useSelector(section);

	const { data } = usePortfoliosQuery(LIMIT, currentSection, { filterKey: 'category', filterValue: category});
	const portfolios = data;

	console.log(portfolios)

	const loadNewPortfolios = ()=> {
		if(lastPage === LIMIT) {
			setLoadNextPage(false);
		}
		setLastPage(prev=>prev + LOADED_DATA_COUNT);
	}

	const setObservationTarget = useIntersectionObserver(loadNewPortfolios);

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
					<GridBox>
						{ portfolios && portfolios.map((portfolio: Portfolio, index: number)=>{
							if(index < lastPage) {
								return(
									<GridItem key={portfolio.id}>
										<PortfolioItem type={currentSection} portfolio={portfolio}/>
										<PortfolioProfile portfolio={portfolio}/>
									</GridItem>
								)
							}})
						}
						{ loadNextPage &&
							<div ref={setObservationTarget}></div>
						}
					</GridBox>
				</PortfolioSection>
			</MainContainer>
		</MainLayout>
	)
}

export default MainPage;