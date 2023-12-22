import { fetch } from '@/utils/fetch';

export const fetchPortfolioList = ()=> {
	return fetch({
		api: '/portfolio',
		method: 'GET',
	});
};