export type Commissions = {
	[key in string]: Commission;
}

export type Commission = {
	id?: string,
	client: {
		id: string;
		name: string,
		email: string,
		phone: string,
		nickname: string,
		profileImage: string,
		profile?: any,
	},
	expert?: {
		id: string;
		name: string,
		email: string,
		phone: string,
		nickname: string,
		profileImage: string,
		profile?: any,
	},
	portfolio?: {
		id: string,
		section?: string,
		title: string,
		summary: string,
		thumbnailUrl: string,
	},
	review: Review | null,
	createdAt: string,
	endedAt: string | null,
	details?: CommissionDetail,
};

export type Review = {
	id?: string,
	user?: {
		nickname: string,
		profileImage: string,
	},
	portfolio?: {
		id: string,
		thumbnailUrl: string,
	},
	score: number,
	content: string,
};

export type CommissionDetail = {
	title: string,
	content: string,
	cost: number,
	status: CommissionStatus,
	deadline: string,
};

export type CommissionStatus = '진행 중' | '작업물 도착' | '구매 확정' | '주문 취소' | '취소/문제해결' | '분쟁 조정 중';
export type SearchFilter = '닉네임' | '프로젝트명';