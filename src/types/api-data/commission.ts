export type Commissions = {
	[key in string]: Commission;
}

export type Commission = {
	client: {
		name: string,
		email: string,
		phone: string,
		nickname: string,
		profileImage: string,
	},
	review: Review | null,
	createdAt: Date,
	endedAt: Date | null,
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
	status: CommissionStatus,
	deadline: Date,
};

export type CommissionStatus = '진행 중' | '작업물 도착' | '구매 확정' | '주문 취소' | '취소/문제해결' | '분쟁 조정 중';
export type SearchFilter = '닉네임' | '프로젝트명';