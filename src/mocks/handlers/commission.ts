import { HttpResponse, http } from 'msw';

import { LOGIN_ID } from '@/mocks/handlers';
import { portfolios } from '@/mocks/data/portfolios';
import { users } from '@/mocks/data/users';
import { Commission, Portfolio, Review, User } from '@/types';

import { generateRandomString, toLocalDateString } from '@/utils';

export const commissionHandlers= [
	// 커미션 폼 작성 핸들러
	http.post(`/commissions`, async ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('portfolio_id') as string;
		const clientId = url.searchParams.get('client_id') as string;
		const portfolio = portfolios[portfolioId] as Portfolio;
		const client = users[clientId] as User;

		const commissionForm = await request.json() as any;
		const commissionId = generateRandomString(20);

		const newCommission: Commission = {
			id: commissionId,
			portfolio: {
				id: portfolioId,
				section: portfolio.section,
				title: portfolio.title,
				summary: portfolio.summary,
				thumbnailUrl: portfolio.images[0],
			},
			client: {
				id: clientId,
				name: client.name!,
				email: client.email,
				phone: client.phone!,
				nickname: client.nickname,
				profileImage: client.profileImage,
			},
			expert: {
				id: LOGIN_ID,
				email: portfolio.user.email,
				name: portfolio.user.name,
				phone: portfolio.user.phone,
				nickname: portfolio.user.nickname,
				profileImage: portfolio.user.profileImage,
			},
			createdAt: toLocalDateString(Date.now()),
			endedAt: null,
			details: {
				cost: 0,
				status: '진행 중',
				...commissionForm,
			},
			review: null,
		};

		portfolio.commissions![commissionId] = newCommission;

		return HttpResponse.json(portfolio, { status: 200 });
	}),

	// 커미션 폼 수정
	http.patch(`/commissions`, async ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('portfolio_id') as string;
		const commissionId = url.searchParams.get('commission_id') as string;

		const commissionForm = await request.json() as any;
		const portfolio = portfolios[portfolioId] as Portfolio;
		const commission = portfolio.commissions![commissionId] as Commission;

		Object.assign(commission.details, commissionForm);

		return HttpResponse.json(commission, { status: 200 });
	}),

	// 리뷰 작성
	http.post(`/reviews`, async ({request}) => {
		const url = new URL(request.url);
		const commissionId = url.searchParams.get('commission_id') as string;
		const portfolioId = url.searchParams.get('portfolio_id') as string;

		const portfolio = portfolios[portfolioId] as Portfolio;
		const commission = portfolio.commissions![commissionId] as Commission;
		const reviewForm = await request.json() as any;

		commission.review = {
			createdAt: toLocalDateString(Date.now()),
			...reviewForm,
		};

		const review: Review = JSON.parse(JSON.stringify(commission.review!));
		Object.assign(review, {
			user: {
        nickname: commission.client.nickname,
        profileImage: commission.client.profileImage,
			},
			portfolio: {
				id: portfolioId,
				thumbnailUrl: portfolio.images[0],
			},
		})

		return HttpResponse.json(review, { status: 200 });
	})

];