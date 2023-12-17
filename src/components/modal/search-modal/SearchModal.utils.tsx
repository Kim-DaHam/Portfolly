import { Content } from "./SearchModal.type";

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
}