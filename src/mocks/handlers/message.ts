import { HttpResponse, http } from 'msw';

import { messageRooms } from '@/mocks/nosql-data/messages';

import { AUTHORITY, LOGIN_ID, MY_ID, PARTNER_AUTHORITY } from '.';

import type { MessageRoom } from '@/types';

export const messageHandlers= [
	http.get('/messageRoom', ({request}) => {
		const url = new URL(request.url);
		const partnerId = url.searchParams.get('partner_id') as string;

		const messageRoomsDocKeys: string[] = Object.keys(messageRooms);

		const messageRoomList: MessageRoom[] = [];
		const messageRoom: any & MessageRoom = {};

		messageRoomsDocKeys.forEach((docKey: any) => {
			const room = messageRooms[docKey];
			const isMyMessageRoom = room[AUTHORITY]?.id === LOGIN_ID;

			// 메세지룸 목록을 만든다.
			if(isMyMessageRoom) {
				messageRoomList.push({
					id: docKey,
					partner: room[PARTNER_AUTHORITY],
					commission: room.commission,
				});

				// '/messages' 경로로 들어와 partnerId가 존재하지 않을 경우 가장 첫 번째 messageRoom 정보를 제공한다.
				if(partnerId === room[PARTNER_AUTHORITY]?.id) {
					Object.assign(messageRoom, {
						partner: room[PARTNER_AUTHORITY],
						...room,
					});
				}
			}
		});

		const responseData = {
			messageRoomList: messageRoomList,
			messageRoom: Object.keys(messageRoom).length > 0 ? messageRoom : null,
		};

		return HttpResponse.json(responseData, { status: 200 });
	}),

	// 메세지룸 삭제
	http.delete(`/messageRooms`, ({request}) => {
		const url = new URL(request.url);
		const partnerId = url.searchParams.get('partner_id') as string;

		const messageRoomsDocKeys = Object.keys(messageRooms);

		messageRoomsDocKeys.forEach((docKey: string) => {
			const room = messageRooms[docKey];
      if (room[PARTNER_AUTHORITY]?.id === partnerId && room[AUTHORITY]?.id === LOGIN_ID){
				delete messageRooms[docKey];
				return false;
			}
    });

		return HttpResponse.json(null, { status: 200 });
	}),

];