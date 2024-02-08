import { HttpResponse, http } from 'msw';

import { PortfolioFormValues } from '@/hooks/portfolio/usePortfolioForm';
import { portfolios } from '@/mocks/nosql-data/portfolios';

import type { Portfolio, Section, Portfolios } from '@/types';

import { generateRandomString } from '@/utils';

export const PortfolioHandlers= [
	http.get(`/portfolios`, ({request}) => {
		const url = new URL(request.url);

		const section = url.searchParams.get('section') as Section;
		const category = url.searchParams.get('category') as string;
		const tag = url.searchParams.get('tag') as string;
		const username = url.searchParams.get('username') as string;

		const page = Number(url.searchParams.get('page')) as number;
		const isRangeOfPage = (index: number, page: number) => index >= (page - 1) * 100 && index < page * 100;

		const filteredPortfolios: Portfolios = {};

		const portfolioDocKeys: string[] = Object.keys(portfolios);

		portfolioDocKeys.map((docKey: string, index: number) => {
			const IsSameSection = portfolios[docKey].section === section;
			const IsSameCategory = category ? portfolios[docKey].category === category : true;
			const hasTag = !tag && portfolios[docKey].tags.indexOf(tag) !== -1;
			const hasUsername = !username && portfolios[docKey].user.name === username;

			if(IsSameSection && IsSameCategory && isRangeOfPage(index, page)) {
				// const bookmarks = users.find((user) => user.id === LOGIN_ID)!.bookmarks as number[];
				// const isBookmarked = getIsBookmarked(portfolio!.id, bookmarks);

				const portfolio: Portfolio = {
					...portfolios[docKey],
					isBookmarked: true,
				};

				filteredPortfolios[docKey] = portfolio;
				return;
			}

			if(IsSameSection && hasTag && isRangeOfPage(index, page)){
				filteredPortfolios[docKey] = portfolios[docKey];
				return;
			}

			if(IsSameSection && hasUsername && isRangeOfPage(index, page)){
				filteredPortfolios[docKey] = portfolios[docKey];
				return;
			}
		});

		return HttpResponse.json(filteredPortfolios, { status: 200 });
	}),

	http.get('/top-portfolios', ()=>{
		const portfolioDocKeys: string[] = Object.keys(portfolios);
		const topPortfolios: {[key in Section]: Portfolios} = {
			'Android/iOS': {},
			'Web': {},
			'Illustration': {},
			'Photo': {},
			'Video': {},
		};

		portfolioDocKeys.map((docKey: string) => {
			if(portfolios[docKey].section === 'Android/iOS' &&
				Object.keys(topPortfolios['Android/iOS']).length < 3) {
					Object.assign(topPortfolios['Android/iOS'][docKey] = portfolios[docKey]);
					return;
			}
			if(portfolios[docKey].section === 'Web' &&
				Object.keys(topPortfolios['Web']).length < 2) {
					Object.assign(topPortfolios['Web'][docKey] = portfolios[docKey]);
					return;
			}
			if(portfolios[docKey].section === 'Illustration' &&
				Object.keys(topPortfolios['Illustration']).length < 2) {
					Object.assign(topPortfolios['Illustration'][docKey] = portfolios[docKey]);
					return;
			}
			if(portfolios[docKey].section === 'Photo' &&
				Object.keys(topPortfolios['Illustration']).length < 2) {
					Object.assign(topPortfolios['Photo'][docKey] = portfolios[docKey]);
					return;
			}
			if(portfolios[docKey].section === 'Video' &&
				Object.keys(topPortfolios['Video']).length < 2) {
					Object.assign(topPortfolios['Video'][docKey] = portfolios[docKey]);
					return;
			}
		});

		return HttpResponse.json(topPortfolios, { status: 200 });
	}),

	http.get('/portfolios/detail', ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;

		// const isBookmarked = getIsBookmarked(portfolio!.id, bookmarks);
		// const isLiked = getIsLiked(portfolio!.id, likes);

		const portfolio: Portfolio = portfolios[portfolioId];

		const portfolioDocKeys: string[] = Object(portfolios).keys();
		const otherPortfolios: Portfolios = {};

		portfolioDocKeys.map((docKey: string) => {
			if(portfolios[docKey].user.id === portfolio.user.id &&
					Object.keys(otherPortfolios).length < 9){
				Object.assign(otherPortfolios, portfolios[docKey])
			}
		});

		Object.assign(portfolio, {
			isBookmarked: true,
			isLiked: true,
			otherPortfolios: otherPortfolios,
		});

		return HttpResponse.json(portfolio, { status: 200 });
	}),

	http.delete('/portfolios', ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;

		delete portfolios[portfolioId];

		return HttpResponse.json(null, { status: 200 });
	}),

	http.post(`/portfolios`, async ({request}) => {
		const portfolioForm = await request.json() as PortfolioFormValues;
		const portfolioId = generateRandomString(20);
		const user = {
			id: 'expert1',
			name: 'John',
			email: 'john@example.com',
			phone: '010-1234-1234',
			nickname: 'John Lennon',
			profileImage: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FnyjLl%2FbtsCr9rPmP3%2FW1k5kiFh3yLpkK6K1fkPJK%2Fimg.webp',
		};

		portfolios[portfolioId] = {
			user: user,
			createdAt: new Date(Date.now()),
			likes: 0,
			...portfolioForm,
			commissions: null,
		};

		return HttpResponse.json({id: portfolioId}, { status: 200 });
	}),

	http.patch(`/portfolios`, async ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;
		const portfolioForm = await request.json() as any;

		Object.assign(portfolios[portfolioId], portfolioForm);

		return HttpResponse.json({id: portfolioId}, { status: 200 });
	}),

	http.post(`/picture`, async () => {
		const imageUrl = [
			'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2XzQc%2FbtsCoF6oqiQ%2FfTLqaY7HBAdFUn22D1UVP0%2Fimg.jpg',
			'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1xq4y%2FbtsCq8zX6lA%2FHsyxk6Y2YttIhEV3cmWP30%2Fimg.jpg',
		];

		return HttpResponse.json(imageUrl, { status: 200 });
	}),

];