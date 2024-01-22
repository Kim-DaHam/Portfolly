import { Introduce, Management, PortfolioList, Review } from "@/components";
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
		// review: (
		// 	<Review user={user.reviews}/>
		// ),
		// management: (
		// 	<Management user={user.comissions}/>
		// ),
		bookmarks: (
			<PortfolioList portfolios={user.bookmarks}/>
		),
	}

	return ComponentFactory[navigation];
}