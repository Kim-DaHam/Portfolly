import { Navigation } from "@/pages/my-page/MyPage";

import type { IComponentFactory } from "@/types";

import { Introduce, Management, PortfolioList, ReviewList } from "@/components";

export const renderDescription = (user: any, navigation: Navigation)=>{
	const ComponentFactory: IComponentFactory = {
		introduce: (
			<Introduce user={{authority: user.authority, ...user.profile}}/>
		),
		portfolios: (
			<PortfolioList portfolios={user.portfolioList}/>
		),
		reviews: (
			<ReviewList reviews={user.reviewList}/>
		),
		management: (
			<Management commissions={user.commissionList}/>
		),
		bookmarks: (
			<PortfolioList portfolios={user.bookmarks}/>
		),
	}

	return ComponentFactory[navigation];
}