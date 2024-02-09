export type Authority = 'expert' | 'client';

export type Users = {
	[key in string] : User;
};

export type User = {
	name?: string,
	email: string,
	phone?: string,
	nickname: string,
	profileImage: string,
	authority: Authority,
	profile: UserProfile,
	bookmarks?: Bookmarks,
	likes?: string[],
};

export type UserProfile = {
	introduce: string;
	location: string,
	careers?: string[],
	careerLength?: string,
	fields?: string[],
	stacks?: string[],
	score?: number,
	contactTime: string,
};

export type Bookmarks = {
	[key in string]: Bookmark;
};

export type Bookmark = {
	title: string,
	summary: string,
	thumbnailUrl: string,
};