import { HttpResponse, http } from 'msw';

import { FormValues } from '@/hooks/portfolio/usePortfolioForm';

import { LOGIN_ID } from '.';
import { portfolios } from '../data/portfolios';
import { users } from '../data/users';

import type { User, Portfolio, Section } from '@/types';

import { getCategory, getCategoryId, getIsBookmarked, getIsLiked, getSection, getTagId, getTags, getUserData } from '@/utils';

const sectionIdMap = new Map([
	['Android/iOS', 1],
	['Web', 2],
	['Illustration', 3],
	['Photo', 4],
	['Video', 5],
]);

export const PortfolioHandlers= [
	http.get(`/portfolios`, ({request}) => {
		const url = new URL(request.url);

		const section = url.searchParams.get('section') as Section;
		const category = url.searchParams.get('category') as string;
		const sectionId = sectionIdMap.get(section);
		const categoryId = getCategoryId(category) || false;

		// const tag = url.searchParams.get('tag');
		// const user = url.searchParams.get('user');

		const page = Number(url.searchParams.get('page')) as number;
		const isRangeOfPage = (index: number, page: number) => index >= (page - 1) * 100 && index < page * 100;

		const filteredPortfolios: any[] = [];

		portfolios.map((portfolio: Portfolio, index: number) => {
			const sameSectionId = portfolio.sectionId === sectionId;
			const sameCategoryId = !categoryId ? true : portfolio.categoryId === categoryId;

			if( sameSectionId && sameCategoryId && isRangeOfPage(index, page)) {
				const user = getUserData(portfolio.userId) as User;
				const bookmarks = users.find((user) => user.id === LOGIN_ID)!.bookmarks as number[];
				const isBookmarked = getIsBookmarked(portfolio!.id, bookmarks);

				const portfolioData = {
					id: portfolio.id,
					title: portfolio.title,
					category: category,
					summary: portfolio.summary,
					likes: portfolio.likes,
					images: portfolio.images,
					isBookmarked: isBookmarked,
					user: {
						id: user.id,
						nickname: user.nickname,
						profileImage: user.profileImage,
					},
				};

				filteredPortfolios.push(portfolioData);
			}
		});

		// if(tag){
		// 	filteredPortfolios.map((portfolio)=>{
		// 		if(tagId[tag] === portfolio.categoryId){
		// 			filteredPortfolios.push(portfolio);
		// 		}
		// 	})
		// }

		// if(user){
		// 	filteredPortfolios.map((portfolio)=>{
		// 		if(userId[user] === portfolio.categoryId){
		// 			filteredPortfolios.push(portfolio);
		// 		}
		// 	})
		// }

		return HttpResponse.json(filteredPortfolios, { status: 200 });
	}),

	http.get('/top-portfolios', ()=>{
		let count = 0;

		const topPortfolios: {[key in Section]: Portfolio[]} = {
			'Android/iOS': [],
			'Web': [],
			'Illustration': [],
			'Photo': [],
			'Video': [],
		};

		for(let i=0; i < portfolios.length; i++){
			if(portfolios[i].sectionId === 1 && topPortfolios['Android/iOS'].length < 3) {
				topPortfolios['Android/iOS'].push(portfolios[i]);
				count++;
			}
			if(portfolios[i].sectionId === 2 && topPortfolios['Web'].length < 2) {
				topPortfolios['Web'].push(portfolios[i]);
				count++;
			}
			if(portfolios[i].sectionId === 3 && topPortfolios['Illustration'].length < 2) {
				topPortfolios['Illustration'].push(portfolios[i]);
				count++;
			}
			if(portfolios[i].sectionId === 4 && topPortfolios['Photo'].length < 2) {
				topPortfolios['Photo'].push(portfolios[i]);
				count++;
			}
			if(portfolios[i].sectionId === 5 && topPortfolios['Video'].length < 2) {
				topPortfolios['Video'].push(portfolios[i]);
				count++;
			}
			if(count === 11) break;
		}

		return HttpResponse.json(topPortfolios, { status: 200 });
	}),

	http.get('/portfolios/detail', ({request}) => {
		const url = new URL(request.url);

		const portfolioId = url.searchParams.get('id') as string;
		const portfolio = portfolios.find((portfolio) => {
			return portfolio.id === Number(portfolioId);
		});

		const otherPortfolios: any[] = [];

		portfolios.map((p: Portfolio, index: number) => {
			if(index < 9){
				if(p.userId === portfolio!.userId) {
					otherPortfolios.push(p);
				}
			}
		});

		const user = getUserData(portfolio!.userId);
		const section = getSection(portfolio!.sectionId);
		const category = getCategory(portfolio!.categoryId);
		const tags = getTags(portfolio!.tagId);

		const likes = users.find((user) => user.id === LOGIN_ID)!.likes as number[];
		const bookmarks = users.find((user) => user.id === LOGIN_ID)!.bookmarks as number[];
		const isBookmarked = getIsBookmarked(portfolio!.id, bookmarks);
		const isLiked = getIsLiked(portfolio!.id, likes);

		const responseData = {
			id: portfolio!.id,
			title: portfolio!.title,
			section: section,
			category: category,
			content: portfolio!.content,
			summary: portfolio!.summary,
			tags,
			likes: portfolio!.likes,
			images: portfolio!.images,
			user,
			otherPortfolios,
			isBookmarked: isBookmarked,
			isLiked: isLiked,
		};

		return HttpResponse.json(responseData, { status: 200 });
	}),

	http.delete('/portfolios', ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;

		const user = users.find((user) => {
			return user.id === LOGIN_ID;
		});

		user?.portfolios?.map((portfolio, index) => {
      if (portfolio === Number(portfolioId)) {
				user?.portfolios?.splice(index, 1);
			}
    });

		portfolios.map((portfolio, index) => {
			if(portfolio.id === Number(portfolioId)) {
				portfolios.splice(index, 1);
			}
		});

		return HttpResponse.json(null, { status: 200 });
	}),

	http.post(`/portfolios`, async ({request}) => {
		const newPortfolio = await request.json() as FormValues;
		const portfolioId = portfolios.length + 1;
		const sectionId = sectionIdMap.get(newPortfolio.section) as number;
		const categoryId = getCategoryId(newPortfolio.category) as number;
		const tagId = getTagId(newPortfolio.tags, sectionId, portfolioId) as number[];

		portfolios.push({
			id: portfolioId,
			userId: 1,
			title: newPortfolio.title,
			content: newPortfolio.content,
			summary: newPortfolio.summary,
			createdAt: Date.now(),
			modifiedAt: Date.now(),
			sectionId: sectionId,
			categoryId: categoryId,
			tagId: tagId,
			likes: 0,
			images: [],
		});

		return HttpResponse.json({id: portfolioId}, { status: 200 });
	}),

	http.patch(`/portfolios`, async ({request}) => {
		const url = new URL(request.url);
		const portfolioId = url.searchParams.get('id') as string;
		const changedPortfolio = await request.json() as any;
		const sectionId = sectionIdMap.get(changedPortfolio.section) as number;

		if(changedPortfolio.tags) {
			const tagId = getTagId(changedPortfolio.tags, sectionId, Number(portfolioId)) as number[];
			delete changedPortfolio.tags;
			changedPortfolio.tagId = tagId;
		}

		portfolios.map((portfolio) => {
			if(portfolio.id === Number(portfolioId)){
				Object.assign(portfolio, changedPortfolio);
			}
		});

		return HttpResponse.json({id: portfolioId}, { status: 200 });
	}),

	http.post(`/picture`, async ({request}) => {
		const imageUrl = [
			'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2XzQc%2FbtsCoF6oqiQ%2FfTLqaY7HBAdFUn22D1UVP0%2Fimg.jpg',
			'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb1xq4y%2FbtsCq8zX6lA%2FHsyxk6Y2YttIhEV3cmWP30%2Fimg.jpg',
		];

		return HttpResponse.json(imageUrl, { status: 200 });
	}),

];