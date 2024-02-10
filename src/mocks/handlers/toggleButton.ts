import { HttpResponse, http } from 'msw';

import { LOGIN_ID } from '@/mocks/handlers';
import { portfolios } from '@/mocks/nosql-data/portfolios';
import { users } from '@/mocks/nosql-data/users';

export const toggleButtonHandlers= [
	http.post('/like', ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;
		const wasLiked = users[LOGIN_ID].likes?.indexOf(portfolioId) !== -1;

		const portfolio = portfolios[portfolioId];

		if(wasLiked) {
			portfolio.likes -= 1;
			const index = users[LOGIN_ID].likes?.indexOf(portfolioId) as number;
			users[LOGIN_ID].likes?.splice(index, 1);
			return HttpResponse.json({isLiked: false}, { status: 200 });
		}

		portfolio.likes += 1;
		users[LOGIN_ID].likes?.push(portfolioId);

		return HttpResponse.json({isLiked: true}, { status: 200 });
	}),

	http.post('/bookmark', ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;
		const wasBookmarked = users[LOGIN_ID].bookmarks![portfolioId];
		const portfolio = portfolios[portfolioId];

		if(wasBookmarked) {
			delete users[LOGIN_ID].bookmarks![portfolioId];
			return HttpResponse.json({isBookmarked: false}, { status: 200 });
		}

		users[LOGIN_ID].bookmarks![portfolioId] = {
			id: portfolioId,
			title: portfolio.title,
			summary: portfolio.summary,
			thumbnailUrl: portfolio.images[0],
		};

		return HttpResponse.json({isBookmarked: true}, { status: 200 });
	}),
];