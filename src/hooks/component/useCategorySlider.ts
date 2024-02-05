import { throttle } from "lodash";
import { useEffect, useState } from "react";

import { categories } from "@/assets/data/fields";

import type { Section } from "@/types";

const SLIDE_WIDTH = 150;

export default function useCategorySlider(section: Section) {
	const [slider, setSlider] = useState<HTMLElement>();
	const [categoryBox, setCategoryBox] = useState<HTMLElement>();

	const [showPrevArrow, setShowPrevArrow] = useState(false);
	const [showNextArrow, setShowNextArrow] = useState(false);

	const [sliderLeft, setSliderLeft] = useState(0);

	const lastIndex = categories[section].length;

	const handlePrev = () => {
		const isStartOfSlider = sliderLeft + SLIDE_WIDTH * 2 >= 0;
		setShowNextArrow(true);

		if(isStartOfSlider){
			slider!.style.left = `0px`;
			setSliderLeft(0);
			setShowPrevArrow(false);
			return;
		}

		slider!.style.left = `${sliderLeft + SLIDE_WIDTH}px`;
		setSliderLeft(prev => prev + SLIDE_WIDTH);
	};

	const handleNext = () => {
		const lastSlideItem = document.querySelector('.last-category') as HTMLElement;
		const endOfSlide = lastSlideItem.getBoundingClientRect().right;
		const endOfCategoryBox = categoryBox!.getBoundingClientRect().right;

		const isEndOfSlide = endOfSlide - SLIDE_WIDTH * 2 <= endOfCategoryBox;

		setShowPrevArrow(true);

		if(isEndOfSlide){
			slider!.style.left = `${sliderLeft - (endOfSlide - endOfCategoryBox)}px`;
			setSliderLeft(prev => prev - (endOfSlide - endOfCategoryBox));
			setShowNextArrow(false);
			return;
		}

		slider!.style.left = `${sliderLeft - SLIDE_WIDTH}px`;
		setSliderLeft(prev => prev - SLIDE_WIDTH);
	};

	const expandSliderToFitCategoryBox = () => {
		if(!slider) return;

		const lastSlideItem = document.querySelector('.last-category') as HTMLElement;
		const endOfSlide = lastSlideItem.getBoundingClientRect().right;
		const endOfCategoryBox = categoryBox!.getBoundingClientRect().right;

		const haveToExpand = sliderLeft < 0 && endOfSlide < endOfCategoryBox;
		const emptyWidth = endOfCategoryBox - endOfSlide;
		const expandedSliderLeft = sliderLeft + emptyWidth;
		const isOnePageSlider = expandedSliderLeft >= 0;

		if(haveToExpand && isOnePageSlider) {
			slider!.style.left = `0px`;
			setSliderLeft(0);
			setShowPrevArrow(false);
			setShowNextArrow(false);
			return;
		}

		if(haveToExpand && !isOnePageSlider) {
			slider!.style.left = `${expandedSliderLeft}px`;
			setSliderLeft(expandedSliderLeft);
			setShowPrevArrow(true);
			setShowNextArrow(false);
		}
	};

	const setArrow = throttle(() => {
		if(!slider) return;

		const lastSlideItem = document.querySelector('.last-category') as HTMLElement;

		const startOfSlide = slider!.getBoundingClientRect().left;
		const endOfSlide = lastSlideItem.getBoundingClientRect().right;
		const sliderWidth = endOfSlide - startOfSlide;
		const categoryBoxWidth = categoryBox!.getBoundingClientRect().width + 30;

		if(sliderLeft >= 0) {
			setShowPrevArrow(false);
		} else setShowPrevArrow(true);

		if(sliderWidth > categoryBoxWidth) {
			setShowNextArrow(true);
		} else setShowNextArrow(false);

		expandSliderToFitCategoryBox();
	}, 300);

	useEffect(() => {
		setArrow();
	}, [slider, section]);

	useEffect(() => {
		window.addEventListener("resize", setArrow);
		return () => {
			window.removeEventListener("resize", setArrow);
		}
	});

	return { showPrevArrow, showNextArrow, handlePrev, handleNext, lastIndex, setSlider, setCategoryBox };
}