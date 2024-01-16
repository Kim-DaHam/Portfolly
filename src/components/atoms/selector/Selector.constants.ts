import { categories } from "@/assets/data/portfolio";
import { TSelector } from "@/components/atoms/selector/Selector";

export const selectorList: {[key in TSelector] : Array<string>} = {
	section: ['Android/iOS', 'Web', 'Illustration', 'Photo', 'Video'],
	...categories,
	requestType: ['전체 상품', 'Android/iOS', 'Web', 'Illustration', 'Graphics', 'Video'],
	requestState: ['전체 상태', '진행중', '작업물 도착', '구매 확정', '작성 가능한 리뷰', '주문 취소', '취소/문제해결', '분쟁 조정 중'],
	searchFilter: ['닉네임', '프로젝트명'],
	meassageState: ['전체', '안 읽음', '거래 중'],
}