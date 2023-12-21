import { HttpResponse, http } from 'msw';

const PortfolioHandlers= [
	http.get('/portfolios/:section', ()=>{
		return new HttpResponse(null, {status: 404});
	}),
];

export const handlers = PortfolioHandlers
  // .concat(HJHandlers);