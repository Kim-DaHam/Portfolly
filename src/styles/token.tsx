import { ButtonColorStyle, ButtonSizeStyle, FontColorStyle, FontSizeStyle, PopperStyle, PortfolioItemStyle } from "@/types/style";

export const portfolioItemSize: PortfolioItemStyle = {
	'Android/iOS': {
			aspectRatio: '1 / 1.90',
	},
	Web: {
			aspectRatio: '1 / 0.67',
	},
	Illustration: {
			aspectRatio: '1 / 1.25',
	},
	Photo: {
			aspectRatio: '1 / 1.25',
	},
	Video: {
			aspectRatio: '1 / 0.67',
	},
};

export const bodyFontSize: FontSizeStyle = {
	Large: {
		fontSize: '',
		lineHeight: '',
		letterSpacing: '',
		fontWeight: '',
	},
	Medium: {
		fontSize: '1rem',
		lineHeight: '1.5rem',
		letterSpacing: '-.008em',
		fontWeight: '500',
	},
	Small: {
		fontSize: '0.875rem',
		lineHeight: '1.25rem',
		letterSpacing: '-.024em',
		fontWeight: '400',
	},
};

export const headingFontSize: FontSizeStyle = {
	Large: {
		fontSize: '2.75rem',
		lineHeight: '3rem',
		letterSpacing: '-.024em',
		fontWeight: '600',
	},
	Medium: {
		fontSize: '',
		lineHeight: '',
		letterSpacing: '',
		fontWeight: '',
	},
	Small: {
		fontSize: '1.5rem',
		lineHeight: '2rem',
		letterSpacing: '-.008em',
		fontWeight: '600',
	},
};

export const fontColor: FontColorStyle = {
	Black: {
		color: '#111111',
	},
	Gray: {
		color: '#747474',
	},
	LightGray: {
		color: '#989898',
	},
}

export const buttonColor: ButtonColorStyle = {
	White: {
		backgroundColor: '#FFFFFF',
		hoverBackgroundColor: '#f3f3f3',
		fontColor: '11111',
	},
	Black: {
		backgroundColor: '#111111',
		hoverBackgroundColor: '#1d1d1d',
		fontColor: '#FFFFFF',
	},
	Gray: {
		backgroundColor: '#f3f3f3',
		hoverBackgroundColor: '#d0d0d0',
		fontColor: '11111',
	},
	Transparency: {
		backgroundColor: 'transparent',
		hoverBackgroundColor: 'transparent',
		fontColor: '11111',
	}
};

export const buttonSize: ButtonSizeStyle = {
	Default: {
		width: '100%',
	},
	Fit: {
		width: 'fit-content',
	},
	Large: {
		width: '13rem',
	},
	Medium: {
		width: '9rem',
	},
	Small: {
		width: '5rem',
	}
};

export const popperSize: PopperStyle = {
	Default: {
		width: '14rem'
	},
	Fit: {
		width: 'fit-content'
	}
};