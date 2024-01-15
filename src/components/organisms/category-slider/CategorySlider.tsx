import { useEffect, useRef, useState } from "react";
import { CgOptions as FilterIcon } from "react-icons/cg";
import { FiArrowRight as ArrowRightIcon, FiArrowLeft as ArrowLeftIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import SearchModal from "../modal/search-modal/SearchModal";

import { categories } from "./CategorySlider.constants";
import { CategoryBox, CategorySliderLayout, Divider, NextArrow, PrevArrow, Slider } from "./CategorySlider.styled";

import { Button } from "@/components/atoms/index";
import useCategorySlider from "@/hooks/useCategorySlider";
import useModal from "@/hooks/useModal";
import { section } from "@/redux/sectionSlice";
import { getFilterQueryParameter, stringToUrlParameter } from "@/utils/path";

export default function CategorySlider() {
	const [currentCategory, setCurrentCategory] = useState('전체');

	const { isModalOpen, handleModal } = useModal();
	const { showPrevArrow, showNextArrow, handlePrev, handleNext, lastIndex, setSlider, setCategoryBox } = useCategorySlider();

	const currentSection = useSelector(section);

	const navigate = useNavigate();
	const sliderRef = useRef(null);
	const categoryBoxRef = useRef(null);

	const handleCategory = (event: React.MouseEvent) => {
		const category = event.currentTarget.textContent as string;
		const sectionParameter = stringToUrlParameter(currentSection);
		const categoryParameter = stringToUrlParameter(category);

		setCurrentCategory(category);

		if(category === '전체') {
			navigate(`/main/${sectionParameter}`);
			return;
		}
		navigate(`/main/${sectionParameter}?filter=appCategory.${categoryParameter}`);
	};

	const getCategoryQueryParameter = () => {
		const category = getFilterQueryParameter().filterValue;
		setCurrentCategory(category);
	}

	useEffect(()=>{
		setSlider(sliderRef.current!);
		setCategoryBox(categoryBoxRef.current!);
		getCategoryQueryParameter();

		window.addEventListener("popstate", getCategoryQueryParameter);
    return () => window.removeEventListener("popstate", getCategoryQueryParameter);
	}, [currentSection]);

 return(
	<CategorySliderLayout>
		<Button color='gray' shape='square' onClick={handleModal}>
			<FilterIcon size={20}/>
			Filters
		</Button>

		{ isModalOpen &&
			<SearchModal onClick={handleModal}/>
		}

		<Divider/>

		<CategoryBox ref={categoryBoxRef}>
			<PrevArrow color='white' shape='round' $showPrevArrow={showPrevArrow} onClick={handlePrev}>
				<ArrowLeftIcon size={16}/>
			</PrevArrow>
			<NextArrow color='white' shape='round' $showNextArrow={showNextArrow} onClick={handleNext}>
				<ArrowRightIcon size={16}/>
			</NextArrow>

			<Slider ref={sliderRef}>
				{categories[currentSection].map((category, index)=>{
					return (
						<Button
							className={(index === lastIndex) ? 'last-category' : ''}
							key={index}
							color='transparent'
							shape='round'
							onClick={handleCategory}
							$active={(category === currentCategory) ? true : false}>
						{category}
						</Button>
					)
				}) }
			</Slider>
		</CategoryBox>
	</CategorySliderLayout>
 )
}