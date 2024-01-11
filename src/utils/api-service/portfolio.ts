import { useInfiniteQuery, useQuery, useSuspenseQuery } from '@tanstack/react-query';

import { stringToUrlParameter } from '../path';

import { Section } from '@/types/portfolio';
import { fetch } from '@/utils/fetch';

const portfolioKeys = {
  all: ['portfolios'] as const,
  lists: (type: string) => [...portfolioKeys.all, type] as const,
  list: (type: string, filters: string | object) => [...portfolioKeys.lists(type), { filters }] as const,
  details: () => [...portfolioKeys.all, 'detail'] as const,
  detail: (id: string) => [...portfolioKeys.details(), id] as const,
}

export const usePortfoliosQuery = (section: Section, filter: {filterKey: string, filterValue: string}) => {
	const filterParameter = stringToUrlParameter(filter.filterValue);
	const getPortfolios = ({ pageParam = 1 }) => fetch(`/portfolios?page=${pageParam}&section=${section}&${filter.filterKey}=${filterParameter}`, 'GET');

	return useInfiniteQuery({
		queryKey: portfolioKeys.list(section, {type: filter.filterKey, value: filter.filterValue}),
		queryFn: getPortfolios,
		select: data => data.pages[0],
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = allPages.length + 1;
			return lastPage.length < 100 ? undefined :nextPage;
		},
		staleTime: Infinity,
		gcTime: Infinity,
	});
};

export const useTopPortfoliosQuery = () => {
	const getTopPortfolios = () => fetch('/top-portfolios', 'GET');

	return useQuery({
		queryKey: portfolioKeys.lists('top'),
		queryFn: getTopPortfolios,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};

export const usePortfolioDetailQuery = (id: string) => {
	const getPortfolio = () => fetch(`/portfolios/detail?id=${id}`, 'GET');

	return useQuery({
		queryKey: portfolioKeys.detail(id),
		queryFn: getPortfolio,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};