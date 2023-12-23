import { HttpResponse, http } from 'msw';

import { portfolios } from './data/portfolios';

import { Portfolio } from '@/types/portfolio';

const PortfolioHandlers= [
	http.get('/portfolios/:section', ()=>{
		return new HttpResponse(null, {status: 404});
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