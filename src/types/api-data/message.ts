import { CommissionStatus } from "..";

export type MessageRooms = {
	[key in string]: MessageRoom;
};

export type MessageRoom = {
	name: string,
	expert: {
		name: string,
		email: string,
		phone: string,
		nickname: string,
		profileImage: string,
		profile: {
			score: number,
			contactTime: string,
		},
	},
	client: {
		name: string,
		email: string,
		phone: string,
		nickname: string,
		profileImage: string,
		profile: {
			contactTime: string,
		},
	},
	portfolio: {
		id: string,
		title: string,
		summary: string,
		thumbnailUrl: string,
	},
	commission: {
		id: string,
		createdAt: Date,
		endedAt: Date,
		details: {
			title: string,
			content: string,
			cost: number,
			status: CommissionStatus,
			deadline: Date
		},
		review: {
			score: number,
			content: string,
		},
	},
	messages: {
		[key in string] : Message;
	},
};

export type Message = {
	from: {
		nickname: string,
		profileImage: string,
	},
	msg: string,
	createdAt: Date,
	isRead: boolean,
	messageStatus: MessageStatus;
};

export type MessageStatus = '안 읽음' | '거래 중';