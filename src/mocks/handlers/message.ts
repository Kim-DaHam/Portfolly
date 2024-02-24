import { HttpResponse, http } from 'msw';

import { messageRooms } from '@/mocks/data/messages';

import { AUTHORITY, LOGIN_ID, PARTNER_AUTHORITY } from '.';

import type { Message, MessageRoom } from '@/types';

import { generateRandomString } from '@/utils';

export const messageHandlers= [
	// 대화방 목록 가져오기
	http.get('/messageRooms', () => {
		const messageRoomsDocKeys: string[] = Object.keys(messageRooms);
		const messageRoomList: MessageRoom[] = [];

		messageRoomsDocKeys.forEach((docKey: any) => {
			const room = messageRooms[docKey];
			const isMyMessageRoom = room[AUTHORITY]?.id === LOGIN_ID;

			// 메세지룸 목록을 만든다.
			if(isMyMessageRoom) {
				messageRoomList.push({
					id: docKey,
					partner: room[PARTNER_AUTHORITY],
					commission: room.commission,
					lastMessage: room.lastMessage,
				});
			}
		});

		return HttpResponse.json(messageRoomList, { status: 200 });
	}),

	// 특정 대화방 가져오기
	http.get('/messageRoom', ({request}) => {
		const url = new URL(request.url);
		const roomId = url.searchParams.get('room_id') as string;

		const messageRoom = roomId !== 'null' ? JSON.parse(JSON.stringify(messageRooms[roomId])) : null;

		if(messageRoom) {
			Object.assign(messageRoom, {
				partner: messageRoom[PARTNER_AUTHORITY],
				...messageRoom,
			})
		}

		return HttpResponse.json(messageRoom, { status: 200 });
	}),

	// 메세지룸 삭제
	http.delete(`/messageRooms`, ({request}) => {
		const url = new URL(request.url);
		const roomId = url.searchParams.get('room_id') as string;

		delete messageRooms[roomId];

		return HttpResponse.json(null, { status: 200 });
	}),

	// 메세지 전송
	http.post(`/message`, async ({request}) => {
		const url = new URL(request.url);
		const roomId = url.searchParams.get('room_id') as string;
		const room = messageRooms[roomId] as MessageRoom;
		const messageForm = await request.json() as any;
		const messageId = generateRandomString(20);

		const files: any[] = [];

		if(messageForm.files.length > 0) {
			messageForm.files.forEach((file: File) => {
				files.push({
					type: file.type,
					name: file.name,
					url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
				})
			});
		}

		const message: Message = {
			from: {
				id: LOGIN_ID,
				nickname: '김강철',
				profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
			},
			isRead: false,
			createdAt: new Date(Date.now()),
			files: files.length > 0 ? files : undefined,
			message: files.length > 0 ? messageForm.files[0].name : messageForm.message,
		}

		room.messages![messageId] = message;

		return HttpResponse.json({id: messageId, message: message}, { status: 200 });
	}),

];