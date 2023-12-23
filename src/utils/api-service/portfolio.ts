import { useQuery } from '@tanstack/react-query';

import { Section } from '@/types/portfolio';
import { fetch } from '@/utils/fetch';

const portfolioKeys = {
  all: ['portfolios'] as const,
  lists: () => [...portfolioKeys.all, 'list'] as const,
  list: (filters: string) => [...portfolioKeys.lists(), { filters }] as const,
  details: () => [...portfolioKeys.all, 'detail'] as const,
  detail: (id: string) => [...portfolioKeys.details(), id] as const,
}

export const usePortfoliosQuery = (limit: number, section: Section)=> {
	const getPortfolios = ()=> fetch(`/portfolios?limit=${limit}&section=${section}`, 'GET');
	return useQuery({
		queryKey: portfolioKeys.all,
		queryFn: getPortfolios
	});
};

export const useTopPortfoliosQuery = ()=> {
	const getTopPortfolios = ()=> fetch('/top-portfolios', 'GET');
	return useQuery({
		queryKey: portfolioKeys.list('top'),
		queryFn: getTopPortfolios,
		staleTime: Infinity,
		gcTime: Infinity,
	})
};

export const usePortfolioDetailQuery = (id: string)=> {
	const getPortfolio = ()=> fetch(`/portfolios/${id}`, 'GET');
	return useQuery({
		queryKey: portfolioKeys.detail(id),
		queryFn: getPortfolio,
	})
};