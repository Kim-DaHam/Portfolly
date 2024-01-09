import { HttpResponse, http } from 'msw';

import { portfolios } from './data/portfolios';

import { Portfolio, Section } from '@/types/portfolio';
import { getCategoryId, getUserData } from '@/utils/mswHandler';

const sectionIdMap = new Map([
	['Android/iOS', 1],
	['Web', 2],
	['Illustration', 3],
	['Photo', 4],
	['Video', 5],
]);

const PortfolioHandlers= [
	http.get(`/portfolios`, ({request})=>{
		const url = new URL(request.url);
		const limit = url.searchParams.get('limit') as string;
		const section = url.searchParams.get('section') as Section;
		const category = url.searchParams.get('category') as string;
		// const tag = url.searchParams.get('tag');
		// const user = url.searchParams.get('user');

		let filteredPortfolios: any[] = [];

		portfolios.map((portfolio)=>{
			if(sectionIdMap.get(section) === portfolio.sectionId){
				const user = getUserData(portfolio.userId);
				filteredPortfolios.push({...portfolio, user});
			}
		})

		if(category && category !== '전체'){
			const categoryId = getCategoryId(category);

			const categoryFilteredPortfolios = filteredPortfolios.filter((portfolio)=>{
				return portfolio.categoryId === categoryId
			})

			filteredPortfolios = categoryFilteredPortfolios;
		}

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

		const limitedPortfolios = filteredPortfolios.filter((_, index)=>{
			return index < Number(limit);
		})

		return HttpResponse.json(limitedPortfolios, { status: 200 });
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
	})
];

export const handlers = PortfolioHandlers
  // .concat(HJHandlers);