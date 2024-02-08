import { Commissions } from "@/types/api-data/commission";

export type Portfolios = {
	[key in string]: Portfolio;
};

export type Portfolio = {
	user: {
		id: string;
		name: string,
		email: string,
		phone: string,
		nickname: string,
		profileImage: string,
	},
	title: string,
	content: string,
	summary: string,
	createdAt: Date,
	section: Section,
	category: string,
	tags: string[],
	images: string[],
	likes: number,
	commissions: Commissions | null,
	isBookmarked?: boolean,
	isLiked?: boolean,
};

export type Section = 'Android/iOS' | 'Web' | 'Illustration' | 'Photo' | 'Video';