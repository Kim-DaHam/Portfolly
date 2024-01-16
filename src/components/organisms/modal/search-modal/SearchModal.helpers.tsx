
import { Content } from "@/components/organisms/modal/search-modal";
import { IComponentFactory } from "@/types";

export const renderContent = (type: Content) => {
	const ComponentFactory: IComponentFactory = {
		Trending: (
			<>
				Trending
			</>
		),
		List: (
			<>
				List
			</>
		),
		Search: (
			<>
				Search
			</>
		)
	}

	return ComponentFactory[type];
};