import { Introduce, Management, PortfolioList, Review } from "@/components";
import { Navigation } from "@/pages/my-page/MyPage";
import { IComponentFactory, User } from "@/types";

export const renderDescription = (user: User, navigation: Navigation)=>{
	const ComponentFactory: IComponentFactory = {
		introduce: (
			<Introduce user={{authority: user.authority, ...user.profile}}/>
		),
		portfolio: (
			<PortfolioList />
		),
		review: (
			<Review />
		),
		management: (
			<Management />
		),
		bookmarks: (
			<PortfolioList />
		)
	}

	return ComponentFactory[navigation];
}