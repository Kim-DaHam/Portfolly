// NoSQL Database

// 채팅방 별 메세지 데이터
export const messageRooms = [
	{
		id: 1,
		expertId: 1,
		clientId: 100,
		portfolioId: 1,
		commissionId: null,
		lastMessage: '마지막 메세지입니다dddddddd',
		timestamp: Date.now(),
		messages: [
			{
				id: 1,
				userId: 100,
				createdAt: Date.now(),
				message: '안녕하세요 문의 드립니다.',
				isRead: true,
			},
			{
				id: 2,
				userId: 1,
				createdAt: Date.now()+1,
				message: '안녕하세요 반갑습니다',
				isRead: true,
			},
			{
				id: 3,
				userId: 1,
				createdAt: Date.now()+2,
				message: '어떤 작업이 궁금하신가요?',
				isRead: true,
			},
			{
				id: 4,
				userId: 100,
				createdAt: Date.now(),
				message: '이게 궁금합니다.',
				isRead: true,
			},
			{
				id: 5,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 6,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 7,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 8,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 9,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},{
				id: 10,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 11,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 12,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 13,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 14,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 15,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 16,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 17,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 18,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 19,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 20,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 21,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 22,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 23,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 24,
				userId: 1,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
		],
	},

	{
		id: 2,
		expertId: 2,
		clientId: 100,
		portfolioId: 2,
		commissionId: 5,
		lastMessage: '마지막 메세지입니다',
		timestamp: Date.now(),
		messages: [
			{
				id: 1,
				userId: 100,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 2,
				userId: 2,
				createdAt: Date.now(),
				message: 'test',
				isRead: false,
			},
		]
	},

	{
		id: 3,
		expertId: 3,
		clientId: 100,
		portfolioId: 3,
		commissionId: 6,
		lastMessage: '마지막 메세지입니다',
		timestamp: Date.now(),
		messages: [
			{
				id: 1,
				userId: 100,
				createdAt: Date.now(),
				message: 'test',
				isRead: true,
			},
			{
				id: 2,
				userId: 3,
				createdAt: Date.now(),
				message: 'test',
				isRead: false,
			},
		]
	},
];