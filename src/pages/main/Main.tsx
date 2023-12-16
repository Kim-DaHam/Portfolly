import { LegacyRef, useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";

import { ArrowBox, CategoryBox, CategoryButton, CategoryRow, CategorySection, Divider, FilterButton, GridBox, MainContainer, MainLayout, NextArrow, PortfolioSection, PrevArrow, Summary, Title, TitleSection } from "./Main.styled";

import Header from "@/components/header/Header";
import SearchModal from "@/components/modal/SearchModal";
import PortfolioItem from "@/components/portfolio-item/PortfolioItem";


function Main(){
	const [currentSlideIndex, setCurrentSlideIndex] = useState(7);
	const [beforeClicked, setBeforeClicked] = useState(false);
	const [slick, setSlick] = useState<Slider>();
	const [filterOpen, setFilterOpen] = useState(false);

	const slickRef :LegacyRef<Slider> | null = useRef(null);

	const settings: Settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 3,
		draggable: false,
		fade: false,
		arrows: false,
		vertical: false,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 960, // 화면 사이즈 960px일 때
				settings: {
					dots: false,
					arrows: false,
				}
			}
		]
	}

	console.log(currentSlideIndex)

	const handlePrev = ()=> {
		if(beforeClicked) return;
		setBeforeClicked((prev)=>!prev);
		slick?.slickPrev();
		setCurrentSlideIndex((prev) => {
			if(prev - 3 < 7) return 7;
			else return (prev - 3);
		});
		setTimeout(()=>setBeforeClicked((prev)=>!prev), 500);
	};

  const handleNext = ()=> {
		if(beforeClicked) return;
		setBeforeClicked((prev)=>!prev);
		slick?.slickNext();
		setCurrentSlideIndex((prev) => {
			if(prev + 3 > 11) return 11
			else return (prev + 3);
		});
		setTimeout(()=>setBeforeClicked((prev)=>!prev), 500);
	};

	useEffect(()=> {
		setSlick(slickRef.current!);
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
					<FilterButton onClick={()=> setFilterOpen((prev)=>!prev)}>
						Filters
					</FilterButton>

					{ filterOpen &&
						<SearchModal onClick={()=> setFilterOpen((prev)=>!prev)}/>
					}

					<Divider/>

					<CategoryBox>
						<ArrowBox>
							<PrevArrow current={currentSlideIndex} onClick={handlePrev}>Prev</PrevArrow>
							<NextArrow current={currentSlideIndex} last={11} onClick={handleNext}>Next</NextArrow>
						</ArrowBox>

						<CategoryRow>
							<Slider {...settings} ref={slickRef}>
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
						<PortfolioItem type='Android/iOS'/>
						<PortfolioItem type='Android/iOS'/>
						<PortfolioItem type='Android/iOS'/>
						<PortfolioItem type='Android/iOS'/>
						<PortfolioItem type='Android/iOS'/>
						<PortfolioItem type='Android/iOS'/>
						<PortfolioItem type='Android/iOS'/>
						<PortfolioItem type='Android/iOS'/>
						<PortfolioItem type='Android/iOS'/>
					</GridBox>
				</PortfolioSection>

			</MainContainer>

		</MainLayout>
	)
}

export default Main;