import { useState } from "react";
import Slider, { Settings } from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ArrowBox, NextArrow, PortfolioItemContainer, PrevArrow, SliderBox } from "@/components/portfolio-item/PortfolioItem.styled";
import { Section } from "@/types/portfolio";

function PortfolioItem(props: {type: Section}){
	const type = props.type;

	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [beforeClicked, setBeforeClicked] = useState(false);
	const [slick, setSlick] = useState<Slider>();

	const handlePrev = ()=> {
		if(beforeClicked) return;
		setBeforeClicked((prev)=>!prev);
		slick?.slickPrev();
		setCurrentSlideIndex((prev) => prev - 1);
		setTimeout(()=>setBeforeClicked((prev)=>!prev), 200);
	};

  const handleNext = ()=> {
		if(beforeClicked) return;
		setBeforeClicked((prev)=>!prev);
		slick?.slickNext();
		setCurrentSlideIndex((prev) => prev + 1);
		setTimeout(()=>setBeforeClicked((prev)=>!prev), 200);
	};

	const settings: Settings = {
		dots: true,
		infinite: false,
		speed: 200,
		slidesToShow: 1,
		slidesToScroll: 1,
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

	return(
		<PortfolioItemContainer type={type}>
			<SliderBox>
				<ArrowBox>
					<PrevArrow onClick={handlePrev} current={currentSlideIndex}/>
					<NextArrow onClick={handleNext} current={currentSlideIndex} last={2}/>
				</ArrowBox>

				<Slider {...settings} ref={(element)=>{
					if(element !== null){
						setSlick(element);
					}
				}}>
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