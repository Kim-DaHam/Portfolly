import { MessageRooms } from "@/types";

export const messageRooms: MessageRooms = {
	room1: {
		expert: {
			id: 'expert1',
			name: '존 레논',
			email: 'expert1@example.com',
			phone: '010-1234-1234',
			nickname: '전문가 1',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
			profile: {
				score: 90,
				contactTime: '언제나 가능',
			},
		},
		client: {
			id: 'client1',
			name: '김의뢰1',
			email: 'client1@example.com',
			phone: '010-1234-1234',
			nickname: '의뢰인 1',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
			profile: {
				contactTime: '언제나 가능',
			},
		},
		portfolio: {
			id: 'portfolio1',
			title: '전문가 1의 금융 앱 포트폴리오',
			summary: '앱 포트폴리오 1',
		},
		commission: {
			id: 'p1c1',
			createdAt: '2024-05-06',
			endedAt: '',
			details: {
				title: '의뢰인 1과의 커미션',
				content: '의뢰인 1과의 앱 커미션',
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
					nickname: '전문가 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
				},
				files: [
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
					},
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
					},
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
					},
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
					},
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
					},
				],
				content: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message2: {
				from: {
					id: 'client1',
					nickname: '의뢰인 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
				},
				files: [
					{
						type: 'image',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
					},
				],
				content: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
			message3: {
				from: {
					id: 'expert1',
					nickname: '전문가 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
				},
				files: [
					{
						type: 'text',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
					},
				],
				content: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message4: {
				from: {
					id: 'client1',
					nickname: '의뢰인 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
				},
				files: [
					{
						type: 'text',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
					},
					{
						type: 'text',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
					},
					{
						type: 'text',
						name: 'image',
						url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
					},
				],
				content: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
			message5: {
				from: {
					id: 'expert1',
					nickname: '전문가 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
				},
				files: null,
				content: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message6: {
				from: {
					id: 'client1',
					nickname: '의뢰인 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
				},
				files: null,
				content: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
			message7: {
				from: {
					id: 'expert1',
					nickname: '전문가 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
				},
				files: null,
				content: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message8: {
				from: {
					id: 'client1',
					nickname: '의뢰인 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
				},
				files: null,
				content: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
			message9: {
				from: {
					id: 'expert1',
					nickname: '전문가 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
				},
				files: null,
				content: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message10: {
				from: {
					id: 'client1',
					nickname: '의뢰인 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
				},
				files: null,
				content: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
			message11: {
				from: {
					id: 'expert1',
					nickname: '전문가 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
				},
				files: null,
				content: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message12: {
				from: {
					id: 'client1',
					nickname: '의뢰인 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
				},
				files: null,
				content: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
		},
		lastMessage: {
			id: 'message12',
			from: {
				id: 'client1',
				nickname: '의뢰인 1',
				profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
			},
			files: null,
			content: 'hello!',
			createdAt: new Date(Date.now()),
			isRead: false,
		},
	},
	room2: {
		expert: {
			id: 'expert2',
			name: '폴 매카트니',
			email: 'expert2@example.com',
			phone: '010-1234-1234',
			nickname: '전문가 2',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBr5YL%2FbtsFjJYBngF%2F07xL1kdIED7piDK87orbLk%2Fimg.jpg',
			profile: {
				score: 90,
				contactTime: '언제나 가능',
			},
		},
		client: {
			id: 'client1',
			name: '김의뢰1',
			email: 'client1@example.com',
			phone: '010-1234-1234',
			nickname: '의뢰인 1',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
			profile: {
				contactTime: '언제나 가능',
			},
		},
		portfolio: {
			id: 'portfolio1',
			title: '앱 포트폴리오 2',
			summary: '전문가 2의 금융 웹 포트폴리오',
		},
		commission: null,
		messages: {
			message1: {
				from: {
					id: 'expert2',
					nickname: '전문가 2',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBr5YL%2FbtsFjJYBngF%2F07xL1kdIED7piDK87orbLk%2Fimg.jpg',
				},
				files: null,
				content: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message2: {
				from: {
					id: 'client1',
					nickname: '의뢰인 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
				},
				files: null,
				content: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			},
		},
		lastMessage: {
			id: 'message2',
			from: {
				id: 'client1',
				nickname: '의뢰인 1',
				profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
			},
			files: null,
			content: 'hello!',
			createdAt: new Date(Date.now()),
			isRead: false,
		},
	},
	room3: {
		expert: {
			id: 'expert3',
			name: '조지 해리슨',
			email: 'expert3@example.com',
			phone: '010-1234-1234',
			nickname: '전문가 3',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbOVHGe%2FbtsFfXxfMO0%2Ftrn1Afi90BAxyIg1Wp7dpK%2Fimg.webp',
			profile: {
				score: 90,
				contactTime: '언제나 가능',
			},
		},
		client: {
			id: 'client1',
			name: '김의뢰1',
			email: 'client1@example.com',
			phone: '010-1234-1234',
			nickname: '의뢰인 1',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
			profile: {
				contactTime: '언제나 가능',
			},
		},
		portfolio: {
			id: 'portfolio3',
			title: '일러스트 포트폴리오 1',
			summary: '출판 일러스트 포트폴리오 입니다.',
		},
		commission: null,
		messages: {
			message1: {
				from: {
					id: 'expert3',
					nickname: '전문가 3',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbOVHGe%2FbtsFfXxfMO0%2Ftrn1Afi90BAxyIg1Wp7dpK%2Fimg.webp',
				},
				files: null,
				content: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message2: {
				from: {
					id: 'client1',
					nickname: '의뢰인 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
				},
				files: null,
				content: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			}
		},
		lastMessage: {
			id: 'message2',
			from: {
				id: 'client1',
				nickname: '의뢰인 1',
				profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
			},
			files: null,
			content: 'hello!',
			createdAt: new Date(Date.now()),
			isRead: false,
		},
	},
	room4: {
		expert: {
			id: 'expert4',
			name: '링고 스타',
			email: 'expert4@example.com',
			phone: '010-1234-1234',
			nickname: '전문가 4',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb90Gda%2FbtsFgQ5uxiQ%2FzLKxrP3uXzm4Lz5bJtck01%2Fimg.png',
			profile: {
				score: 90,
				contactTime: '언제나 가능',
			},
		},
		client: {
			id: 'client1',
			name: '김의뢰1',
			email: 'client1@example.com',
			phone: '010-1234-1234',
			nickname: '의뢰인 1',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
			profile: {
				contactTime: '언제나 가능',
			},
		},
		portfolio: {
			id: 'portfolio4',
			title: '사진 포트폴리오 1',
			summary: '사진 포트폴리오 1입니다.',
		},
		commission: null,
		messages: {
			message1: {
				from: {
					id: 'expert4',
					nickname: '전문가 4',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb90Gda%2FbtsFgQ5uxiQ%2FzLKxrP3uXzm4Lz5bJtck01%2Fimg.png',
				},
				files: null,
				content: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message2: {
				from: {
					id: 'client1',
					nickname: '의뢰인 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
				},
				files: null,
				content: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			}
		},
		lastMessage: {
			id: 'message2',
			from: {
				id: 'client1',
				nickname: '의뢰인 1',
				profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
			},
			files: null,
			content: 'hello!',
			createdAt: new Date(Date.now()),
			isRead: false,
		},
	},
	room5: {
		expert: {
			id: 'expert5',
			name: '프레디 머큐리',
			email: 'expert5@example.com',
			phone: '010-1234-1234',
			nickname: '전문가 5',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKI3fH%2FbtsFmgnPdb8%2FY5u2ykbM5MajK1UMuot0wK%2Fimg.jpg',
			profile: {
				score: 90,
				contactTime: '언제나 가능',
			},
		},
		client: {
			id: 'client1',
			name: '김의뢰1',
			email: 'client1@example.com',
			phone: '010-1234-1234',
			nickname: '의뢰인 1',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F82NGq%2FbtsCsv2n9fS%2Fb9VYv7jz81krLrKgSW1K40%2Fimg.jpg',
			profile: {
				contactTime: '언제나 가능',
			},
		},
		portfolio: {
			id: 'portfolio5',
			title: '비디오 포트폴리오 1',
			summary: '자연 비디오 포트폴리오 입니다.',
		},
		commission: null,
		messages: {
			message1: {
				from: {
					id: 'expert1',
					nickname: '전문가 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKI3fH%2FbtsFmgnPdb8%2FY5u2ykbM5MajK1UMuot0wK%2Fimg.jpg',
				},
				files: null,
				content: 'hello',
				createdAt: new Date(Date.now()),
				isRead: true,
			},
			message2: {
				from: {
					id: 'client1',
					nickname: '의뢰인 1',
					profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
				},
				files: null,
				content: 'hello!',
				createdAt: new Date(Date.now()),
				isRead: false,
			}
		},
		lastMessage: {
			id: 'message2',
			from: {
				id: 'client1',
				nickname: '의뢰인 1',
				profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvXGcm%2FbtsFjKC92MK%2FCDKTPVlYpVXR1swuTrlWiK%2Fimg.jpg',
			},
			files: null,
			content: 'hello!',
			createdAt: new Date(Date.now()),
			isRead: false,
		},
	},
}