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
	section: string,
	category: string,
	tag: string[],
	images: string[],
	likes: number,
	commission: Commission,
};

export type Commissions = {
	[key in string]: Commissions;
};

export type Commission = {
	client: {
		name: string,
		email: string,
		phone: string,
		nickname: string,
		profileImage: string,
	},
	review: Review,
	createdAt: Date,
	endedAt: Date,
	details: CommissionDetail,
};

export type Review = {
	score: number,
	content: string,
};

export type CommissionDetail = {
	title: string,
	content: string,
	cost: number,
	status: string,
	deadline: Date,
};