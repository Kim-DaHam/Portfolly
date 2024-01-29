import { ISectionFactory } from "@/types";

export const ROUTE_PATH = {
	INTRO: '/',
	MAIN: '/main/:section',
	SIGN_IN: '/login',
	TRIAL_LOGIN: '/trial',
	MY_PAGE: '/profile/:id',
	MY_PAGE_TAB: '/profile/:id/:tab',
	PORTFOLIO_DETAIL: '/portfolios/:portfolio_id',
	PORTFOLIO_EDIT: '/portfolios/edit',
	MESSAGE: '/messages/:id',
};

export const sectionUrlParameterMap: ISectionFactory = {
	'android-ios': 'Android/iOS',
	'web': 'Web',
	'illustration': 'Illustration',
	'photo': 'Photo',
	'video': 'Video',
};

export const stringToUrlParameter = (string: string) => {
	return string.replace(/ /g, '+').replace(/&/g, '%26').replace('/', '-').toLowerCase();
};

export const getFilterQueryParameter = () => {
	const url = new URL(window.location.href);
	const queryParameters = url.searchParams as URLSearchParams;
	const filterQuery = queryParameters.get('filter') as string;

	if(filterQuery) {
		const filterType = filterQuery.split('.')[0];
		const filterValue = filterQuery.split('.')[1];

		return { filterType, filterValue };
	}

	return { filterType: 'appCategory', filterValue: '전체' };
};