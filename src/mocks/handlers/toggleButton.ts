import { HttpResponse, http } from 'msw';

import { portfolios } from '../data/portfolios';
import { clients } from '../data/users';

export const toggleButtonHandlers= [
	http.post('/like', ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;
		const userId = 100;

		portfolios.forEach((portfolio) => {
			if(portfolio.id === Number(portfolioId)) {
				if(portfolio.isLiked) --portfolio.likes;
				if(!portfolio.isLiked) ++portfolio.likes;
				portfolio.isLiked = !portfolio.isLiked;
			}
		});

		clients.forEach((user) => {
			if(user.id === userId) {
				const index = user.likes.indexOf(Number(portfolioId));
				user.likes.splice(index, 1);
			}
		});

		return HttpResponse.json(null, { status: 200 });
	}),

	http.post('/bookmark', ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;
		const userId = 100;

		portfolios.forEach((portfolio) => {
			if(portfolio.id === Number(portfolioId)) {
				portfolio.isBookmarked = !portfolio.isBookmarked;
			}
		});

		clients.forEach((user) => {
			if(user.id === userId) {
				const index = user.bookmarks.indexOf(Number(portfolioId));
				user.likes.splice(index, 1);
			}
		});

		return HttpResponse.json(null, { status: 200 });
	}),
];