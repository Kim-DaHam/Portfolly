export type Popper = 'HeaderMenu' | 'PortfolioMenu' | 'SectionMenu';

export type Props = {
	type: Popper;
	right: number;
	bottom: number;
	popOut: ()=>void;
};