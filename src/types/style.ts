import { Section } from "./portfolio"

export type Color = 'White' | 'Black' | 'Gray' | 'Transparency';
export type Size = 'Default' | 'Fit' | 'Large' | 'Medium' | 'Small';

export type PortfolioItemSize = {
	[key in Section]: {
			aspectRatio: string,
	}
};

export type ButtonColor = {
	[key in Color]: {
		backgroundColor: string,
		hoverBackgroundColor: string,
		fontColor: string,
	}
};

export type ButtonSize = {
	[key in Size]: {
		width: string,
	}
};

export type PopperSize = {
	[key in Size]: {
		width: string,
	}
};
