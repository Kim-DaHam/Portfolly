
import { IComponentFactory } from "@/types";

import type { Filter } from "@/components/organisms/modal/search-modal/SearchModal";

import { SearchItemList, Text } from "@/components";

export const renderContent = (filter: Filter) => {
	const ComponentFactory: IComponentFactory = {
		'App Category': (
			<>
				<Text size='label' color='gray'>
					Categories
				</Text>
				<SearchItemList type='filter' />
			</>
		),
		'Tags': (
			<>
				<Text size='label' color='gray'>
					Tags
				</Text>
				<SearchItemList type='filter' />
			</>
		),
		'Search': (
			<SearchItemList type='keyword' />
		),
	}

	return ComponentFactory[filter];
};