import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";

import { userId as UserId} from "@/redux/loginSlice";
import { fetch } from '@/utils'

export const usePostCommissionQuery = (id?: number) => {
	const userId = String(useSelector(UserId));
	const queryClient = useQueryClient();
	const user = queryClient.getQueryData(['user', userId]) as any;

	const postPortfolio = (body: any) => fetch(`/commissions`, 'POST', body);
	const updatePortfolio = (body: any) => fetch(`/commissions?id=${id}`, 'PATCH', body);


	return useMutation({
		mutationFn: id? updatePortfolio : postPortfolio,
		onSuccess: (response: any) => {
			const responseData = {};

			if(id) {
				queryClient.setQueryData(['user', userId], () => {
					user.activity.commissions.map((commission: any, index: number) => {
						if(commission.id === id) {
							user.activity.commissions[index] = response;
							Object.assign(responseData, user.activity.commissions[index]);
						}
					});
				});
				return responseData;
			}
			queryClient.setQueryData(['user', userId], () => {
				user.activity.commissions.push(response);
			});
		},
	});
};