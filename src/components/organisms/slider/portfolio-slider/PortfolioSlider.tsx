import { useEffect, useRef } from "react";
import { FiArrowRight as RightArrowIcon, FiArrowLeft as LeftArrowIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { initialProps, sliderSettings } from "@/components/organisms/slider/portfolio-slider/PortfolioSlider.constants";
import * as S from "@/components/organisms/slider/portfolio-slider/PortfolioSlider.styled";

import type { Portfolio, Section } from "@/types";

import { useHandleSlider } from "@/hooks";
import { eventStopPropagation, toUrlParameter } from "@/utils";

import { Image } from "@/components";

export type Props = {
	section: Section;
	portfolio: Portfolio;
}

export default function PortfolioSlider({section, portfolio}: Props){
	const navigate = useNavigate();
	const sliderRef = useRef(null);

	const THUMBNAIL_PAGE = section === 'Video' ? 1 : 3;
	const sectionClassName = toUrlParameter(section);

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
		<S.Wrapper
			$section={section}
			$isMoreThanOnePage={portfolio.images.length > 0}
			onClick={() => navigate(
				`/portfolios/${portfolio.id}`,
				{state: {prevPathname: 'main'}})
			}
		>
			<S.Content className={`${sectionClassName}-slider-box`}>
				<S.ArrowBox onClick={eventStopPropagation}>
					<S.PrevArrow
						color='gray'
						onClick={handlePrev}
						$showPrevArrow={showPrevArrow}
					>
						<LeftArrowIcon size={16} />
					</S.PrevArrow>
					<S.NextArrow
						color='gray'
						onClick={handleNext}
						$showNextArrow={showNextArrow}
					>
						<RightArrowIcon size={16} />
					</S.NextArrow>
				</S.ArrowBox>

				<Slider {...sliderSettings} ref={sliderRef}>
					{ section !== 'Video' && portfolio.images.length > 0 &&
						portfolio.images.map((url, index)=>{
							if(index > 3) return;
							return (
								<S.SliderItem key={index}>
										<Image src={url} size='100%' alt='slider image' />
								</S.SliderItem>
							);
					})}
					{ section === 'Video' &&
						<S.Video src={portfolio.videos[0]} />
					}
				</Slider>
			</S.Content>
		</S.Wrapper>
	)
}