import { useEffect, useState } from "react";
import Slider from "react-slick";

import { InitialProps } from "@/types/slider";

import { calcIndexWhenNextClicked, calcIndexWhenPrevClicked } from "./handleSlider.helpers";

function useHandleSlider({ slidesToShow, slidesToScroll, speed, lastIndex }: InitialProps) {
	const [slider, setSlider] = useState<Slider>();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showPrevArrow, setShowPrevArrow] = useState(false);
	const [showNextArrow, setShowNextArrow] = useState(true);
	const [isClickedJustBefore, setClickedJustBefore] = useState(false);

	const handlePrev = ()=> {
		if(isClickedJustBefore) return;

		setClickedJustBefore(prev=>!prev);
		slider?.slickPrev();

		calcIndexWhenPrevClicked(slidesToShow, slidesToScroll, setCurrentIndex);
		setShowNextArrow(true);

		setTimeout(()=>setClickedJustBefore(prev=>!prev), speed);
	};

  const handleNext = async ()=> {
		if(isClickedJustBefore) return;

		setClickedJustBefore(prev=>!prev);
		slider?.slickNext();

		await calcIndexWhenNextClicked(slidesToShow, slidesToScroll, setCurrentIndex, lastIndex);
		setShowPrevArrow(true);

		setTimeout(()=>setClickedJustBefore(prev=>!prev), speed);
	};

	useEffect(()=>{
		if(currentIndex === 0){
			setShowPrevArrow(false);
		}

		if(currentIndex === lastIndex){
			setShowNextArrow(false);
		}
	}, [currentIndex]);

	return { handlePrev, handleNext, setSlider, setCurrentIndex, showPrevArrow, showNextArrow };
}

export default useHandleSlider;