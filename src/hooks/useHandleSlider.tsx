import { useState } from "react";
import Slider from "react-slick";

function useHandleSlider() {
	const [slick, setSlick] = useState<Slider>();
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [isClickedJustBefore, setClickedJustBefore] = useState(false);

	const handlePrev = ()=> {
		if(isClickedJustBefore) return;

		setClickedJustBefore(prev=>!prev);
		slick?.slickPrev();
		setCurrentSlideIndex(prev => prev - 1);

		setTimeout(()=>setClickedJustBefore(prev=>!prev), 200);
	};

  const handleNext = ()=> {
		if(isClickedJustBefore) return;

		setClickedJustBefore(prev=>!prev);
		slick?.slickNext();
		setCurrentSlideIndex(prev=>prev+1);

		setTimeout(()=>setClickedJustBefore(prev=>!prev), 200);
	};

	return { handlePrev, handleNext, setSlick, currentSlideIndex };
}

export default useHandleSlider;