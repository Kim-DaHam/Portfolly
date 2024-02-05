import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { userState } from "@/redux/loginSlice";

import { fetch } from '@/utils'

export const usePostCommissionQuery = (commissionId?: number, clientId?: number) => {
	const queryClient = useQueryClient();

	const { id: userId } = useSelector(userState);
	const user = queryClient.getQueryData(['user', `${userId}`]) as any;
	const message = queryClient.getQueryData(['message', `${clientId}`]) as any;

	const addCommission = (body: any) => fetch(`/commissions?portfolio_id=${message.portfolioId}&client_id=${message.clientId}`, 'POST', body);
	const updateCommission = (body: any) => fetch(`/commissions?id=${commissionId}`, 'PATCH', body);

	return useMutation({
		mutationFn: commissionId? updateCommission : addCommission,
		onSuccess: (response: any) => {

			if(commissionId && user) {
				queryClient.setQueryData(['user', `${userId}`], () => {
					const commission = user.activity.commissions.find((commission: any) => {
						return commission.id === commissionId;
					})
					Object.assign(commission, response);
				});

				return response;
			}

			queryClient.setQueryData(['message', `${clientId}`], () => {
				commissionId = response.id;
				message.commission = response;
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