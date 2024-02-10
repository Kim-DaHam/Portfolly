import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import { userState } from "@/redux/loginSlice";
import { Commission, Portfolio, Review, User } from "@/types";

import { setToast } from "@/redux";
import { fetch } from '@/utils'

// 커미션 폼 작성
export const usePostCommissionQuery = (portfolioId: string, clientId?: string, commissionId?: string) => {
	const dispatch = useDispatch();
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

			dispatch(setToast({id: 0, type: 'success', message: '커미션이 수정되었습니다.'}));
			return response;
		},
		onError: () => {
			dispatch(setToast({id: 0, type: 'error', message: '수정을 실패했습니다.'}));
			return;
		},
	});
};

// 리뷰 작성
export const useReviewPostQuery = (commissionId: string, portfolioId: string) => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();
	const { id: userId } = useSelector(userState);
	const user = queryClient.getQueryData(['user', `${userId}`]) as any;
	const commissionList = JSON.parse(JSON.stringify(user.commissionList));

	const postReview = (body: any) => fetch(`/reviews?
		commission_id=${commissionId}&
		portfolio_id=${portfolioId}`,
		'POST',
		body
	)

	return useMutation({
		mutationFn: postReview,
		onSuccess: (response: Review) => {
			commissionList.forEach((commission: Commission, index: number) => {
				if(commission.id !== commissionId) return;
				commissionList[index].review = response;
				return false;
			})

			queryClient.setQueryData(['user', `${userId}`], {
				...user,
				commissionList: commissionList,
			});

			dispatch(setToast({id: 0, type: 'success', message: '리뷰를 등록했습니다.'}));

			return;
		},
		onError: () => {
			dispatch(setToast({id: 0, type: 'error', message: '리뷰 등록에 실패했습니다.'}));
			return;
		},
	})
};