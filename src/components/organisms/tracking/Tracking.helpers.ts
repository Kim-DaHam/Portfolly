import { CommissionStatus } from "@/types";

export const countCommissionStatus = (commissions: any[]) => {
	const commissionsStatus: {[key in CommissionStatus | string]: number} = {
		'진행 중': 0,
		'작업물 도착': 0,
		'취소/문제해결': 0,
		'구매 확정': 0,
		'작성 가능한 리뷰': 0,
		'작성된 리뷰': 0,
		'주문 취소': 0,
	};

	commissions.map((commission: any) => {
		const status = commission.details.status as CommissionStatus;
		commissionsStatus[status] += 1;

		if(status === '구매 확정' && commission.review === null) {
			commissionsStatus['작성 가능한 리뷰'] += 1;
		}

		if(commission.review) {
			commissionsStatus['작성된 리뷰'] += 1;
		}
	});

	return commissionsStatus;
};