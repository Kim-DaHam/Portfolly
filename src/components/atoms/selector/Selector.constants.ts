import { categories } from "@/assets/data/portfolio";
import { Section } from '@/types';

export type CommissionType = '전체 상품' | 'Android/iOS' | 'Web' | 'Illustration' | 'Graphics'  | 'Video';
export type CommissionState = '전체 상태' | '진행 중' | '작업물 도착' | '구매 확정' | '작성 가능한 리뷰' | '주문 취소' | '취소/문제해결' | '분쟁 조정 중';
export type SearchFilter = '닉네임' | '프로젝트명';
export type MessageState = '전체' | '안 읽음' | '거래 중';

type SelectorList = {
	section: Section[];
	category: {
		[key in Section] : string[];
	};
	commissionType: CommissionType[];
	commissionState: CommissionState[];
	searchFilter: SearchFilter[];
	messageState: MessageState[];
};

export const selectorList: SelectorList = {
	section: ['Android/iOS', 'Web', 'Illustration', 'Photo', 'Video'],
	category: {...categories},
	commissionType: ['전체 상품', 'Android/iOS', 'Web', 'Illustration', 'Graphics', 'Video'],
	commissionState: ['전체 상태', '진행 중', '작업물 도착', '구매 확정', '작성 가능한 리뷰', '주문 취소', '취소/문제해결', '분쟁 조정 중'],
	searchFilter: ['닉네임', '프로젝트명'],
	messageState: ['전체', '안 읽음', '거래 중'],
};