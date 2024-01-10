import { HttpResponse, http } from 'msw';

import { portfolios } from './data/portfolios';

import { Portfolio, Section } from '@/types/portfolio';
import { getCategory, getTags, getUserData } from '@/utils/mswHandler';

const sectionIdMap = new Map([
	['Android/iOS', 1],
	['Web', 2],
	['Illustration', 3],
	['Photo', 4],
	['Video', 5],
]);

const PortfolioHandlers= [
	http.get(`/portfolios`, ({request}) => {
		const url = new URL(request.url);
		const limit = url.searchParams.get('limit') as string;
		const section = url.searchParams.get('section') as Section;
		const category = url.searchParams.get('category') as string;
		// const tag = url.searchParams.get('tag');
		// const user = url.searchParams.get('user');

		let filteredPortfolios: any[] = [];

		portfolios.map((portfolio: Portfolio) => {
			if(portfolio.sectionId === sectionIdMap.get(section)){
				filteredPortfolios.push(portfolio);
			}
		})

		if(category && category !== '전체') {
			const categoryFilteredPortfolios = filteredPortfolios.filter((portfolio) => {
				return portfolio.category === category;
			})

			filteredPortfolios = categoryFilteredPortfolios;
		}

		const responseData = filteredPortfolios.map((portfolio: Portfolio) => {
			const user = getUserData(portfolio.userId);

			const portfolioData = {
				id: portfolio.id,
				title: portfolio.title,
				category: category,
				content: portfolio.content,
				summary: portfolio.summary,
				likes: portfolio.likes,
				thumbnailUrl: portfolio.thumbnailUrl,
				user,
			};

			return portfolioData;
		})


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

		const limitedResponseData = responseData.filter((_, index)=>{
			return index < Number(limit);
		})

		return HttpResponse.json(limitedResponseData, { status: 200 });
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

		const portfolioData = portfolios.find((portfolio) => {
			return portfolio.id === Number(portfolioId);
		});

		const otherPortfolios = portfolios.reduce((result: Portfolio[], portfolio: Portfolio) => {
			if(result.length < 9){
				if(portfolio.userId === portfolioData!.userId) {
					result.push(portfolio);
				}
			}
			return result;
		}, []);

		const user = getUserData(portfolioData!.userId);
		const category = getCategory(portfolioData!.categoryId);
		const tags = getTags(portfolioData!.tagId);

		const responseData = {
			id: portfolioData!.id,
			title: portfolioData!.title,
			category: category,
			content: portfolioData!.content,
			summary: portfolioData!.summary,
			tags,
			likes: portfolioData!.likes,
			thumbnailUrl: portfolioData!.thumbnailUrl,
			user,
			otherPortfolios,
		};

		return HttpResponse.json(responseData, { status: 200 });
	}),
];

export const handlers = PortfolioHandlers
  // .concat(HJHandlers);