import { SelectorList } from "./Selector.type";

export const selectorList: SelectorList = {
	Section: ['Android/iOS', 'Web', 'Illlustration', 'Photo', 'Video'],
	'Android/iOS': ['Finance', 'Business', 'Shopping', 'Food & Drink', 'Education', 'Health & Fitness', 'Travel & Transportation', 'Communication', 'Entertainment', 'Artificial Intelligence', 'CRM', 'Lifestyle', 'Crypto & Web3', 'Productivity'],
	Web: ['Business', 'Finance', 'CRM', 'Shopping', 'Education', 'Health & Fitness', 'Entertainment', 'Communication', 'Travel & Transportation', 'Developer Tools'],
	Illustration: ['출판', '마케팅&광고', '콘셉트 아트', '패션', '테크니컬', '인포그래픽', '패키징', '캐리커쳐', '3D그래픽', '게임'],
	Photo: ['인물', '이벤트', '웨딩', '미술', '패션', '건축', '라이프스타일', '상업', '사물', '자연'],
	Video: ['광고', '음악', '영화', '다큐멘터리', '요리', '일상', '패션', '편집'],
	RequestType: ['전체 상품', 'Android/iOS', 'Web', 'Illlustration', 'Graphics', 'Video'],
	RequestState: ['전체 상태', '진행중', '작업물 도착', '구매 확정', '작성 가능한 리뷰', '주문 취소', '취소/문제해결', '분쟁 조정 중'],
	SearchFilter: ['닉네임', '프로젝트명'],
	MessageState: ['전체', '안 읽음', '거래 중'],
}