import { HttpResponse, http } from 'msw';

import { portfolios } from './data/portfolios';

import { Portfolio, Section } from '@/types/portfolio';

const sectionId = {
	'Android/iOS': 1,
	'Web': 2,
	'Illustration': 3,
	'Photo': 4,
	'Video': 5,
}

const PortfolioHandlers= [
	http.get(`/portfolios`, ({request})=>{
		const url = new URL(request.url);
		const limit = url.searchParams.get('limit') as string;
		const section = url.searchParams.get('section') as Section;

		const filteredPortfolios = portfolios.filter((portfolio)=>{
			return sectionId[section] === portfolio.sectionId
		})

		const limitedPortfolios = filteredPortfolios.filter((_, index)=>{
			return index < Number(limit);
		})

		return HttpResponse.json(limitedPortfolios, { status: 200 });
	}),

	http.get('/top-portfolios', ()=>{
		const appPortfolios: Portfolio[] = [];
		const webPortfolios: Portfolio[] = [];
		const illustrationPortfolios: Portfolio[] = [];
		const photoPortfolios: Portfolio[] = [];
		const videoPortfolios: Portfolio[] = [];

		let count = 0;
		for(let i=0; i < portfolios.length; i++){
			if(portfolios[i].sectionId === 1 && appPortfolios.length < 3) {
				appPortfolios.push(portfolios[i]);
				count++;
			}
			if(portfolios[i].sectionId === 2 && webPortfolios.length < 2) {
				webPortfolios.push(portfolios[i]);
				count++;
			}
			if(portfolios[i].sectionId === 3 && illustrationPortfolios.length < 2) {
				illustrationPortfolios.push(portfolios[i]);
				count++;
			}
			if(portfolios[i].sectionId === 4 && photoPortfolios.length < 2) {
				photoPortfolios.push(portfolios[i]);
				count++;
			}
			if(portfolios[i].sectionId === 5 && videoPortfolios.length < 2) {
				videoPortfolios.push(portfolios[i]);
				count++;
			}
			if(count === 11) break;
		}

		const topPortfolios = [...appPortfolios, ...webPortfolios, ...illustrationPortfolios, ...photoPortfolios, ...videoPortfolios];

		return HttpResponse.json(topPortfolios, { status: 200 });
	})
];

export const handlers = PortfolioHandlers
  // .concat(HJHandlers);