import { useState } from "react";
import { useSelector } from "react-redux";

import { GridBox, GridItem, MainContainer, MainLayout, PortfolioSection, Summary, Title, TitleSection } from "./MainPage.styled";

import { mainPageSectionSummary } from '@/assets/data/phrase';
import PortfolioProfile from "@/components/molecules/profile/portfolio-profile/PortfolioProfile";
import CategorySlider from "@/components/organisms/category-slider/CategorySlider";
import Header from "@/components/organisms/header/Header";
import PortfolioItem from "@/components/organisms/portfolio-item/PortfolioItem";
import { section } from "@/redux/sectionSlice";
import { Portfolio } from "@/types/portfolio";
import { usePortfoliosQuery } from "@/utils/api-service/portfolio";

function MainPage(){
	const [category, setCategory] = useState<string>('전체');

	const currentSection = useSelector(section);

	const { data } = usePortfoliosQuery(30, currentSection, { filterKey: 'category', filterValue: category});
	const portfolios = data;

	console.log(portfolios)

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
						{ portfolios && portfolios.map((portfolio: Portfolio)=>{
							return(
								<GridItem key={portfolio.id}>
									<PortfolioItem type={currentSection} portfolio={portfolio}/>
									<PortfolioProfile portfolio={portfolio}/>
								</GridItem>
							)
						})}
					</GridBox>
				</PortfolioSection>

			</MainContainer>
		</MainLayout>
	)
}

export default MainPage;