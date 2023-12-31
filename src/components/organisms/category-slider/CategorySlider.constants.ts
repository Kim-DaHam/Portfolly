import { Settings } from "react-slick";

import { InitialProps } from "@/types/slider";

export const sliderSettings: Settings = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToScroll: 3,
	draggable: false,
	fade: false,
	arrows: false,
	vertical: false,
	initialSlide: 0,
	variableWidth: true,
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

export const initialProps: InitialProps = {
	slidesToScroll: sliderSettings.slidesToScroll!,
	speed: sliderSettings.speed!,
	maxIndex: 11,
}

export const categories = {
	'Android/iOS': ['전체', '금융', '비즈니스', '쇼핑', '음식', '교육', '건강 & 휘트니스', '여행 & 교통', '엔터테이먼트', '인공지능', 'CRM', '라이프 스타일', 'Crypto & Web3', '생산', '커뮤니티'],
	'Web': ['전체', '금융', '비즈니스', '쇼핑', '음식', '교육', '건강 & 휘트니스', '여행 & 교통', '엔터테이먼트', '인공지능', 'CRM', '라이프 스타일', 'Crypto & Web3', '생산', '커뮤니티', '개발 도구'],
	'Illustration': ['전체', '출판', '마케팅&광고', '콘셉트 아트', '패션', '테크니컬', '인포그래픽', '패키징', '캐리커쳐', '3D그래픽', '게임',],
	'Photo': ['전체', '인물', '이벤트', '웨딩', '미술', '건축', '상업', '사물', '자연'],
	'Video': ['전체', '자연', '음악', '영화', '다큐멘터리', '요리', '일상', '편집',],
}