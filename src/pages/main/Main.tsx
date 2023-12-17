import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import { initialProps, sliderSettings } from "./Main.constants";
import { ArrowBox, CategoryBox, CategoryButton, CategoryRow, CategorySection, Divider, FilterButton, GridBox, GridItem, MainContainer, MainLayout, NextArrow, PortfolioSection, PrevArrow, Summary, Title, TitleSection } from "./Main.styled";

import Header from "@/components/header/Header";
import SearchModal from "@/components/modal/search-modal/SearchModal";
import PortfolioItem from "@/components/portfolio-item/PortfolioItem";
import Profile from "@/components/profile/Profile";
import useHandleSlider from "@/hooks/useHandleSlider";

function Main(){
	const [filterOpen, setFilterOpen] = useState(false);

	const sliderRef = useRef(null);
	const { handlePrev, handleNext, setSlick: setSlider, currentSlideIndex } = useHandleSlider(initialProps);

	const openFilter = ()=>{
		setFilterOpen((prev)=>!prev);
	}

	useEffect(()=> {
		setSlider(sliderRef.current!);
	}, [])

	return(
		<MainLayout>
			<Header/>
			<MainContainer>
				<TitleSection>
					<Title>Title</Title>
					<Summary>간단한 설명 blabla</Summary>
				</TitleSection>

				<CategorySection>
					<FilterButton onClick={openFilter}>
						Filters
					</FilterButton>

					{ filterOpen &&
						<SearchModal onClick={openFilter}/>
					}

					<Divider/>

					<CategoryBox>
						<ArrowBox>
							<PrevArrow current={currentSlideIndex} onClick={handlePrev}>Prev</PrevArrow>
							<NextArrow current={currentSlideIndex} last={11} onClick={handleNext}>Next</NextArrow>
						</ArrowBox>

						<CategoryRow>
							<Slider {...sliderSettings} ref={sliderRef}>
								<CategoryButton>1</CategoryButton>
								<CategoryButton>2</CategoryButton>
								<CategoryButton>3</CategoryButton>
								<CategoryButton>4</CategoryButton>
								<CategoryButton>5</CategoryButton>
								<CategoryButton>6</CategoryButton>
								<CategoryButton>7</CategoryButton>
								<CategoryButton>8</CategoryButton>
								<CategoryButton>9</CategoryButton>
								<CategoryButton>10</CategoryButton>
								<CategoryButton>11</CategoryButton>
								<CategoryButton>12</CategoryButton>
							</Slider>
						</CategoryRow>
					</CategoryBox>
				</CategorySection>

				<PortfolioSection>
					<GridBox column={6}>
						<GridItem>
							<PortfolioItem type='Android/iOS'/>
							<Profile type='Portfolio'/>
						</GridItem>

						<GridItem>
							<PortfolioItem type='Web'/>
							<Profile type='Portfolio'/>
						</GridItem>
					</GridBox>
				</PortfolioSection>

			</MainContainer>
		</MainLayout>
	)
}

export default Main;