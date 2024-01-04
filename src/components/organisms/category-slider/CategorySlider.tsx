import { useEffect, useRef, useState } from "react";
import { CgOptions as FilterIcon } from "react-icons/cg";
import { FiArrowRight as ArrowRightIcon, FiArrowLeft as ArrowLeftIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import SearchModal from "../modal/search-modal/SearchModal";

import { categories, sliderSettings } from "./CategorySlider.constants";
import { CategoryBox, CategoryRow, CategorySliderLayout, Divider, NextArrow, PrevArrow } from "./CategorySlider.styled";

import { RoundButton as FilterButton, RoundButton } from "@/components/atoms/button/Button.styled";
import { section } from "@/redux/sectionSlice";
import { SetState } from "@/types";
import { SectionEndPoint } from "@/types/portfolio";
import { getFiltersQuery, stringToUrl } from "@/utils/path";

type Props = {
	handlePortfolioList: SetState<string>;
}

function CategorySlider({handlePortfolioList}: Props) {
	const [filterOpen, setFilterOpen] = useState(false);
	const [currentCategory, setCurrentCategory] = useState('전체');
	const [showPrevArrow, setShowPrevArrow] = useState(false);
	const [showNextArrow, setShowNextArrow] = useState(true);

	const currentSection = useSelector(section);

	const navigate = useNavigate();
	const sliderRef = useRef(null);
	const categoryBoxRef = useRef(null);

	const handleCategory = (event: React.MouseEvent<Element, MouseEvent>)=> {
		const eventTarget = event.target as HTMLElement;
		const category = eventTarget.textContent as string;
		const categoryUrl = stringToUrl(category);

		setCurrentCategory(category);
		handlePortfolioList(category);

		if(category === '전체') {
			navigate(`/main/${SectionEndPoint[currentSection]}`);
			return;
		}
		navigate(`/main/${SectionEndPoint[currentSection]}?filter=appCategory.${categoryUrl}`);
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

	useEffect(()=>{
		const { filterValue } = getFiltersQuery();
		setCurrentCategory(filterValue);
		handlePortfolioList(filterValue);
	})

 return(
	<CategorySliderLayout>
		<FilterButton color='Gray' onClick={()=>setFilterOpen((prev)=>!prev)}>
			<FilterIcon size={20}/>
			Filters
		</FilterButton>

		{ filterOpen &&
			<SearchModal onClick={()=>setFilterOpen((prev)=>!prev)}/>
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
					{categories[currentSection].map((category, index)=>{
						let active = false;
						if(category === currentCategory) active = true;
						return (
							<RoundButton
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