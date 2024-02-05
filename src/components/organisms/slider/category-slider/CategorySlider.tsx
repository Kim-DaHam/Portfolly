import { useEffect, useRef, useState } from "react";
import { CgOptions as FilterIcon } from "react-icons/cg";
import { FiArrowRight as ArrowRightIcon, FiArrowLeft as ArrowLeftIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { categories } from "@/assets/data/fields";
import * as S from "@/components/organisms/slider/category-slider/CategorySlider.styled";
import { section } from "@/redux/sectionSlice";

import { useModal, useCategorySlider } from "@/hooks";
import { getFilterQueryString, toUrlParameter } from "@/utils";

import { Button, SearchModal } from "@/components";

export default function CategorySlider() {
	const [currentCategory, setCurrentCategory] = useState('전체');

	const currentSection = useSelector(section);

	const navigate = useNavigate();
	const sliderRef = useRef(null);
	const categoryBoxRef = useRef(null);

	const { isModalOpen, handleModal } = useModal();
	const {
		showPrevArrow,
		showNextArrow,
		handlePrev,
		handleNext,
		setSlider,
		setCategoryBox,
		lastIndex,
	} = useCategorySlider(currentSection);

	const handleCategory = (event: React.MouseEvent) => {
		const category = event.currentTarget.textContent as string;
		const sectionParameter = toUrlParameter(currentSection);
		const categoryParameter = toUrlParameter(category);

		setCurrentCategory(category);

		if(category === '전체') {
			navigate(`/main/${sectionParameter}`);
			return;
		}
		navigate(`/main/${sectionParameter}?filter=appCategory.${categoryParameter}`);
	};

	const getCurrentCategory = () => {
		const category = getFilterQueryString().filterValue;
		setCurrentCategory(category);
	}

	useEffect(()=>{
		setSlider(sliderRef.current!);
		setCategoryBox(categoryBoxRef.current!);
		getCurrentCategory();

		window.addEventListener("popstate", getCurrentCategory);
    return () => window.removeEventListener("popstate", getCurrentCategory);
	}, [currentSection]);

 return(
	<S.Wrapper>
		<Button color='gray' shape='round' onClick={handleModal}>
			<FilterIcon size={20}/>
			Filters
		</Button>

		{ isModalOpen &&
			<SearchModal onClick={handleModal}/>
		}

		<S.Divider/>

		<S.CategoryBox ref={categoryBoxRef}>
			<S.PrevArrow color='white' shape='round' $showPrevArrow={showPrevArrow} onClick={handlePrev}>
				<ArrowLeftIcon size={16}/>
			</S.PrevArrow>
			<S.NextArrow color='white' shape='round' $showNextArrow={showNextArrow} onClick={handleNext}>
				<ArrowRightIcon size={16}/>
			</S.NextArrow>

			<S.Slider ref={sliderRef}>
				{ ['전체', ...categories[currentSection]].map((category, index)=>{
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
			</S.Slider>
		</S.CategoryBox>
	</S.Wrapper>
 )
}