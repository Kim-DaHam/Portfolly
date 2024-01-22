import { throttle } from "lodash";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { categories } from "@/assets/data/portfolio";
import { section } from "@/redux/sectionSlice";

const SLIDE_WIDTH = 150;

export default function useCategorySlider() {
	const [slider, setSlider] = useState<HTMLElement>();
	const [categoryBox, setCategoryBox] = useState<HTMLElement>();

	const [showPrevArrow, setShowPrevArrow] = useState(false);
	const [showNextArrow, setShowNextArrow] = useState(false);

	const [endOfCategoryBox, setEndOfCategoryBox] = useState(0);
	const [sliderWidth, setSliderWidth] = useState(0);
	const [sliderLeft, setSliderLeft] = useState(0);

	const currentSection = useSelector(section);

	const lastIndex = categories[currentSection].length - 1;

	const handlePrev = () => {
		setShowNextArrow(true);

		if(sliderLeft + SLIDE_WIDTH * 2 > 0){
			setShowPrevArrow(false);
			if(slider) slider.style.left = '0';
			setSliderLeft(0);
			return;
		}
		if(slider) slider.style.left = `${sliderLeft + SLIDE_WIDTH}px`;
		setSliderLeft(prev => prev + SLIDE_WIDTH);
	};

	const handleNext = () => {
		const lastCategoryButton = document.querySelector('.last-category') as HTMLElement;
		const endOfSlider = lastCategoryButton.getBoundingClientRect().right;

		setShowPrevArrow(true);

		if(endOfSlider - SLIDE_WIDTH * 2 <= endOfCategoryBox){
			setShowNextArrow(false);
			if(slider) slider.style.left = `${sliderLeft - (endOfSlider - endOfCategoryBox)}px`;
			setSliderLeft(prev => prev - (endOfSlider - endOfCategoryBox));
			return;
		}
		if(slider) slider.style.left = `${sliderLeft - SLIDE_WIDTH}px`;
		setSliderLeft(prev => prev - SLIDE_WIDTH);
	};

	const measureSliderWidth = throttle(() => {
		if(slider) {
			const lastCategoryButton = document.querySelector('.last-category') as HTMLElement;
			const endOfSlider = lastCategoryButton.getBoundingClientRect().right;
			const endOfCategoryBox = categoryBox!.getBoundingClientRect().right;
			const startOfCategoryBox = categoryBox!.getBoundingClientRect().left;
			const categoryBoxWidth = categoryBox!.getBoundingClientRect().width;
			const sliderWidth = endOfSlider - startOfCategoryBox;

			setSliderWidth(sliderWidth);
			setEndOfCategoryBox(endOfCategoryBox);

			if(sliderWidth > categoryBoxWidth) {
				setShowNextArrow(true);
			} else setShowNextArrow(false);
		}
	}, 300);

	useEffect(() => {
		measureSliderWidth();

		window.addEventListener("resize", measureSliderWidth);
    return () => {
        window.removeEventListener("resize", measureSliderWidth);
    };
	}, [slider, sliderWidth, currentSection])

	return { showPrevArrow, showNextArrow, handlePrev, handleNext, lastIndex, setSlider, setCategoryBox };
}