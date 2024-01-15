import { ButtonColorStyle, ButtonSizeStyle, FontColorStyle, FontSizeStyle, ModalSize, PopperStyle, PortfolioThumbnailStyle, ProfileSize, } from "@/types/style";

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

export const modalSize: ModalSize = {
	'alert': {
		width: '22%',
		height: 'content-fit',
	},
	'search': {
		width: '50%',
		height: '80%',
	},
	'form': {
		width: '50%',
		height: '90%',
	},
};