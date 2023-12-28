import { useEffect, useRef, useState } from "react";
import { CgOptions as FilterIcon } from "react-icons/cg";
import { useSelector } from "react-redux";
import Slider from "react-slick";

import { categories, initialProps, sliderSettings } from "./MainPage.constants";
import { ArrowBox, CategoryBox, CategoryRow, CategorySection, Divider, GridBox, GridItem, MainContainer, MainLayout, NextArrow, PortfolioSection, PrevArrow, Summary, Title, TitleSection } from "./MainPage.styled";

import { mainPageSectionSummary } from '@/assets/data/phrase';
import { RoundButton as FilterButton, RoundButton } from "@/components/atoms/button/Button.styled";
import PortfolioProfile from "@/components/molecules/profile/portfolio-profile/PortfolioProfile";
import Header from "@/components/organisms/header/Header";
import SearchModal from "@/components/organisms/modal/search-modal/SearchModal";
import PortfolioItem from "@/components/organisms/portfolio-item/PortfolioItem";
import useHandleSlider from "@/hooks/useHandleSlider";
import { section } from "@/redux/sectionSlice";

function Main(){
	const [filterOpen, setFilterOpen] = useState(false);
	const [category, setCategory] = useState('All');

	const sliderRef = useRef(null);
	const { handlePrev, handleNext, setSlick: setSlider, currentSlideIndex } = useHandleSlider(initialProps);

	const currentSection = useSelector(section);

	const openFilter = ()=> {
		setFilterOpen((prev)=>!prev);
	};

	const handleCategory = (event: React.MouseEvent<Element, MouseEvent>)=> {
		const eventTarget = event.target as HTMLElement;
		setCategory(eventTarget.innerText);
	}

	useEffect(()=> {
		setSlider(sliderRef.current!);
	}, [])

	return(
		<MainLayout>
			<Header/>
			<MainContainer>
				<TitleSection>
					<Title>{currentSection}</Title>
					<Summary>{mainPageSectionSummary[currentSection]}</Summary>
				</TitleSection>

				<CategorySection>
					<FilterButton color='Gray' onClick={openFilter}>
						<FilterIcon size={20}/>
						Filters
					</FilterButton>

					{ filterOpen &&
						<SearchModal onClick={openFilter}/>
					}

					<Divider/>

					<CategoryBox>
						<ArrowBox>
							<PrevArrow $current={currentSlideIndex} onClick={handlePrev}>Prev</PrevArrow>
							<NextArrow $current={currentSlideIndex} $last={11} onClick={handleNext}>Next</NextArrow>
						</ArrowBox>

						<CategoryRow>
							<Slider {...sliderSettings} ref={sliderRef}>
								{categories[currentSection].map((category, index)=>{
									return <RoundButton
														color='Transparency'
														key={index}
														onClick={handleCategory}
														value={category}>
														{category}
													</RoundButton>
								}) }
							</Slider>
						</CategoryRow>
					</CategoryBox>
				</CategorySection>

				<PortfolioSection>
					<GridBox>
						<GridItem>
							<PortfolioItem type='Android/iOS'/>
							<PortfolioProfile/>
						</GridItem>

						<GridItem>
							<PortfolioItem type='Android/iOS'/>
							<PortfolioProfile/>
						</GridItem>

						<GridItem>
							<PortfolioItem type='Android/iOS'/>
							<PortfolioProfile/>
						</GridItem>

						<GridItem>
							<PortfolioItem type='Android/iOS'/>
							<PortfolioProfile/>
						</GridItem>

						<GridItem>
							<PortfolioItem type='Android/iOS'/>
							<PortfolioProfile/>
						</GridItem>

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

export default Main;