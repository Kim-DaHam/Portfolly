import { CommissionState } from "@/types";

export const countCommissionState = (commissions: any[]) => {
	const commissionsState: {[key in CommissionState | string]: number} = {
		'진행 중': 0,
		'작업물 도착': 0,
		'취소/문제해결': 0,
		'구매 확정': 0,
		'작성 가능한 리뷰': 0,
		'작성된 리뷰': 0,
		'주문 취소': 0,
	};

	commissions.map((commission: any) => {
		const state = commission.details.state as CommissionState;
		commissionsState[state] += 1;

		if(state === '구매 확정' && commission.review === null) {
			commissionsState['작성 가능한 리뷰'] += 1;
		}

		if(commission.review) {
			commissionsState['작성된 리뷰'] += 1;
		}
	});

	return commissionsState;
};