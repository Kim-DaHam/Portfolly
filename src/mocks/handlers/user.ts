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
		const portfolioList: any[] = [];
		const commissionsList: any[] = [];
		const reviewList: any[] = [];

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

		portfolioDocKeys.map((docKey: string) => {
			const portfolio = portfolios[docKey] as Portfolio;
			const isUserPortfolio = portfolio.user.id === userId;
			const commissionDocKeys: string[] = Object.keys(portfolio.commissions!) || [];

			// 전문가 계정 + 본인의 포트폴리오인 경우
			if(isUserPortfolio) {
				portfolioList.push({
					id: docKey,
					...portfolio,
				});

				commissionDocKeys.forEach((commissionDocKey: string) => {
					const commission = portfolio.commissions![commissionDocKey] as Commission;
					const review = commission.review;
					const client = commission.client;

					commissionsList.push({
						...commission,
						id: commissionDocKey,
						expert: portfolio.user,
						review: review ? {
							user: {
								nickname: client.nickname,
								profileImage: client.profileImage,
							},
							portfolio: {
								id: docKey,
								thumbnailUrl: portfolio.images[0],
							},
							...commission.review,
						} : null,
						portfolio: {
							id: docKey,
							section: portfolio.section,
							title: portfolio.title,
							summary: portfolio.summary,
							thumbnailUrl: portfolio.images[0],
						},
					});
					review && reviewList.push({
						id: commissionDocKey+'review',
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

				return;
			}

			// 클라이언트 계정인 경우
			commissionDocKeys.forEach((commissionDocKey: string) => {
				const commission = portfolio.commissions![commissionDocKey] as Commission;
				const review = commission.review;
				const client = commission.client;

				if(commission.client.id === LOGIN_ID) {
					commissionsList.push({
						...commission,
						id: commissionDocKey,
						expert: portfolio.user,
						review: review ? {
							user: {
								nickname: client.nickname,
								profileImage: client.profileImage,
							},
							portfolio: {
								id: docKey,
								thumbnailUrl: portfolio.images[0],
							},
							...commission.review,
						} : null,
						portfolio: {
							id: docKey,
							section: portfolio.section,
							title: portfolio.title,
							summary: portfolio.summary,
							thumbnailUrl: portfolio.images[0],
						},
					});
				}
			})
			return;
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