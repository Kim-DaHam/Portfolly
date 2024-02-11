
import { Content } from "@/components/organisms/modal/search-modal";
import { IComponentFactory } from "@/types";

import { Text } from "@/components";

export const renderContent = (type: Content, searchResults: any) => {
	const ComponentFactory: IComponentFactory = {
		Trending: (
			<>
				<Text size='label' color='gray'>
					Trending
				</Text>

			</>
		),
		List: (
			<>
				<Text size='label' color='gray'>
					List
				</Text>

			</>
		),
		Search: (
			<Text size='label' color='gray'>
				Search
			</Text>
		)
	}

	return ComponentFactory[type];
};