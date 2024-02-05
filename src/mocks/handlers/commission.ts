import { HttpResponse, http } from 'msw';

import { LOGIN_ID } from '.';
import { commissions } from '../data/commissions';
import { portfolios } from '../data/portfolios';
import { users } from '../data/users';

export const commissionHandlers= [
	http.post(`/commissions`, async ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('portfolio_id') as string;
		const clientId = url.searchParams.get('client_id') as string;

		const commission = await request.json() as any;
		const commissionId = commissions.length + 1;
		const expert = users.find((user) => user.id === LOGIN_ID);
		const portfolio = portfolios.find((portfolio) => portfolio.id === Number(portfolioId));

		const newCommission = {
			id: commissionId,
			portfolioId: Number(portfolioId),
			portfolio: {
				id: Number(portfolioId),
				title: portfolio?.title,
				summary: portfolio?.summary,
				thumbnailUrl: portfolio?.images[0],
			},
			expertId: LOGIN_ID,
			expert: {
				id: LOGIN_ID,
				nickname: expert?.nickname,
				name: expert?.name,
				phone: expert?.phone,
				profileImage: expert?.profileImage,
			},
			clientId: Number(clientId),
			createdAt: `${Date.now()}`,
			endedAt: '',
			details: {
				cost: 0,
				status: '진행 중',
				...commission,
			},
			review: null,
		};

		commissions.push(newCommission);

		return HttpResponse.json(newCommission, { status: 200 });
	}),

	http.patch(`/commissions`, async ({request}) => {
		const url = new URL(request.url);
		const commissionId = url.searchParams.get('id') as string;
		const commissionData = await request.json() as any;
		const response: any = {};

		commissions.map((commission: any) => {
			if(commission.id === Number(commissionId)){
				Object.assign(commission.details, commissionData);
				Object.assign(response, commission);
			}
		});

		return HttpResponse.json(response, { status: 200 });
	}),

	http.post(`/reviews`, async ({request}) => {
		const url = new URL(request.url);
		const commissionId = url.searchParams.get('id') as string;
		const reviewData = await request.json() as any;
		const response: any = {};

		const commission = commissions.find((commission: any) => {
			return commission.id === Number(commissionId);
		});

		Object.assign(response, {
			createdAt: Date.now(),
			...reviewData,
		});

		commission!.review = response;

		return HttpResponse.json(response, { status: 200 });
	})

];