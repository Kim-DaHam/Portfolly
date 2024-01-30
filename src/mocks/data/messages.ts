// NoSQL Database

// 채팅방 별 메세지 데이터
export const messageRooms = [
	{
		id: 1,
		expertId: 1,
		clientId: 100,
		portfolioId: null,
		commissionStatus: null,
		lastMessage: '마지막 메세지입니다',
		timestamp: Date.now(),
		messages: [
			{
				messageId: 1,
				userId: 100,
				createdAt: Date.now(),
				message: '안녕하세요 문의 드립니다.',
			},
			{
				messageId: 2,
				userId: 1,
				createdAt: Date.now()+1,
				message: '안녕하세요 반갑습니다',
			},
			{
				messageId: 3,
				userId: 1,
				createdAt: Date.now()+2,
				message: '어떤 작업이 궁금하신가요?',
			},
			{
				messageId: 4,
				userId: 100,
				createdAt: Date.now(),
				message: '이게 궁금합니다.',
			},
			{
				messageId: 5,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 6,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 7,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 8,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 9,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},{
				messageId: 10,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 11,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 12,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 13,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 14,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 15,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 16,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 17,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 18,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 19,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 20,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 21,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 22,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 23,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 24,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
			},
		],
	},

	{
		id: 1,
		expertId: 2,
		clientId: 100,
		portfolioId: 2,
		commissionStatus: '진행 중',
		lastMessage: '마지막 메세지입니다',
		timestamp: Date.now(),
		messages: [
			{
				messageId: 1,
				userId: 100,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 2,
				userId: 2,
				createdAt: Date.now(),
				message: 'test',
			},
		]
	},

	{
		id: 3,
		expertId: 3,
		clientId: 100,
		portfolioId: 3,
		commissionStatus: '구매 확정',
		lastMessage: '마지막 메세지입니다',
		timestamp: Date.now(),
		messages: [
			{
				messageId: 1,
				userId: 100,
				createdAt: Date.now(),
				message: 'test',
			},
			{
				messageId: 2,
				userId: 3,
				createdAt: Date.now(),
				message: 'test',
			},
		]
	},
];