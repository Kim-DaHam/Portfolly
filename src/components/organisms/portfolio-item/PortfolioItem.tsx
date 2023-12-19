import { useEffect, useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { sliderSettings } from "./PortfolioItem.constants";

import { ArrowBox, NextArrow, PortfolioItemContainer, PrevArrow, SliderBox } from "@/components/organisms/portfolio-item/PortfolioItem.styled";
import useHandleSlider from "@/hooks/useHandleSlider";
import { Section } from "@/types/portfolio";
import { InitialProps } from "@/types/slider";

type Props = {
	type: Section;
}

const initialProps: InitialProps = {
	type: 'Short',
	slidesToShow: sliderSettings.slidesToShow!,
	slidesToScroll: sliderSettings.slidesToScroll!,
	speed: sliderSettings.speed!,
}

function PortfolioItem({type}: Props){
	const sliderRef = useRef(null);
	const { handlePrev, handleNext, setSlick: setSlider, currentSlideIndex } = useHandleSlider(initialProps);

	useEffect(()=>{
		setSlider(sliderRef.current!);
	}, [])

	return(
		<PortfolioItemContainer type={type}>
			<SliderBox>
				<ArrowBox>
					<PrevArrow onClick={handlePrev} current={currentSlideIndex}/>
					<NextArrow onClick={handleNext} current={currentSlideIndex} last={2}/>
				</ArrowBox>

				<Slider {...sliderSettings} ref={sliderRef}>
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