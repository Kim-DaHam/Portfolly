export type Authority = 'export' | 'client';

export type Users = {
	[key in string] : User;
};

export type User = {
	name: string,
	email: string,
	phone: string,
	nickname: string,
	profileImage: string,
	authority: Authority,
	profile: UserProfile,
};

export type UserProfile = {
	introduce: string;
	location: string,
	careers?: string[],
	careerLength?: string,
	fields?: string[],
	stacks?: string[],
	score?: number,
	contactTime: string[],
};