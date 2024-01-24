export const commissions = [
	{
		id: 1,
		portfolioId: 1,
		expertId: 1,
		clientId: 100,
		createdAt: '2024-03-06',
		endedAt: '2024-05-06',
		details: {
			title: '앱 포트폴리오 커미션',
			state: '진행 중',
			content: '앱 포트폴리오 커미션 설명',
			cost: 350000,
			deadline: Date.now(),
		},
		review: null,
	},
	{
		id: 2,
		portfolioId: 4,
		expertId: 1,
		clientId: 200,
		createdAt: '2024-03-06',
		endedAt: '2024-05-06',
		details: {
			title: '웹 포트폴리오 커미션1',
			state: '진행 중',
			content: '웹 포트폴리오 커미션 설명',
			cost: 350000,
			deadline: Date.now(),
		},
		review: {
			createdAt: Date.now(),
			content: '웹1 리뷰입니다~',
			score: 70,
		},
	},
	{
		id: 3,
		portfolioId: 4,
		expertId: 1,
		clientId: 200,
		createdAt: '2024-03-06',
		endedAt: '2024-05-06',
		details: {
			title: '웹 포트폴리오 커미션2',
			state: '진행 중',
			content: '웹 포트폴리오 커미션 설명',
			cost: 350000,
			deadline: Date.now(),
		},
		review: {
			createdAt: Date.now(),
			content: '웹2리뷰입니다~',
			score: 80,
		},
	},
	{
		id: 4,
		portfolioId: 6,
		expertId: 1,
		clientId: 300,
		createdAt: '2024-03-06',
		endedAt: '2024-05-06',
		details: {
			title: '일러스트 포트폴리오 커미션',
			state: '진행 중',
			content: '일러스트 포트폴리오 커미션 설명',
			cost: 350000,
			deadline: Date.now(),
		},
		review: {
			createdAt: Date.now(),
			content: '일러스트 리뷰입니다~',
			score: 50,
		},
	},
];