import { useEffect, useRef, useState } from "react";
import { CgOptions as FilterIcon } from "react-icons/cg";
import { FiArrowRight as ArrowRightIcon, FiArrowLeft as ArrowLeftIcon } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import SearchModal from "../../modal/search-modal/SearchModal";

import { categories } from "@/assets/data/fields";
import { Button } from "@/components";
import * as S from "@/components/organisms/slider/category-slider/CategorySlider.styled";
import { useModal, useCategorySlider } from "@/hooks";
import { section } from "@/redux/sectionSlice";
import { getFilterQueryParameter, stringToUrlParameter } from "@/utils";

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
	<S.Wrapper>
		<Button color='gray' shape='square' onClick={handleModal}>
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