import { Section } from "./portfolio"

export type Color = 'White' | 'Black' | 'Gray' | 'Transparency';

export type PortfolioItemSize = {
	[key in Section]: {
			aspectRatio: string,
	}
}

export type ButtonColor = {
	[key in Color]: {
		backgroundColor: string,
		hoverBackgroundColor: string,
		fontColor: string,
	}
}
