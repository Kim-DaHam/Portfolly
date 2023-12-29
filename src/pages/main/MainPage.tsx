import { useSelector } from "react-redux";

import { GridBox, GridItem, MainContainer, MainLayout, PortfolioSection, Summary, Title, TitleSection } from "./MainPage.styled";

import { mainPageSectionSummary } from '@/assets/data/phrase';
import PortfolioProfile from "@/components/molecules/profile/portfolio-profile/PortfolioProfile";
import CategorySlider from "@/components/organisms/category-slider/CategorySlider";
import Header from "@/components/organisms/header/Header";
import PortfolioItem from "@/components/organisms/portfolio-item/PortfolioItem";
import { section } from "@/redux/sectionSlice";

function MainPage(){
	const currentSection = useSelector(section);

	return(
		<MainLayout>
			<Header/>

			<MainContainer>
				<TitleSection>
					<Title>{currentSection}</Title>
					<Summary>{mainPageSectionSummary[currentSection]}</Summary>
				</TitleSection>

				<CategorySlider section={currentSection}/>

				<PortfolioSection>
					<GridBox>
						<GridItem>
							<PortfolioItem type='Android/iOS'/>
							<PortfolioProfile/>
						</GridItem>
					</GridBox>
				</PortfolioSection>

			</MainContainer>
		</MainLayout>
	)
}

export default MainPage;