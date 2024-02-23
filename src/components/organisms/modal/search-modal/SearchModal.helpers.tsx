
import { ErrorBoundary as ApiErrorBoundary } from "react-error-boundary";

import { IComponentFactory } from "@/types";

import type { Filter } from "@/components/organisms/modal/search-modal/SearchModal";

import { ApiErrorFallback, SearchItemList, Text } from "@/components";

export const renderContent = (filter: Filter, reset: ()=>void) => {
	const ComponentFactory: IComponentFactory = {
		'App Category': (
			<>
				<Text size='label' color='gray'>
					Categories
				</Text>
				<ApiErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
					<SearchItemList type='category' />
				</ApiErrorBoundary>
			</>
		),
		'Tags': (
			<>
				<Text size='label' color='gray'>
					Tags
				</Text>
				<ApiErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
					<SearchItemList type='tag' />
				</ApiErrorBoundary>
			</>
		),
		'Search': (
			<ApiErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
					<SearchItemList type='keyword' />
				</ApiErrorBoundary>
		),
	}

	return ComponentFactory[filter];
};