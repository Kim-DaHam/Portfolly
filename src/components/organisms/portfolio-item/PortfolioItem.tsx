import { useEffect, useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { sliderSettings } from "./PortfolioItem.constants";

import Image from "@/components/atoms/image/Image";
import { ArrowBox, NextArrow, PortfolioItemLayout, PrevArrow, SliderBox, SliderItem } from "@/components/organisms/portfolio-item/PortfolioItem.styled";
import useHandleSlider from "@/hooks/useHandleSlider";
import { Portfolio, Section } from "@/types/portfolio";
import { InitialProps } from "@/types/slider";

type Props = {
	type: Section;
	portfolio: Portfolio;
}

const initialProps: InitialProps = {
	type: 'Short',
	slidesToShow: sliderSettings.slidesToShow!,
	slidesToScroll: sliderSettings.slidesToScroll!,
	speed: sliderSettings.speed!,
}

function PortfolioItem({type, portfolio}: Props){
	const sliderRef = useRef(null);
	const { handlePrev, handleNext, setSlick: setSlider, currentSlideIndex } = useHandleSlider(initialProps);

	useEffect(()=>{
		setSlider(sliderRef.current!);
	}, [])

	return(
		<PortfolioItemLayout type={type}>
			<SliderBox>
				<ArrowBox>
					<PrevArrow color='White' size='Fit' onClick={handlePrev} $current={currentSlideIndex}/>
					<NextArrow color='White' size='Fit' onClick={handleNext} $current={currentSlideIndex} $last={2}/>
				</ArrowBox>

				<Slider {...sliderSettings} ref={sliderRef}>
					{portfolio?.thumbnailUrl.map((url, index)=>{
						return (
							<SliderItem key={index}>
								<Image src={url} size='auto' key={index}/>
							</SliderItem>
						)
					})}
				</Slider>
			</SliderBox>
		</PortfolioItemLayout>
	)
}

export default PortfolioItem;