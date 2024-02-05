import { HttpResponse, http } from 'msw';

import { LOGIN_ID, MY_ID, PARTNER_ID } from '.';
import { commissions } from '../data/commissions';
import { messageRooms } from '../data/messages';
import { portfolios } from '../data/portfolios';
import { users } from '../data/users';

import type { User } from '@/types';

export const messageHandlers= [
	http.get('/messageRooms', ({request}) => {
		const url = new URL(request.url);
		const partnerId = url.searchParams.get('partner_id') as string;

		const messageRoomList: any[] = [];
		const message: any = {};

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

				// '/messages' 경로로 들어와 partnerId가 존재하지 않을 경우 가장 첫 번째 messageRoom 정보를 받는다.
				if(Object.keys(message).length === 0 || Number(partnerId) === partner?.id) {
					const recentMessages = room.messages.filter((_: any ,index: number) => index < 50);

					const commission = commissions.find((commission) => commission.id === room.commissionId);
					const portfolio = portfolios.find((portfolio) => portfolio.id === room.portfolioId);
					const expert = users.find((user) => user.id === portfolio?.userId);

					Object.assign(message, {
						...room,
						partner: {
							id: partner.id,
							nickname: partner?.nickname,
							profileImage: partner?.profileImage,
							...partner?.activity,
						},
						portfolio: {
							title: portfolio?.title,
							summary: portfolio?.summary,
							thumbnailUrl: portfolio?.images[0],
							expert: {
								id: expert?.id,
								nickname: expert?.nickname,
								name: expert?.name,
								phone: expert?.phone,
								profileImage: expert?.profileImage,
							}
						},
						commission: commission || null,
						messages: recentMessages,
					});
				}
			}
		});

		const responseData = {
			messageRooms: messageRoomList,
			...message,
		};

		return HttpResponse.json(responseData, { status: 200 });
	}),

	http.delete(`/messageRooms`, ({request}) => {
		const url = new URL(request.url);
		const partnerId = url.searchParams.get('partner_id') as string;

		messageRooms.map((room: any, index: number) => {
      if (room[PARTNER_ID] === Number(partnerId) && room[MY_ID] === LOGIN_ID) {
				messageRooms.splice(index, 1);
			}
    });

		return HttpResponse.json(null, { status: 200 });
	}),

];