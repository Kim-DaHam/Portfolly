import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { userState } from "@/redux/loginSlice";
import { Commission, Portfolio } from "@/types";

import { fetch } from '@/utils'

// 커미션 폼 작성
export const usePostCommissionQuery = (portfolioId: string, clientId?: string, commissionId?: string) => {
	const queryClient = useQueryClient();
	const postUrl = `/commissions?portfolio_id=${portfolioId}&client_id=${clientId}`;
	const patchUrl = `/commissions?commission_id=${commissionId}&portfolio_id=${portfolioId}`;

	const { id: userId } = useSelector(userState);
	const user = queryClient.getQueryData(['user', `${userId}`]) as any;
	const message = queryClient.getQueryData(['message', `${clientId}`]) as any;

	const addCommission = (body: any) => fetch(postUrl, 'POST', body);
	const updateCommission = (body: any) => fetch(patchUrl, 'PATCH', body);

	return useMutation({
		mutationFn: commissionId? updateCommission : addCommission,
		onSuccess: (response: Commission | Portfolio) => {
			const isPatchRequestOnMyPage = commissionId && user;
			const commissionList = JSON.parse(JSON.stringify(user.commissionList));
			const portfolioList = JSON.parse(JSON.stringify(user.portfolioList));

			if(isPatchRequestOnMyPage) {
				commissionList.flat().forEach((commission: Commission, index: number) => {
					if(commission.id !== commissionId) return;
					Object.assign(commissionList[index], response);
					return false;
				});

				portfolioList.forEach((portfolio: Portfolio) => {
					if(portfolio.id !== portfolioId) return;
					portfolio.commissions![commissionId!] = response as Commission;
					return false;
				});

				queryClient.setQueryData(['user', `${userId}`], {
					...user,
					commissionList: commissionList,
					portfolioList: portfolioList,
				});
				return;
			}

			queryClient.setQueryData(['message', `${clientId}`], () => {
				commissionId = response.id;
				message.commission = response;
				return message;
			});

			return response;
		},
	});
};

export const useReviewPostQuery = (id: number) => {
	const queryClient = useQueryClient();
	const { id: userId } = useSelector(userState);
	const user = queryClient.getQueryData(['user', `${userId}`]) as any;

	const postReview = (body: any) => fetch(`/reviews?id=${id}`, 'POST', body)

	return useMutation({
		mutationFn: postReview,
		onSuccess: (response: any) => {
			queryClient.setQueryData(['user', `${userId}`], () => {
				const commission = user.activity.commissions.find((commission: any) => {
					return commission.id === id;
				});

				commission.review = response;
			});
			return;
		}
	})
};