export type Section = 'Android/iOS' | 'Web' | 'Illustration' | 'Photo' | 'Video';

export type Portfolio = {
	id: number,
	userId: number,
	title: string,
	content: string,
	summary: string,
	createdAt: number,
	modifiedAt: number,
	sectionId: number,
	categoryId: number,
	tagId: number[],
	likes: number,
	images: string[],
	user?: object,
	isLiked?: boolean,
	isBookmarked?: boolean,
};

export type User = {
	id: number,
	nickname: string,
	profileImage: string,
	email: string,
	name?: string,
	phone?: string,
	authority: 'expert' | 'client',
	profile: {
		introduce: string,
		location: string,
		careers?: string[],
		careerLength?: string,
		fields?: string[],
		stacks?: string[],
	},
	activity: {
		score?: number,
		contactTime: string,
	},
	likes?: number[],
	bookmarks?: number[],
	portfolios?: number[],
};