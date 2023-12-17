import PortfolioProfile from "./portfolio-profile/PortfolioProfile";
import Profile from "./Profile";
import { UserName } from "./Profile.styled";

import { IComponentFactory } from "@/types";

export const renderProfile = (type: Profile) => {
	const ComponentFactory: IComponentFactory = {
		Default: (
			<>
				<UserName type={type}>username</UserName>
			</>
		),
		Portfolio: (
			<PortfolioProfile/>
		),
		Chat: (
			<></>
		)
	}

	return ComponentFactory[type];
}