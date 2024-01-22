export type Authority = 'expert' | 'client';

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
		commissions?: number[],
		score?: number,
		contactTime: string,
	},
	likes?: number[],
	bookmarks?: number[],
	portfolios?: number[],
};