import { Section } from "./portfolio"

import { Modal } from "@/components/molecules/modal/Modal";
import { Profile } from "@/components/molecules/profile/Profile";

export type ButtonColor = 'White' | 'Black' | 'Gray' | 'Transparency';
export type ButtonSize = 'Default' | 'Fit' | 'Large' | 'Medium' | 'Small';
export type PopperSize = 'Default' | 'Fit';
export type FontSize = 'Large' | 'Medium' | 'Small';
export type FontColor = 'Black' | 'Gray' | 'LightGray';

export type PortfolioThumbnailStyle = {
	[key in Section]: {
			aspectRatio: string,
	}
};

export type FontSizeStyle = {
	[key in FontSize]: {
		fontSize: string;
		lineHeight: string;
		letterSpacing: string;
		fontWeight: string;
	}
}

export type FontColorStyle = {
	[key in FontColor]: {
		color: string;
	}
}

export type ButtonColorStyle = {
	[key in ButtonColor]: {
		backgroundColor: string,
		hoverBackgroundColor: string,
		fontColor: string,
		border: string,
	}
};

export type ButtonSizeStyle = {
	[key in ButtonSize]: {
		width: string,
	}
};

export type PopperStyle = {
	[key in PopperSize]: {
		width: string,
	}
};

export type ProfileSize = {
	[key in Profile]: {
		height: string,
	}
};

export type ModalSize = {
	[key in Modal]: {
		width: string,
		height: string,
	}
}