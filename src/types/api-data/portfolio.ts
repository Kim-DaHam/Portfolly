import { Commission } from "@/types/api-data/commission";

export type Portfolios = {
	[key in string]: Portfolio;
};

export type Portfolio = {
	user: {
		name: string,
		email: string,
		phone: string,
		nickname: string,
		profileImage: string,
	},
	title: string,
	content: string,
	summary: string,
	createdAt: string,
	section: Section,
	category: string,
	tag: string[],
	images: string[],
	likes: number,
	commission: Commission,
};

export type Section = 'Android/iOS' | 'Web' | 'Illustration' | 'Photo' | 'Video';

export type Commissions = {
	[key in string]: Commissions;
};