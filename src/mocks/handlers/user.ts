import { HttpResponse, http } from 'msw';

import { commissions } from '../data/commissions';
import { portfolios } from '../data/portfolios';
import { users } from '../data/users';

import { getSection } from '@/utils';

const LOGIN_ID = 1;

export const userHandlers= [
	http.get('/users', ({request}) => {
		const url = new URL(request.url);
		const userId = url.searchParams.get('id') as string;
		const isMyProfile = userId === String(LOGIN_ID);

		const user = users.find((user) => {
			return user.id === Number(userId);
		});

		if(!isMyProfile) {
			delete user?.name;
			delete user?.phone;
			delete user?.likes;
		}

		const portfolioList: any[] = [];

		portfolios.map((portfolio) => {
			const isUsersPortfolio = user!.portfolios!.indexOf(portfolio.id) > -1;
			if(isUsersPortfolio) {
				const portfolioData = {
					id: portfolio.id,
					title: portfolio.title,
					summary: portfolio.summary,
					image: portfolio.images[0],
				};
				portfolioList.push(portfolioData);
			}
		});

		const bookmarkList: any[] = [];

		if(userId === String(LOGIN_ID)) {
			portfolios.map((portfolio) => {
				const isBookmarked = user!.bookmarks!.indexOf(portfolio.id) > -1;

				if(isBookmarked) {
					const portfolioData = {
						id: portfolio.id,
						title: portfolio.title,
						summary: portfolio.summary,
						image: portfolio.images[0],
					};
					bookmarkList.push(portfolioData);
				}
			});
		}

		const commissionList: any[] = [];
		const reviewList: any[] = [];

		commissions.map((commission: any) => {

			const isMyCommission = user!.activity.commissions!.indexOf(commission.id) > -1;

			if(isMyCommission) {
				const portfolio = portfolios.find((portfolio) => portfolio.id === commission.portfolioId);
				const section = getSection(portfolio!.sectionId);

				commission.portfolio = {
					id: portfolio?.id,
					section: section,
					title: portfolio?.title,
					summary: portfolio?.summary,
					thumbnailUrl: portfolio?.images[0],
				};

				if(commission.review) {
					const user = users.find((user) => user.id === commission.clientId);

					commission.review.portfolio = commission.portfolio;
					commission.review.user = {
						id: user?.id,
						nickname: user?.nickname,
						profileImage: user?.profileImage,
					};

					reviewList.push(commission.review);
				}

				if(isMyProfile) {
					if(user!.authority === 'client') {
						const expert = users.find((user) => user.id === commission.expertId);
						commission.expert = {
							id: expert?.id,
							nickname: expert?.nickname,
							name: expert?.name,
							phone: expert?.phone,
							profileImage: expert?.profileImage,
						};
					}
					if(user!.authority === 'expert') {
						const client = users.find((user) => user.id === commission.clientId);
						commission.client = {
							id: client?.id,
							nickname: client?.nickname,
							profileImage: client?.profileImage,
						};
					}
					commission[user!.authority] = {
						id: user?.id,
						nickname: user?.nickname,
						name: user?.name,
						phone: user?.phone,
						profileImage: user?.profileImage,
					}
				}

				if(!isMyProfile) {
					delete commission.details;
				}

				commissionList.push(commission);
			}
		});
		user!.activity.commissions = commissionList;

		const responseData = {
			...user,
			reviews: reviewList,
			portfolios: portfolioList,
			bookmarks: bookmarkList || [],
		};

		return HttpResponse.json(responseData, { status: 200 });
	}),

];