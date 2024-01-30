import { HttpResponse, http } from 'msw';

import { messageRooms } from '../data/messages';
import { portfolios } from '../data/portfolios';
import { users } from '../data/users';

import { User } from '@/types';

const LOGIN_ID: number = 100;
const AUTHORITY: string = 'client';

export const messageHandlers= [
	http.get('/messageRooms', ({request}) => {
		const url = new URL(request.url);
		const partnerId = url.searchParams.get('partner_id') as string;

		const PARTNER_ID = (AUTHORITY === 'expert') ? 'clientId' : 'expertId';

		const messageRoomList: any[] = [];
		const message: any[] = [];

		messageRooms.map((room: any) => {
			const isMyMessageRoom = room.clientId === LOGIN_ID || room.expertId === LOGIN_ID;

			if(isMyMessageRoom) {
				// 메세지 목록 데이터를 만든다.
				const partner = users.find((user) => user.id === room[PARTNER_ID]) as User;

				messageRoomList.push({
					id: room.id,
					lastMessage: room.lastMessage,
					timestamp: room.timestamp,
					commissionStatus: room.commissionStatus,
					isRead: room.messages[room.messages.length -1].isRead ? true : false,
					partner: {
						id: partner?.id,
						nickname: partner?.nickname,
						profileImage: partner?.profileImage,
					}
				});

				// 특정 파트너와의 대화 데이터를 가져온다.
				if(Number(partnerId) === partner?.id) {
					room.partner = {
						nickname: partner?.nickname,
						profileImage: partner?.profileImage,
						...partner?.activity,
					};

					room.portfolio = portfolios.find((portfolio) => portfolio.id === room.portfolioId);


					const recentMessages = room.messages.filter((index: number) => index < 50);

					message.push({
						...room,
						messages: recentMessages,
					});
				}
			}
		});

		const responseData = {
			messageRooms: messageRoomList,
			...message,
		}

		return HttpResponse.json(responseData, { status: 200 });
	}),

];