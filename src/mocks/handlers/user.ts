import { HttpResponse, http } from 'msw';

import { LOGIN_ID } from '@/mocks/handlers';
import { portfolios } from '@/mocks/nosql-data/portfolios';
import { users } from '@/mocks/nosql-data/users';
import { Commission, User } from '@/types';

export const userHandlers= [
	http.get('/users', ({request}) => {
		const url = new URL(request.url);
		const userId = url.searchParams.get('id') as string;
		const isMyProfile = userId === LOGIN_ID;

		const portfolioDocKey: string[] = Object.keys(portfolios);
		const user: User = users[userId];

		// 사용자 포트폴리오, 리뷰, 커미션 목록을 생성한다.
		const portfolioList: any[] = [];
		const commissionsList: any[] = [];
		const reviewList: any[] = [];

		portfolioDocKey.map((docKey: string) => {
			const isUserPortfolio = portfolios[docKey].user.id === userId;
			const commissionDocKey: string[] = Object.keys(portfolios[docKey].commissions!) || [];

			if(isUserPortfolio) {
				portfolioList.push({
					id: docKey,
					...portfolios[docKey]
				});

				commissionDocKey.map((commissionDocKey: string) => {
					const commission = portfolios[docKey].commissions![commissionDocKey] as Commission;
					const review = commission.review;
					const client = commission.client;

					commissionsList.push(portfolios[docKey].commissions![commissionDocKey]);
					review && reviewList.push({
						user: {
							nickname: client.nickname,
							profileImage: client.profileImage,
						},
						...review,
					})
				})
			}
		});

		if(!isMyProfile) {
			delete user.name;
			delete user.phone;
			delete user.likes;
			delete user.bookmarks;
		}

		const responseData = {
			...user,
			portfolios: portfolioList,
			commissionList: commissionsList,
			reviewList: reviewList,
		};

		console.log(responseData);

		return HttpResponse.json(responseData, { status: 200 });
	}),

];