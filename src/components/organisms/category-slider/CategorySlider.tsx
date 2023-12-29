import { useEffect, useRef, useState } from "react";
import { CgOptions as FilterIcon } from "react-icons/cg";
import { FiArrowRight as ArrowRightIcon, FiArrowLeft as ArrowLeftIcon } from "react-icons/fi";
import Slider from "react-slick";

import SearchModal from "../modal/search-modal/SearchModal";

import { categories, initialProps, sliderSettings } from "./CategorySlider.constants";
import { CategoryBox, CategoryRow, CategorySliderLayout, Divider, NextArrow, PrevArrow } from "./CategorySlider.styled";

import { RoundButton as FilterButton, RoundButton } from "@/components/atoms/button/Button.styled";
import useHandleSlider from "@/hooks/useHandleSlider";
import { Section } from "@/types/portfolio";

type Props = {
	section: Section;
}

function CategorySlider({section}: Props) {
	const [filterOpen, setFilterOpen] = useState(false);
	const [currentCategory, setCurrentCategory] = useState('전체');

	const sliderRef = useRef(null);

	const { handlePrev, handleNext, setSlick: setSlider, currentSlideIndex } = useHandleSlider(initialProps);

	const openFilter = ()=> {
		setFilterOpen((prev)=>!prev);
	};

	const handleCategory = (event: React.MouseEvent<Element, MouseEvent>)=> {
		const eventTarget = event.target as HTMLElement;
		setCurrentCategory(eventTarget.innerText);
	}

	useEffect(()=> {
		setSlider(sliderRef.current!);
	}, [])

 return(
	<CategorySliderLayout>
		<FilterButton color='Gray' onClick={openFilter}>
			<FilterIcon size={20}/>
			Filters
		</FilterButton>

		{ filterOpen &&
			<SearchModal onClick={openFilter}/>
		}

		<Divider/>

		<CategoryBox>
			<PrevArrow color='White' $current={currentSlideIndex} onClick={handlePrev}>
				<ArrowLeftIcon size={16}/>
			</PrevArrow>
			<NextArrow color='White' $current={currentSlideIndex} $last={11} onClick={handleNext}>
				<ArrowRightIcon size={16}/>
			</NextArrow>

			<CategoryRow>
				<Slider {...sliderSettings} ref={sliderRef}>
					{categories[section].map((category, index)=>{
						let active = false;
						if(category === currentCategory) active = true;
						return (
							<RoundButton
								color='Transparency'
								key={index}
								onClick={handleCategory}
								active={active}>
								{category}
							</RoundButton>
						)
					}) }
				</Slider>
			</CategoryRow>
		</CategoryBox>
	</CategorySliderLayout>
 )
}

export default CategorySlider;