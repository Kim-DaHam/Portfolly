export type Popper = 'HeaderMenu' | 'PortfolioMenu' | 'SectionNavigator';

export type Props = {
	type: Popper;
	right: number;
	bottom: number;
	popOut: ()=>void;
};