import { MessageRooms } from "@/types";

import { toLocalDateString } from "@/utils";

export const messageRooms: MessageRooms = {
	room1: {
		expert: {
			id: 'expert1',
			name: 'John',
			email: 'john@example.com',
			phone: '010-1234-1234',
			nickname: 'John Lennon',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			profile: {
				score: 90,
				contactTime: '언제나 가능',
			},
		},
		client: {
			id: 'client1',
			name: '김강철',
			email: 'steel@example.com',
			phone: '010-1234-1234',
			nickname: '강철맨',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			profile: {
				contactTime: '언제나 가능',
			},
		},
		portfolio: {
			id: 'portfolio1',
			title: 'test title',
			summary: 'test summary',
			thumbnailUrl: '',
		},
		commission: {
			id: 'p1c1',
			createdAt: '2024-05-06',
			endedAt: '',
			details: {
				title: 'test title',
				content: 'test content',
				cost: 50000,
				status: '진행 중',
				deadline: '2024-05-26',
			},
			review: {
				score: 50,
				content: 'review test',
			},
		},
		messages: {
			message1: {
				from: {
					id: 'expert1',
					nickname: 'John',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				files: [
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
					},
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
					},
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
					},
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
					},
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
					},
				],
				message: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message2: {
				from: {
					id: 'client1',
					nickname: 'Paul',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				files: [
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
					},
				],
				message: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
			message3: {
				from: {
					id: 'expert1',
					nickname: 'John',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				files: [
					{
						type: 'text',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
					},
				],
				message: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message4: {
				from: {
					id: 'client1',
					nickname: 'Paul',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				files: [
					{
						type: 'text',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
					},
					{
						type: 'text',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
					},
					{
						type: 'text',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
					},
				],
				message: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
			message5: {
				from: {
					id: 'expert1',
					nickname: 'John',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message6: {
				from: {
					id: 'client1',
					nickname: 'Paul',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
			message7: {
				from: {
					id: 'expert1',
					nickname: 'John',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message8: {
				from: {
					id: 'client1',
					nickname: 'Paul',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
			message9: {
				from: {
					id: 'expert1',
					nickname: 'John',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message10: {
				from: {
					id: 'client1',
					nickname: 'Paul',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
			message11: {
				from: {
					id: 'expert1',
					nickname: 'John',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message12: {
				from: {
					id: 'client1',
					nickname: 'Paul',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
		},
		lastMessage: {
			id: 'message12',
			from: {
				id: 'client1',
				nickname: 'Paul',
				profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			},
			message: 'hello!',
			createdAt: new Date(Date.now()),
			isRead: false,
		},
	},
	room2: {
		expert: {
			id: 'expert2',
			name: 'John',
			email: 'john@example.com',
			phone: '010-1234-1234',
			nickname: 'John Lennon',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			profile: {
				score: 90,
				contactTime: '언제나 가능',
			},
		},
		client: {
			id: 'client1',
			name: '김강철',
			email: 'steel@example.com',
			phone: '010-1234-1234',
			nickname: '강철맨',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			profile: {
				contactTime: '언제나 가능',
			},
		},
		portfolio: {
			id: 'portfolio1',
			title: 'test title',
			summary: 'test summary',
			thumbnailUrl: '',
		},
		commission: {
			id: 'p1c1',
			createdAt: '2024-05-06',
			endedAt: '',
			details: {
				title: 'test title',
				content: 'test content',
				cost: 50000,
				status: '진행 중',
				deadline: '2024-05-26',
			},
			review: {
				score: 50,
				content: 'review test',
			},
		},
		messages: {
			message1: {
				from: {
					id: 'expert1',
					nickname: 'John',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message2: {
				from: {
					id: 'client1',
					nickname: 'Paul',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
		},
		lastMessage: {
			id: 'message2',
			from: {
				id: 'client1',
				nickname: 'Paul',
				profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			},
			message: 'hello!',
			createdAt: new Date(Date.now()),
			isRead: false,
		},
	},
	room3: {
		expert: {
			id: 'expert3',
			name: 'John',
			email: 'john@example.com',
			phone: '010-1234-1234',
			nickname: 'John Lennon',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			profile: {
				score: 90,
				contactTime: '언제나 가능',
			},
		},
		client: {
			id: 'client1',
			name: '김강철',
			email: 'steel@example.com',
			phone: '010-1234-1234',
			nickname: '강철맨',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			profile: {
				contactTime: '언제나 가능',
			},
		},
		portfolio: {
			id: 'portfolio1',
			title: 'test title',
			summary: 'test summary',
			thumbnailUrl: '',
		},
		commission: {
			id: 'p1c1',
			createdAt: '2024-05-06',
			endedAt: '',
			details: {
				title: 'test title',
				content: 'test content',
				cost: 50000,
				status: '진행 중',
				deadline: '2024-05-26',
			},
			review: {
				score: 50,
				content: 'review test',
			},
		},
		messages: {
			message1: {
				from: {
					id: 'expert1',
					nickname: 'John',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message2: {
				from: {
					id: 'client1',
					nickname: 'Paul',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			}
		},
		lastMessage: {
			id: 'message2',
			from: {
				id: 'client1',
				nickname: 'Paul',
				profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			},
			message: 'hello!',
			createdAt: new Date(Date.now()),
			isRead: false,
		},
	},
	room4: {
		expert: {
			id: 'expert4',
			name: 'John',
			email: 'john@example.com',
			phone: '010-1234-1234',
			nickname: 'John Lennon',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			profile: {
				score: 90,
				contactTime: '언제나 가능',
			},
		},
		client: {
			id: 'client1',
			name: '김강철',
			email: 'steel@example.com',
			phone: '010-1234-1234',
			nickname: '강철맨',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			profile: {
				contactTime: '언제나 가능',
			},
		},
		portfolio: {
			id: 'portfolio1',
			title: 'test title',
			summary: 'test summary',
			thumbnailUrl: '',
		},
		commission: {
			id: 'p1c1',
			createdAt: '2024-05-06',
			endedAt: '',
			details: {
				title: 'test title',
				content: 'test content',
				cost: 50000,
				status: '진행 중',
				deadline: '2024-05-26',
			},
			review: {
				score: 50,
				content: 'review test',
			},
		},
		messages: {
			message1: {
				from: {
					id: 'expert1',
					nickname: 'John',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message2: {
				from: {
					id: 'client1',
					nickname: 'Paul',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			}
		},
		lastMessage: {
			id: 'message2',
			from: {
				id: 'client1',
				nickname: 'Paul',
				profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			},
			message: 'hello!',
			createdAt: new Date(Date.now()),
			isRead: false,
		},
	},
	room5: {
		expert: {
			id: 'expert5',
			name: 'John',
			email: 'john@example.com',
			phone: '010-1234-1234',
			nickname: 'John Lennon',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			profile: {
				score: 90,
				contactTime: '언제나 가능',
			},
		},
		client: {
			id: 'client1',
			name: '김강철',
			email: 'steel@example.com',
			phone: '010-1234-1234',
			nickname: '강철맨',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			profile: {
				contactTime: '언제나 가능',
			},
		},
		portfolio: {
			id: 'portfolio1',
			title: 'test title',
			summary: 'test summary',
			thumbnailUrl: '',
		},
		commission: {
			id: 'p1c1',
			createdAt: '2024-05-06',
			endedAt: '',
			details: {
				title: 'test title',
				content: 'test content',
				cost: 50000,
				status: '진행 중',
				deadline: '2024-05-26',
			},
			review: {
				score: 50,
				content: 'review test',
			},
		},
		messages: {
			message1: {
				from: {
					id: 'expert1',
					nickname: 'John',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message2: {
				from: {
					id: 'client1',
					nickname: 'Paul',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				},
				message: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			}
		},
		lastMessage: {
			id: 'message2',
			from: {
				id: 'client1',
				nickname: 'Paul',
				profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			},
			message: 'hello!',
			createdAt: new Date(Date.now()),
			isRead: false,
		},
	},
}