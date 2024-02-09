import { HttpResponse, http } from 'msw';

import { LOGIN_ID } from '@/mocks/handlers';
import { portfolios } from '@/mocks/nosql-data/portfolios';
import { users } from '@/mocks/nosql-data/users';
import { Commission, Portfolio, User } from '@/types';

export const userHandlers= [
	http.get('/users', ({request}) => {
		const url = new URL(request.url);
		const userId = url.searchParams.get('id') as string;
		const isMyProfile = userId === LOGIN_ID;

		const portfolioDocKeys: string[] = Object.keys(portfolios);
		const user: User = users[userId];

		const bookmarkList: any[] = [];

		if(isMyProfile) {
			const bookmarkDocKeys: string[] = Object.keys(user.bookmarks!) || [];
			bookmarkDocKeys.map((docKey: string) => {
				const bookmark = user.bookmarks![docKey];
				bookmarkList.push({
					id: docKey,
					...bookmark,
				})
			});
		}

		// 사용자 포트폴리오, 리뷰, 커미션 목록을 생성한다.
		const portfolioList: any[] = [];
		const commissionsList: any[] = [];
		const reviewList: any[] = [];

		portfolioDocKeys.map((docKey: string) => {
			const portfolio = portfolios[docKey] as Portfolio;
			const isUserPortfolio = portfolio.user.id === userId;
			const commissionDocKeys: string[] = Object.keys(portfolio.commissions!) || [];

			if(isUserPortfolio) {
				portfolioList.push({
					id: docKey,
					...portfolio,
				});

				commissionDocKeys.map((commissionDocKeys: string) => {
					const commission = portfolio.commissions![commissionDocKeys] as Commission;
					const review = commission.review;
					const client = commission.client;

					commissionsList.push({
						...commission,
						id: commissionDocKeys,
						expert: portfolio.user,
						review: {
							user: {
								nickname: client.nickname,
								profileImage: client.profileImage,
							},
							portfolio: {
								id: docKey,
								thumbnailUrl: portfolio.images[0],
							},
							...commission.review,
						},
						portfolio: {
							id: docKey,
							section: portfolio.section,
							title: portfolio.title,
							summary: portfolio.summary,
							thumbnailUrl: portfolio.images[0],
						}
					});
					review && reviewList.push({
						id: commissionDocKeys+'review',
						user: {
							nickname: client.nickname,
							profileImage: client.profileImage,
						},
						portfolio: {
							id: docKey,
							thumbnailUrl: portfolio.images[0],
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
		}

		const responseData = {
			...user,
			portfolioList: portfolioList,
			commissionList: commissionsList,
			reviewList: reviewList,
			bookmarkList: isMyProfile ? bookmarkList : [],
		};

		console.log(responseData);

		return HttpResponse.json(responseData, { status: 200 });
	}),

];