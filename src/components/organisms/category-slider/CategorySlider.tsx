import { useRef, useState } from "react";
import { CgOptions as FilterIcon } from "react-icons/cg";
import { FiArrowRight as ArrowRightIcon, FiArrowLeft as ArrowLeftIcon } from "react-icons/fi";
import Slider from "react-slick";

import SearchModal from "../modal/search-modal/SearchModal";

import { categories, sliderSettings } from "./CategorySlider.constants";
import { CategoryBox, CategoryRow, CategorySliderLayout, Divider, NextArrow, PrevArrow } from "./CategorySlider.styled";

import { RoundButton as FilterButton, RoundButton } from "@/components/atoms/button/Button.styled";
import { Section } from "@/types/portfolio";

type Props = {
	section: Section;
}

function CategorySlider({section}: Props) {
	const [filterOpen, setFilterOpen] = useState(false);
	const [currentCategory, setCurrentCategory] = useState('전체');
	const [showPrevArrow, setShowPrevArrow] = useState(false);
	const [showNextArrow, setShowNextArrow] = useState(true);

	const sliderRef = useRef(null);
	const categoryBoxRef = useRef(null);

	const openFilter = ()=> {
		setFilterOpen((prev)=>!prev);
	};

	const handleCategory = (event: React.MouseEvent<Element, MouseEvent>)=> {
		const eventTarget = event.target as HTMLElement;
		setCurrentCategory(eventTarget.innerText);
	};

	const handlePrev = ()=> {
		const categoryBox = categoryBoxRef.current! as HTMLElement;
		const categoryBoxWidth = categoryBox.offsetWidth;
		const slider = document.querySelector('.slick-list') as HTMLElement;

	};

	const handleNext = ()=> {
		const categoryBox = categoryBoxRef.current! as HTMLElement;
		const categoryBoxWidth = categoryBox.offsetWidth;
		const slider = document.querySelector('.slick-list') as HTMLElement;

		slider.style.left = '-50px';
	};

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

		<CategoryBox ref={categoryBoxRef}>
			<PrevArrow color='White' $showPrevArrow={showPrevArrow} onClick={handlePrev}>
				<ArrowLeftIcon size={16}/>
			</PrevArrow>
			<NextArrow color='White' $showNextArrow={showNextArrow} onClick={handleNext}>
				<ArrowRightIcon size={16}/>
			</NextArrow>

			<CategoryRow>
				<Slider {...sliderSettings} ref={sliderRef}>
					{categories[section].map((category, index)=>{
						let active = false;
						let id = '';
						if(category === currentCategory) active = true;
						if(index === 0) id = 'first-index';
						if(index === categories[section].length - 1) id = 'last-index';
						return (
							<RoundButton
								id={id}
								key={index}
								color='Transparency'
								$active={active}
								onClick={handleCategory}>
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