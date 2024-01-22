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
	commissions?: number[],
};