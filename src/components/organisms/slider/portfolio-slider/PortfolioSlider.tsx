import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { initialProps, sliderSettings } from "./PortfolioSlider.constants";

import { Image } from "@/components";
import * as S from "@/components/organisms/slider/portfolio-slider/PortfolioSlider.styled";
import { useHandleSlider } from "@/hooks";
import { section as sectionSlice } from "@/redux/sectionSlice";
import { Portfolio, Section } from "@/types";
import { eventStopPropagation } from "@/utils";

export type Props = {
	section?: Section;
	portfolio: Portfolio;
}

const THUMBNAIL_PAGE = 3;

export default function PortfolioSlider({section, portfolio}: Props){
	const navigate = useNavigate();
	const sliderRef = useRef(null);

	const currentSection = useSelector(sectionSlice);

	const {
		handlePrev,
		handleNext,
		setSlider,
		showPrevArrow,
		showNextArrow
	} = useHandleSlider({...initialProps, lastIndex: THUMBNAIL_PAGE - 1});

	useEffect(()=>{
		setSlider(sliderRef.current!);
	}, [])

	return(
		<S.Wrapper $section={section || currentSection} onClick={()=>navigate(`/portfolios/${portfolio.id}`)}>
			<S.Content>
				<S.ArrowBox onClick={eventStopPropagation}>
					<S.PrevArrow
						color='white'
						shape='square'
						onClick={handlePrev}
						$showPrevArrow={showPrevArrow}>
					Prev</S.PrevArrow>
					<S.NextArrow
						color='white'
						shape='square'
						onClick={handleNext}
						$showNextArrow={showNextArrow}>
					Next</S.NextArrow>
				</S.ArrowBox>

				<Slider {...sliderSettings} ref={sliderRef}>
					{portfolio?.images.map((url, index)=>{
						if(index < 3) {
							return (
								<S.SliderItem key={index}>
									<Image src={url} size='auto' key={index}/>
								</S.SliderItem>
							)
						}
					})}
				</Slider>
			</S.Content>
		</S.Wrapper>
	)
}