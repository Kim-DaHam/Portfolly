import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

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

export const usePortfoliosQuery = (limit: number, section: Section, filter: {filterKey: string, filterValue: string}) => {
	const filterParameter = stringToUrlParameter(filter.filterValue);
	const getPortfolios = () => fetch(`/portfolios?limit=${limit}&section=${section}&${filter.filterKey}=${filterParameter}`, 'GET');

	return useSuspenseQuery({
		queryKey: portfolioKeys.list(section, {type: filter.filterKey, value: filter.filterValue}),
		queryFn: getPortfolios,
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
	const getPortfolio = () => fetch(`/portfolios/${id}`, 'GET');

	return useSuspenseQuery({
		queryKey: portfolioKeys.detail(id),
		queryFn: getPortfolio,
	});
};