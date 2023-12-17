import { ButtonColor, PortfolioItemSize } from "@/types/style";

export const portfolioItemSize: PortfolioItemSize = {
    'Android/iOS': {
        aspectRatio: '1 / 1.90',
    },
    'Web': {
        aspectRatio: '1 / 0.67',
    },
    'Illustration': {
        aspectRatio: '1 / 1.25',
    },
    'Graphics': {
        aspectRatio: '1 / 1.25',
    },
    'Video': {
        aspectRatio: '1 / 0.67',
    },
}

export const buttonColor: ButtonColor = {
	'White': {
		backgroundColor: '#FFFFFF',
		hoverBackgroundColor: '#f3f3f3',
		fontColor: '11111',
	},
	'Black': {
		backgroundColor: '#111111',
		hoverBackgroundColor: '#1d1d1d',
		fontColor: '#FFFFFF',
	},
	'Gray': {
		backgroundColor: '#f3f3f3',
		hoverBackgroundColor: '#d0d0d0',
		fontColor: '11111',
	},
	'Transparency': {
		backgroundColor: 'transparent',
		hoverBackgroundColor: 'transparent',
		fontColor: '11111',
	}
}