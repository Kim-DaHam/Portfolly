import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { userId as UserId} from "@/redux/loginSlice";
import { fetch } from '@/utils'

export const usePostCommissionQuery = (id?: number) => {
	const queryClient = useQueryClient();
	const userId = String(useSelector(UserId));
	const user = queryClient.getQueryData(['user', userId]) as any;

	const postPortfolio = (body: any) => fetch(`/commissions`, 'POST', body);
	const updatePortfolio = (body: any) => fetch(`/commissions?id=${id}`, 'PATCH', body);

	return useMutation({
		mutationFn: id? updatePortfolio : postPortfolio,
		onSuccess: (response: any) => {
			const responseData = {};

			if(id) {
				queryClient.setQueryData(['user', userId], () => {
					const commission = user.activity.commissions.find((commission: any) => {
						return commission.id === id;
					})

					Object.assign(commission, response);
					Object.assign(responseData, commission);
				});

				return responseData;
			}

			queryClient.setQueryData(['user', userId], () => {
				user.activity.commissions.push(response);
			});
		},
	});
};

export const useReviewPostQuery = (id: number) => {
	const queryClient = useQueryClient();
	const userId = String(useSelector(UserId));
	const user = queryClient.getQueryData(['user', userId]) as any;

	const postReview = (body: any) => fetch(`/reviews?id=${id}`, 'POST', body)

	return useMutation({
		mutationFn: postReview,
		onSuccess: (response: any) => {
			queryClient.setQueryData(['user', userId], () => {
				const commission = user.activity.commissions.find((commission: any) => {
					return commission.id === id;
				});

				commission.review = response;
			});
			return;
		}
	})
};