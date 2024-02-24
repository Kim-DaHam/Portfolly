
import { ErrorBoundary as ApiErrorBoundary } from "react-error-boundary";

import { IComponentFactory } from "@/types";

import type { Filter } from "@/components/organisms/modal/search-modal/SearchModal";

import { ApiErrorFallback, SearchItemList, Text } from "@/components";

export const renderContent = (filter: Filter, reset: ()=>void, onClose: ()=>void) => {
	const ComponentFactory: IComponentFactory = {
		'App Category': (
			<>
				<Text size='label' color='gray'>
					Categories
				</Text>
				<ApiErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
					<SearchItemList type='category' onClose={onClose} />
				</ApiErrorBoundary>
			</>
		),
		'Tags': (
			<>
				<Text size='label' color='gray'>
					Tags
				</Text>
				<ApiErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
					<SearchItemList type='tag' onClose={onClose} />
				</ApiErrorBoundary>
			</>
		),
		'Search': (
			<ApiErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
					<SearchItemList type='keyword' onClose={onClose} />
				</ApiErrorBoundary>
		),
	}

	return ComponentFactory[filter];
};