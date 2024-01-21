import { HttpResponse, http } from 'msw';

import { portfolios } from '../data/portfolios';
import { users } from '../data/users';

export const userHandlers= [
	http.get('/users', ({request}) => {
		const url = new URL(request.url);
		const userId = url.searchParams.get('id') as string;
		const loginId = '1';

		const user = users.find((user) => {
			return user.id === Number(userId);
		});

		if(userId !== loginId) {
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

		const responseData = {
			...user,
			portfolios: portfolioList,
			bookmarks: bookmarkList || [],
		};

		return HttpResponse.json(responseData, { status: 200 });
	}),

];