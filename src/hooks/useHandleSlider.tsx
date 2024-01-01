import { useState } from "react";
import Slider from "react-slick";

import { InitialProps } from "@/types/slider";

function useHandleSlider({ slidesToShow = 0, slidesToScroll, speed, maxIndex = 0 }: InitialProps) {
	const [slider, setSlider] = useState<Slider>();
	const [currentSlideIndex, setCurrentSlideIndex] = useState(slidesToShow-1);
	const [isClickedJustBefore, setClickedJustBefore] = useState(false);

	const calcCurrentSlideIndexWithPrev = ()=> {
		if(slidesToShow === 1) {
			setCurrentSlideIndex(prev => prev - slidesToScroll);
		}

		if(slidesToShow > 1) {
			setCurrentSlideIndex(prev => {
				if(prev - slidesToScroll < slidesToShow) return slidesToShow;
				return (prev - slidesToScroll);
			})
		}
	}

	const calcCurrentSlideIndexWithNext = ()=> {
		if(slidesToShow === 1) {
			setCurrentSlideIndex(prev=>prev + slidesToScroll);
		}

		if(slidesToShow > 1) {
			setCurrentSlideIndex(prev=>{
				if(prev + slidesToShow > maxIndex) return maxIndex;
				return (prev + slidesToScroll);
			})
		}
	}

	const handlePrev = ()=> {
		if(isClickedJustBefore) return;

		setClickedJustBefore(prev=>!prev);
		slider?.slickPrev();

		calcCurrentSlideIndexWithPrev();

		setTimeout(()=>setClickedJustBefore(prev=>!prev), speed);
	};

  const handleNext = ()=> {
		if(isClickedJustBefore) return;

		setClickedJustBefore(prev=>!prev);
		slider?.slickNext();

		calcCurrentSlideIndexWithNext();

		setTimeout(()=>setClickedJustBefore(prev=>!prev), speed);
	};

	return { handlePrev, handleNext, setSlick: setSlider, currentSlideIndex };
}

export default useHandleSlider;