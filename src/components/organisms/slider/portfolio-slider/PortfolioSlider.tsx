import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { initialProps, sliderSettings } from "@/components/organisms/slider/portfolio-slider/PortfolioSlider.constants";
import * as S from "@/components/organisms/slider/portfolio-slider/PortfolioSlider.styled";

import type { Portfolio, Section } from "@/types";

import { useHandleSlider } from "@/hooks";
import { eventStopPropagation, stringToUrlParameter } from "@/utils";

import { Image } from "@/components";

export type Props = {
	section: Section;
	portfolio: Portfolio;
}

export default function PortfolioSlider({section, portfolio}: Props){
	const navigate = useNavigate();
	const sliderRef = useRef(null);

	const THUMBNAIL_PAGE = section === 'Video' ? 1 : 3;
	const sectionName = stringToUrlParameter(section);

	const {
		handlePrev,
		handleNext,
		setSlider,
		showPrevArrow,
		showNextArrow
	} = useHandleSlider({...initialProps, lastIndex: THUMBNAIL_PAGE - 1});

	useEffect(()=>{
		setSlider(sliderRef.current!);
	}, []);

	return(
		<S.Wrapper $section={section} onClick={() => navigate(`/portfolios/${portfolio.id}`)}>
			<S.Content className={`${sectionName}-slider-box`}>
				<S.ArrowBox onClick={eventStopPropagation}>
					<S.PrevArrow
						color='white'
						onClick={handlePrev}
						$showPrevArrow={showPrevArrow}
					>
						Prev
					</S.PrevArrow>
					<S.NextArrow
						color='white'
						onClick={handleNext}
						$showNextArrow={showNextArrow}
					>
						Next
					</S.NextArrow>
				</S.ArrowBox>

				<Slider {...sliderSettings} ref={sliderRef}>
					{portfolio?.images.map((url, index)=>{
						if(index < 3) {
							return (
								<S.SliderItem key={index}>
									{ section !== 'Video' ?
										<Image src={url} size='100%' alt='slider image' />
										:
										<S.Video src={url} />
									}
								</S.SliderItem>
							)
						}
					})}
				</Slider>
			</S.Content>
		</S.Wrapper>
	)
}