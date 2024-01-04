export const ROUTE_PATH = {
	INTRO: '/',
	MAIN: '/main/:section',
	SIGNUP: '/signup',
	SIGNIN: '/login',
	TRIAL_LOGIN: '/trial',
	MYPAGE: '/profile/:id',
	PORTFOLIO: '/portfolio/:portfolio_id',
	PORTFOLIO_EDIT: '/portfolio/edit',
};

export const stringToUrl = (string: string) => {
	return string.replace(' ', '+').replace('&', '%26');
};

export const urlToString = (url: string) => {
	return url.replace('+', ' ').replace('%26', '&');
};

export const getFiltersQuery = () => {
	const url = new URL(window.location.href);
	const query = url.searchParams as URLSearchParams;
	const filterQuery = query.get('filter') as string;

	if(filterQuery) {
		const filterType = filterQuery.split('.')[0];
		const filterValue = filterQuery.split('.')[1];

		return { filterType, filterValue };
	}

	return { filterType: 'appCategory', filterValue: '전체' };
};