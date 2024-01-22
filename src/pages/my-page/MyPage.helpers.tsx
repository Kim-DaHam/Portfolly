import { Introduce, Management, PortfolioList, ReviewList } from "@/components";
import { Navigation } from "@/pages/my-page/MyPage";
import { IComponentFactory } from "@/types";

export const renderDescription = (user: any, navigation: Navigation)=>{

	const ComponentFactory: IComponentFactory = {
		introduce: (
			<Introduce user={{authority: user.authority, ...user.profile}}/>
		),
		portfolios: (
			<PortfolioList portfolios={user.portfolios}/>
		),
		review: (
			<ReviewList commissions={user.activity.commissions}/>
		),
		// management: (
		// 	<Management user={user.comissions}/>
		// ),
		bookmarks: (
			<PortfolioList portfolios={user.bookmarks}/>
		),
	}

	return ComponentFactory[navigation];
}