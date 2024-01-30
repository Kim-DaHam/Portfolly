// NoSQL Database

// 유저별 채팅방 리스트
export const rooms = [
	{
		userId: 1,
		roomId: 1,
		lastMessage: '마지막 메세지입니다',
		timestamp: Date.now(),
	},
	{
		userId: 2,
		roomId: 2,
		lastMessage: '마지막 메세지입니다',
		timestamp: Date.now(),
	},
	{
		userId: 3,
		roomId: 3,
		lastMessage: '마지막 메세지입니다',
		timestamp: Date.now(),
	},
];

// 채팅방 별 메세지 데이터
export const messages = [
	{
		roomId: 1,
		portfolioId: null,
		commissionStatus: null,
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
		roomId: 2,
		portfolioId: 2,
		commissionStatus: '진행 중',
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
		roomId: 3,
		portfolioId: 3,
		commissionStatus: '구매 확정',
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