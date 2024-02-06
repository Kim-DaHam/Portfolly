import { Navigation } from "@/pages/my-page/MyPage";

import type { IComponentFactory } from "@/types";

import { Introduce, Management, PortfolioList, ReviewList } from "@/components";

export const renderDescription = (user: any, navigation: Navigation)=>{
	const ComponentFactory: IComponentFactory = {
		introduce: (
			<Introduce user={{authority: user.authority, ...user.profile}}/>
		),
		portfolios: (
			<PortfolioList portfolios={user.portfolios}/>
		),
		reviews: (
			<ReviewList reviews={user.reviews}/>
		),
		management: (
			<Management commissions={user.activity.commissions}/>
		),
		bookmarks: (
			<PortfolioList portfolios={user.bookmarks}/>
		),
	}

	return ComponentFactory[navigation];
}