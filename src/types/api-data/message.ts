import type { Authority, CommissionStatus } from "@/types";

export type MessageRooms = {
	[key in string]: MessageRoom;
};

export type Messages = {
	[key in string] : Message;
};

export type MessageRoom = Partners & {
	id?:string,
	partner?: Partner,
	portfolio?: {
		id: string,
		title: string,
		summary: string,
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
		},
		review: {
			score: number,
			content: string,
		},
	} | null,
	messages?: Messages | null,
	lastMessage: Message | null,
};

export type Partners = {
	[key in Authority]?: Partner
};

export type Partner = {
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

export type Message = {
	id?: string,
	from: {
		id: string,
		nickname: string,
		profileImage: string,
	},
	files: File[] | null,
	content: string,
	createdAt: Date,
	isRead: boolean,
};

export type File = {
	type: string,
	name: string,
	url: string,
};

export type MessageStatus = '안 읽음' | '거래 중';