import { useEffect, useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { initialProps, sliderSettings } from "./PortfolioItem.constants";

import Image from "@/components/atoms/image/Image";
import { ArrowBox, NextArrow, PortfolioItemLayout, PrevArrow, SliderContainer, SliderItem } from "@/components/organisms/portfolio-item/PortfolioItem.styled";
import useHandleSlider from "@/hooks/useHandleSlider";
import { Portfolio, Section } from "@/types/portfolio";

export type Props = {
	type: Section;
	portfolio: Portfolio;
}

function PortfolioItem({type, portfolio}: Props){
	const sliderRef = useRef(null);
	const { handlePrev, handleNext, setSlick: setSlider, currentSlideIndex } = useHandleSlider(initialProps);
	const lastSliderIndex = portfolio?.thumbnailUrl.length - 1;

	useEffect(()=>{
		setSlider(sliderRef.current!);
	}, [])

	return(
		<PortfolioItemLayout type={type}>
			<SliderContainer>
				<ArrowBox>
					<PrevArrow
						color='White'
						size='Fit'
						onClick={handlePrev}
						$current={currentSlideIndex}
					>
						Prev
					</PrevArrow>
					<NextArrow
						color='White'
						size='Fit'
						onClick={handleNext}
						$current={currentSlideIndex}
						$last={lastSliderIndex}
					>
						Next
					</NextArrow>
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
			</SliderContainer>
		</PortfolioItemLayout>
	)
}

export default PortfolioItem;