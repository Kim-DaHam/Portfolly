import { Settings } from "react-slick";

export const sliderSettings: Settings = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 7,
	slidesToScroll: 3,
	draggable: false,
	fade: false,
	arrows: false,
	vertical: false,
	initialSlide: 0,
	responsive: [
		{
			breakpoint: 960, // 화면 사이즈 960px일 때
			settings: {
				dots: false,
				arrows: false,
			}
		}
	]
}