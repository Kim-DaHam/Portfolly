import { SetState } from "@/types";

export const calcIndexWhenPrevClicked = (slidesToShow: number, slidesToScroll: number, setCurrentIndex: SetState<number>)=> {
	if(slidesToShow === 1) {
		setCurrentIndex(prev => prev - slidesToScroll);
		return;
	}

	if(slidesToShow > 1) {
		setCurrentIndex(prev => {
			if(prev - slidesToScroll < slidesToShow) return slidesToShow;
			return (prev - slidesToScroll);
		});
		return;
	}
}

export const calcIndexWhenNextClicked = (slidesToShow: number, slidesToScroll: number, setCurrentIndex: SetState<number>,lastIndex: number)=> {

	if(slidesToShow === 1) {
		setCurrentIndex(prev=>prev + slidesToScroll);
		return;
	}

	if(slidesToShow > 1) {
		setCurrentIndex(prev=>{
			if(prev + slidesToShow > lastIndex) return lastIndex;
			return (prev + slidesToScroll);
		});
		return;
	}
}