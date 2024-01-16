import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { initialProps, sliderSettings } from "./PortfolioThumbnail.constants";

import { Image } from "@/components";
import * as S from "@/components/molecules/portfolio-thumbnail/PortfolioThumbnail.styled";
import { useHandleSlider } from "@/hooks";
import { section as sectionSlice } from "@/redux/sectionSlice";
import { Portfolio, Section } from "@/types";
import { eventStopPropagation } from "@/utils";

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
					{portfolio?.thumbnailUrl.map((url, index)=>{
						return (
							<S.SliderItem key={index}>
								<Image src={url} size='auto' key={index}/>
							</S.SliderItem>
						)
					})}
				</Slider>
			</S.Content>
		</S.Wrapper>
	)
}