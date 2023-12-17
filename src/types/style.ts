import { Section } from "./portfolio"

type Color = 'White' | 'Black' | 'Gray';

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
