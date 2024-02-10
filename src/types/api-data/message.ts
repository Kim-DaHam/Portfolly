import type { Authority, CommissionStatus } from "@/types";

export type MessageRooms = {
	[key in string]: MessageRoom;
};

export type MessageRoom = Partner & {
	id?:string;
	portfolio: {
		id: string,
		title: string,
		summary: string,
		thumbnailUrl: string,
	},
	commission: {
		id: string,
		createdAt: string,
		endedAt: string,
		details: {
			title: string,
			content: string,
			cost: number,
			status: CommissionStatus,
			deadline: string
		} | null,
		review: {
			score: number,
			content: string,
		},
	},
	messages: {
		[key in string] : Message;
	},
};

export type Partner = {
	[key in Authority]: {
		id: string,
		name: string,
		email: string,
		phone: string,
		nickname: string,
		profileImage: string,
		profile: {
			score?: number,
			contactTime: string,
		},
	};
};

export type Message = {
	from: {
		nickname: string,
		profileImage: string,
	},
	msg: string,
	createdAt: string,
	isRead: boolean,
};

export type MessageStatus = '안 읽음' | '거래 중';