import { useState } from "react";
import Slider from "react-slick";

import { InitialProps } from "@/types";

function useHandleSlider({type, slidesToShow, slidesToScroll, speed, maxIndex=0}: InitialProps) {
	const [slider, setSlider] = useState<Slider>();
	const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
	const [isClickedJustBefore, setClickedJustBefore] = useState(false);

	const handlePrev = ()=> {
		if(isClickedJustBefore) return;

		setClickedJustBefore(prev=>!prev);
		slider?.slickPrev();

		if(type === 'Short'){
			setCurrentSlideIndex(prev => prev - slidesToScroll);
		}
		if(type === 'Long'){
			setCurrentSlideIndex(prev => {
				if(prev - slidesToScroll < slidesToShow) return slidesToShow;
				else return (prev - slidesToScroll);
			})
		}

		setTimeout(()=>setClickedJustBefore(prev=>!prev), speed);
	};

  const handleNext = ()=> {
		if(isClickedJustBefore) return;

		setClickedJustBefore(prev=>!prev);
		slider?.slickNext();

		if(type === 'Short'){
			setCurrentSlideIndex(prev=>prev + slidesToScroll);
		}
		if(type === 'Long'){
			setCurrentSlideIndex(prev=>{
				if(prev + slidesToShow > maxIndex) return maxIndex
				else return (prev + slidesToShow);
			})
		}

		setTimeout(()=>setClickedJustBefore(prev=>!prev), speed);
	};

	return { handlePrev, handleNext, setSlick: setSlider, currentSlideIndex };
}

export default useHandleSlider;