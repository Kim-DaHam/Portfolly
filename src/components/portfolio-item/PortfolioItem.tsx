import { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { sliderSettings } from "./PortfolioItem.constants";

import { ArrowBox, NextArrow, PortfolioItemContainer, PrevArrow, SliderBox } from "@/components/portfolio-item/PortfolioItem.styled";
import { Section } from "@/types/portfolio";


type Props = {
	type: Section;
}

function PortfolioItem({type}: Props){
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [isClickedJustBefore, setClickedJustBefore] = useState(false);
	const [slick, setSlick] = useState<Slider>();

	const handlePrev = ()=> {
		if(isClickedJustBefore) return;

		setClickedJustBefore(prev=>!prev);
		slick?.slickPrev();
		setCurrentSlideIndex(prev => prev - 1);

		setTimeout(()=>setClickedJustBefore(prev=>!prev), 200);
	};

  const handleNext = ()=> {
		if(isClickedJustBefore) return;

		setClickedJustBefore(prev=>!prev);
		slick?.slickNext();
		setCurrentSlideIndex(prev=>prev+1);

		setTimeout(()=>setClickedJustBefore(prev=>!prev), 200);
	};

	return(
		<PortfolioItemContainer type={type}>
			<SliderBox>
				<ArrowBox>
					<PrevArrow onClick={handlePrev} current={currentSlideIndex}/>
					<NextArrow onClick={handleNext} current={currentSlideIndex} last={2}/>
				</ArrowBox>

				<Slider {...sliderSettings}
					ref={(element)=>{
						if(element !== null){
							setSlick(element);
						}}
					}
				>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					{/* <SliderItem>

					</SliderItem> */}
				</Slider>
			</SliderBox>
		</PortfolioItemContainer>
	)
}

export default PortfolioItem;