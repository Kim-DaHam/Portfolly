export const commissions = [
	{
		id: 1,
		portfolioId: 1,
		clientId: 100,
		createdAt: Date.now(),
		requestDetails: '자세한 의뢰 내용',
		deadline: Date.now(),
		cost: 350000,
		state: 'ongoing',
		review: {
			createdAt: Date.now(),
			content: '리뷰입니다~',
			score: 100,
		},
	},
	{
		id: 2,
		portfolioId: 4,
		clientId: 200,
		createdAt: Date.now(),
		requestDetails: '자세한 의뢰 내용',
		deadline: Date.now(),
		cost: 350000,
		state: 'ongoing',
		review: {
			createdAt: Date.now(),
			content: '웹1 리뷰입니다~',
			score: 70,
		},
	},
	{
		id: 3,
		portfolioId: 4,
		clientId: 200,
		createdAt: Date.now(),
		requestDetails: '자세한 의뢰 내용',
		deadline: Date.now(),
		cost: 350000,
		state: 'ongoing',
		review: {
			createdAt: Date.now(),
			content: '웹2리뷰입니다~',
			score: 80,
		},
	},
	{
		id: 4,
		portfolioId: 6,
		clientId: 300,
		createdAt: Date.now(),
		requestDetails: '자세한 의뢰 내용',
		deadline: Date.now(),
		cost: 350000,
		state: 'ongoing',
		review: {
			createdAt: Date.now(),
			content: '일러스트 리뷰입니다~',
			score: 50,
		},
	},
];