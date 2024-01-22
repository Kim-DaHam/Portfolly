import { HttpResponse, http } from 'msw';

import { commissions } from '../data/commissions';
import { portfolios } from '../data/portfolios';
import { users } from '../data/users';

export const userHandlers= [
	http.get('/users', ({request}) => {
		const url = new URL(request.url);
		const userId = url.searchParams.get('id') as string;
		const loginId = '1';
		const isMyProfie = userId === loginId;

		const user = users.find((user) => {
			return user.id === Number(userId);
		});

		if(!isMyProfie) {
			delete user?.name;
			delete user?.phone;
			delete user?.likes;
		}

		const portfolioList: any[] = [];

		portfolios.map((portfolio) => {
			const isUsersPortfolio = user!.portfolios!.indexOf(portfolio.id) > -1;
			if(isUsersPortfolio) {
				const portfolioData = {
					id: portfolio.id,
					title: portfolio.title,
					summary: portfolio.summary,
					image: portfolio.images[0],
				};
				portfolioList.push(portfolioData);
			}
		});

		const bookmarkList: any[] = [];

		if(userId === loginId) {
			portfolios.map((portfolio) => {
				const isBookmarked = user!.bookmarks!.indexOf(portfolio.id) > -1;

				if(isBookmarked) {
					const portfolioData = {
						id: portfolio.id,
						title: portfolio.title,
						summary: portfolio.summary,
						image: portfolio.images[0],
					};
					bookmarkList.push(portfolioData);
				}
			});
		}

		const commissionList: any[] = [];
		const reviewList: any[] = [];

		commissions.map((commission: any) => {
			const isUsersCommission = user!.activity.commissions!.indexOf(commission.id) > -1;

			if(isUsersCommission) {
				const portfolio = portfolios.find((portfolio) => portfolio.id === commission.portfolioId);

				commission.portfolio = {
					title: portfolio?.title,
					summary: portfolio?.summary,
					thumbnailUrl: portfolio?.images[0],
				};

				if(commission.review) {
					const user = users.find((user) => user.id === commission.clientId);

					commission.review.portfolio = commission.portfolio;
					commission.review.user = {
						id: user?.id,
						nickname: user?.nickname,
						profileImage: user?.profileImage,
					};

					reviewList.push(commission.review);
				}

				commissionList.push(commission);
			}
		});
		user!.activity.commissions = commissionList;

		const responseData = {
			...user,
			reviews: reviewList,
			portfolios: portfolioList,
			bookmarks: bookmarkList || [],
		};

		return HttpResponse.json(responseData, { status: 200 });
	}),

];