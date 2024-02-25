import { HttpResponse, http } from 'msw';

import { categories } from '@/assets/data/fields';
import { PortfolioFormValues } from '@/hooks/portfolio/usePortfolioForm';
import { portfolios } from '@/mocks/data/portfolios';
import { users } from '@/mocks/data/users';
import { LOGIN_ID } from '@/mocks/handlers';

import type { Portfolio, Section, Portfolios } from '@/types';

import { PAGE_PER_DATA, generateRandomString, toLocalDateString } from '@/utils';

export const PortfolioHandlers= [
	// 포트폴리오 목록 데이터를 가져온다.
	http.get(`/portfolios`, ({request}) => {
		const url = new URL(request.url);
		const section = url.searchParams.get('section') as Section;
		const category = url.searchParams.get('appCategory') as string;
		const tag = url.searchParams.get('tag') as string;
		const keyword = url.searchParams.get('keyword') as string;

		const page = Number(url.searchParams.get('page')) as number;
		const isRangeOfPage = (index: number, page: number) => {
			return index >= (page - 1) * PAGE_PER_DATA && index < page * PAGE_PER_DATA;
		}

		const portfolioDocKeys: string[] = Object.keys(portfolios);
		const filteredPortfolios: Portfolio[] = [];

		portfolioDocKeys.forEach((docKey: string) => {
			const isSameSection = portfolios[docKey].section === section;
			const isSameCategory = category === '전체' ? true : portfolios[docKey].category === category ;
			const hasSameTag = tag ? portfolios[docKey].tags.indexOf(tag) !== -1 : true;
			const hasSameKeyword = keyword ? portfolios[docKey].title.includes(keyword) : true;

			if(!isSameSection) return;
			if(!isRangeOfPage(filteredPortfolios.length, page)) return;

			if(isSameCategory && hasSameTag && hasSameKeyword) {
				const portfolio: Portfolio = {
					...portfolios[docKey],
					id: docKey,
					isBookmarked: users['client1'].bookmarks![docKey] ? true : false,
					isLiked: users['client1'].likes?.indexOf(docKey) !== -1 ? true : false,
				};

				filteredPortfolios.push(portfolio);
			}
		});

		return HttpResponse.json(filteredPortfolios, { status: 200 });
	}),

	// 각 분야별 top3 포트폴리오 데이터를 가져온다.
	http.get('/top-portfolios', ()=>{
		const portfolioDocKeys: string[] = Object.keys(portfolios);
		const topPortfolios: {[key in Section]: Portfolios} = {
			'Android/iOS': {},
			'Web': {},
			'Illustration': {},
			'Photo': {},
			'Video': {},
		};

		portfolioDocKeys.forEach((docKey: string) => {
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

	// 카테고리 별 포트폴리오 개수를 가져온다.
	http.get(`/portfolios/count`, ({request}) => {
		const url = new URL(request.url);
		const section = url.searchParams.get('section') as Section;

		const portfolioDocKeys: string[] = Object.keys(portfolios);
		const categoryPerCount: {[key in string]: number} = {};
		const tagPerCount: {[key in string]: number} = {};

		categories[section].forEach((category: string) => {
			categoryPerCount[category] = 0;
		});

		portfolioDocKeys.forEach((docKey: string) => {
			const portfolio = portfolios[docKey];
			const isSameSection = portfolios[docKey].section === section;

			if(isSameSection) {
				categoryPerCount[portfolio.category] += 1;

				portfolio.tags.forEach((tag: string) => {
					tagPerCount[tag] = tagPerCount[tag] ? tagPerCount[tag] + 1 : 1;
				});
			}
		});

		const response = {
			categoryPerCount: categoryPerCount,
			tagPerCount: tagPerCount,
		};

		return HttpResponse.json(response, { status: 200 });
	}),

	// portfolio detail 데이터를 가져온다.
	http.get('/portfolios/detail', ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;

		const portfolio: Portfolio = portfolios[portfolioId];

		const portfolioDocKeys: string[] = Object.keys(portfolios);
		const otherPortfolios: Portfolio[] = [];

		portfolioDocKeys.forEach((docKey: string) => {
			if(portfolios[docKey].user.id === portfolio.user.id &&
				otherPortfolios.length < 9){
					otherPortfolios.push({
						id: docKey,
						...portfolios[docKey]
					});
			}
		});

		Object.assign(portfolio, {
			isBookmarked: users[LOGIN_ID].bookmarks![portfolioId] ? true : false,
			isLiked: users[LOGIN_ID].likes?.indexOf(portfolioId) !== -1 ? true : false,
			otherPortfolios: otherPortfolios,
		});

		return HttpResponse.json(portfolio, { status: 200 });
	}),

	// 포트폴리오 삭제
	http.delete('/portfolios', ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;

		delete portfolios[portfolioId];

		return HttpResponse.json(null, { status: 200 });
	}),

	// 포트폴리오 등록
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

		const portfolioDocKeys: string[] = Object.keys(portfolios);
		const otherPortfolios: Portfolio[] = [];

		portfolioDocKeys.map((docKey: string) => {
			if(portfolios[docKey].user.id === user.id &&
				otherPortfolios.length < 9){
					otherPortfolios.push({
						id: docKey,
						...portfolios[docKey]
					});
			}
		});

		portfolios[portfolioId] = {
			user: user,
			createdAt: toLocalDateString(Date.now()),
			likes: 0,
			...portfolioForm,
			commissions: null,
		};

		const response = {
			id: portfolioId,
			...portfolios[portfolioId],
			otherPortfolios: otherPortfolios,
		};

		return HttpResponse.json(response, { status: 200 });
	}),

	// 포트폴리오 수정
	http.patch(`/portfolios`, async ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;
		const portfolioForm = await request.json() as any;

		Object.assign(portfolios[portfolioId], portfolioForm);

		const response = {
			id: portfolioId,
			...portfolios[portfolioId]
		};

		return HttpResponse.json(response, { status: 200 });
	}),

	// 이미지 등록
	http.post(`/picture`, async () => {
		const imageUrl = [
			'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2XzQc%2FbtsCoF6oqiQ%2FfTLqaY7HBAdFUn22D1UVP0%2Fimg.jpg',
			'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1xq4y%2FbtsCq8zX6lA%2FHsyxk6Y2YttIhEV3cmWP30%2Fimg.jpg',
		];

		return HttpResponse.json(imageUrl, { status: 200 });
	}),

];