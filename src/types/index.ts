export type IComponentFactory = {
	[key: string]: JSX.Element;
}

export type Slider = 'Short' | 'Long';

export type InitialProps = {
	type: Slider;
	slidesToShow: number;
	slidesToScroll: number;
	speed: number;
	maxIndex?: number;
}