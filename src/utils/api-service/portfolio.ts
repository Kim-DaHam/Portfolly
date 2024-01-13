import { useMutation, useQuery, useQueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';

import { stringToUrlParameter } from '../path';

import { Toggle } from '@/components/atoms/button/ToggleButton';
import { Section } from '@/types/portfolio';
import { fetch } from '@/utils/fetch';

const PORTFOLIOS_PER_PAGE = 100;

const portfolioKeys = {
  all: ['portfolios'] as const,
  lists: (type: string) => [...portfolioKeys.all, type] as const,
  list: (type: string, filters: string | object) => [...portfolioKeys.lists(type), { filters }] as const,
  details: () => [...portfolioKeys.all, 'detail'] as const,
  detail: (id: string) => [...portfolioKeys.details(), id] as const,
}

export const usePortfoliosQuery = (section: Section, filter: {filterKey: string, filterValue: string}) => {
	const filterParameter = stringToUrlParameter(filter.filterValue);

	const getPortfolios = ({pageParam}: {pageParam: number}) => fetch(`/portfolios?page=${pageParam}&section=${section}&${filter.filterKey}=${filterParameter}`, 'GET');

	return useSuspenseInfiniteQuery({
		queryKey: portfolioKeys.list(section, {type: filter.filterKey, value: filter.filterValue}),
		queryFn: getPortfolios,
		select: data => data.pages[0],
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = allPages.length + 1;
			return lastPage.length < PORTFOLIOS_PER_PAGE ? undefined :nextPage;
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

export const useToggleButtonQuery = (id: number, type: Toggle) => {
	const queryClient = useQueryClient();

	const handleToggleButton = () => fetch(`/${type}?id=${id}`, 'POST');

	return useMutation({
		mutationFn: handleToggleButton,
		onMutate: async () => {
			const queryKey = ['portfolios', 'detail', String(id)];
			const prevData: any = queryClient.getQueryData(queryKey);

			await queryClient.cancelQueries({queryKey: queryKey});

			queryClient.setQueryData(queryKey, ()=>{
				if(type === 'bookmark')
					return {...prevData, isBookmarked: !prevData.isBookmarked};
				if(type === 'like'){
					if(prevData.isLiked)
						return {...prevData, isLiked: !prevData.isLiked, likes: --prevData.likes};
					return {...prevData, isLiked: !prevData.isLiked, likes: ++prevData.likes};
				}
			});

			return () => queryClient.setQueryData(queryKey, prevData);
		}
	})
}