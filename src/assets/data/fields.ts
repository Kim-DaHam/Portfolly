import { CommissionState, MessageState, SearchFilter, Section } from "@/types";

export const sections: Section[] = ['Android/iOS', 'Web', 'Illustration', 'Photo', 'Video'];

export const categories: {[key in Section]: string[]} = {
	'Android/iOS': ['금융', '비즈니스', '쇼핑', '음식', '교육', '건강 & 휘트니스', '여행 & 교통', '엔터테이먼트', '인공지능', 'CRM', '라이프 스타일', 'Crypto & Web3', '생산', '커뮤니티'],
	'Web': ['금융', '비즈니스', '쇼핑', '음식', '교육', '건강 & 휘트니스', '여행 & 교통', '엔터테이먼트', '인공지능', 'CRM', '라이프 스타일', 'Crypto & Web3', '생산', '커뮤니티', '개발 도구'],
	'Illustration': ['출판', '마케팅 & 광고', '콘셉트 아트', '패션', '테크니컬', '인포그래픽', '패키징', '캐리커쳐', '3D그래픽', '게임'],
	'Photo': ['인물', '이벤트', '웨딩', '미술', '건축', '상업', '사물', '자연'],
	'Video': ['자연', '음악', '영화', '다큐멘터리', '요리', '일상', '편집'],
};

export const commissionStates: CommissionState[] = ['진행 중', '작업물 도착', '구매 확정', '주문 취소', '취소/문제해결', '분쟁 조정 중'];

export const searchFilters: SearchFilter[] = ['닉네임', '프로젝트명'];

export const messageStates: MessageState[] = ['안 읽음', '거래 중'];