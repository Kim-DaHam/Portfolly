import { ISectionFactory } from "@/types";

export const ROUTE_PATH = {
	INTRO: '/',
	MAIN: '/main/:section',
	LOGIN: '/login',
	MY_PAGE: '/profile/:id',
	MY_PAGE_TAB: '/profile/:id/:tab',
	PORTFOLIO_DETAIL: '/portfolios/:portfolio_id',
	PORTFOLIO_EDIT: '/portfolios/edit',
	MESSAGE: '/messages',
};

export const sectionUrlParameterMap: ISectionFactory = {
	'android-ios': 'Android/iOS',
	'web': 'Web',
	'illustration': 'Illustration',
	'photo': 'Photo',
	'video': 'Video',
};

export const toUrlParameter = (string: string) => {
	return string.replace(/ /g, '+').replace(/&/g, '%26').replace('/', '-').toLowerCase();
};

export const getFilterQueryString = () => {
	const url = new URL(window.location.href);
	const queryString = url.searchParams as URLSearchParams;
	const filter = queryString.get('filter') as string;

	if(filter) {
		const filterType = filter.split('.')[0];
		const filterValue = filter.split('.')[1];

		return { filterType, filterValue };
	}

	return { filterType: 'appCategory', filterValue: '전체' };
};