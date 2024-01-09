import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { initialProps, sliderSettings } from "./PortfolioThumbnail.constants";

import Image from "@/components/atoms/image/Image";
import { ArrowBox, NextArrow, PortfolioThumbnailLayout, PrevArrow, SliderContainer, SliderItem } from "@/components/molecules/portfolio-thumbnail/PortfolioThumbnail.styled";
import useHandleSlider from "@/hooks/slider/useHandleSlider";
import { section as sectionSlice } from "@/redux/sectionSlice";
import { Portfolio, Section } from "@/types/portfolio";
import { eventStopPropagation } from "@/utils/event";

export type Props = {
	section?: Section;
	portfolio: Portfolio;
}

export default function PortfolioThumnail({section, portfolio}: Props){
	const navigate = useNavigate();
	const sliderRef = useRef(null);

	const currentSection = useSelector(sectionSlice);

	const lastIndex = portfolio.thumbnailUrl.length - 1;
	const { handlePrev, handleNext, setSlider, showPrevArrow, showNextArrow } = useHandleSlider({...initialProps, lastIndex: lastIndex});

	const handlePortfolioThumbnail = () => {
		navigate(`/portfolios/${portfolio.id}`, {
			state: portfolio,
		});
	}

	useEffect(()=>{
		setSlider(sliderRef.current!);
	}, [])

	return(
		<PortfolioThumbnailLayout $section={section || currentSection} onClick={handlePortfolioThumbnail}>
			<SliderContainer>
				<ArrowBox onClick={eventStopPropagation}>
					<PrevArrow
						color='White'
						onClick={handlePrev}
						$showPrevArrow={showPrevArrow}>
					Prev</PrevArrow>
					<NextArrow
						color='White'
						onClick={handleNext}
						$showNextArrow={showNextArrow}>
					Next</NextArrow>
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
		</PortfolioThumbnailLayout>
	)
}