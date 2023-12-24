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
	thumbnailUrl: string[],
};

export enum SectionEndPoint {
	'Android/iOS' = 'android-ios',
	'Web' = 'web',
	'Illustration' = 'illustration',
	'Photo' = 'photo',
	'Video' = 'video',
}