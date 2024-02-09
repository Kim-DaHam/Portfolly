import { useMutation, useQuery, useQueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Toggle } from '@/components/atoms/button/ToggleButton';

import type { Section } from '@/types';

import { setToast } from '@/redux';
import { fetch, toUrlParameter } from "@/utils";

export const PAGE_PER_DATA = 10;

const portfolioKeys = {
  all: ['portfolios'] as const,
  lists: (type: string) => [...portfolioKeys.all, type] as const,
  list: (type: string, filters: string | object) => [...portfolioKeys.lists(type), { filters }] as const,
  details: () => [...portfolioKeys.all, 'detail'] as const,
  detail: (id: string) => [...portfolioKeys.details(), id] as const,
}

// 포트폴리오 목록 불러오기
export const usePortfoliosQuery = (section: Section, filter: { filterKey: string, filterValue: string }) => {
	const filterSearchString = toUrlParameter(filter.filterValue);

	const getPortfolios = ({ pageParam }: { pageParam: number }) => {
		return fetch(`/portfolios?page=${pageParam}&section=${section}&${filter.filterKey}=${filterSearchString}`, 'GET');
	};

	return useSuspenseInfiniteQuery({
		queryKey: portfolioKeys.list(section, {
			type: filter.filterKey,
			value: filter.filterValue
		}),
		queryFn: getPortfolios,
		select: data => data.pages.flat(),
		initialPageParam: 1,
		getNextPageParam: (lastPage: any, allPages: any) => {
			const nextPageNum = allPages.length + 1;
			return lastPage?.length < PAGE_PER_DATA ? null : nextPageNum;
		},
		staleTime: Infinity,
		gcTime: Infinity,
	});
};


// 분야별 top3 포트폴리오 불러오기
export const useTopPortfoliosQuery = () => {
	const getTopPortfolios = () => fetch('/top-portfolios', 'GET');

	return useQuery({
		queryKey: portfolioKeys.lists('top'),
		queryFn: getTopPortfolios,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};

// 포트폴리오 상세보기 데이터 불러오기
export const usePortfolioDetailQuery = (id: string) => {
	const getPortfolio = () => fetch(`/portfolios/detail?id=${id}`, 'GET');

	return useQuery({
		queryKey: portfolioKeys.detail(id),
		queryFn: getPortfolio,
		staleTime: Infinity,
		gcTime: Infinity,
		throwOnError: false,
	});
};

// 포트폴리오 삭제
export const usePortfolioDeleteQuery = (id: string) => {
	const queryClient = useQueryClient();
	const deletePortfolio = () => fetch(`/portfolios?id=${id}`, 'DELETE');

	return useMutation({
		mutationFn: deletePortfolio,
		onSuccess: () => {
			queryClient.removeQueries({queryKey: ['portfolios', 'detail', id]})
			queryClient.invalidateQueries({queryKey: ['portfolios'], refetchType: 'all' });
		},
	});
};

// 좋아요, 북마크 버튼
export const useToggleButtonQuery = (id: string, type: Toggle) => {
	const queryClient = useQueryClient();
	const queryKey = ['portfolios', 'detail', id];
	const dispatch = useDispatch();

	const handleToggleButton = () => fetch(`/${type}?id=${id}`, 'POST');

	return useMutation({
		mutationFn: handleToggleButton,
		onMutate: async () => {
			const prevPortfolio: any = queryClient.getQueryData(queryKey);

			await queryClient.cancelQueries({queryKey: queryKey});

			queryClient.setQueryData(queryKey, ()=>{
				if(type === 'bookmark'){
					return {
						...prevPortfolio,
						isBookmarked: !prevPortfolio.isBookmarked,
					};
				}
				if(type === 'like'){
					if(prevPortfolio.isLiked){
						return {
							...prevPortfolio,
							isLiked: !prevPortfolio.isLiked,
							likes: --prevPortfolio.likes,
						};
					}
					return {
						...prevPortfolio,
						isLiked: !prevPortfolio.isLiked,
						likes: ++prevPortfolio.likes,
					};
				}
			});

			return () => queryClient.setQueryData(queryKey, prevPortfolio);
		},
		onSuccess: (response: any) => {
			const portfolio = queryClient.getQueryData(queryKey) as any;

			queryClient.setQueryData(queryKey, () => {
				if(type === 'bookmark'){
					return {
						...portfolio,
						isBookmarked: response.isBookmarked,
					}
				}
				return {
					...portfolio,
					isLiked: response.isLiked,
				};
			});
		},
		onError: () => {
			if(type === 'bookmark') {
				dispatch(setToast({id: 0, type:'error', message: '북마크 등록을 실패했습니다.'}));
			}
			if(type === 'like') {
				dispatch(setToast({id: 0, type:'error', message: '좋아요 등록을 실패했습니다.'}));
			}
		},
	})
};

export const usePortfolioPostQuery = (id?: string) => {
	const queryClient = useQueryClient();
	const postPortfolio = (body: any) => fetch(`/portfolios`, 'POST', body);
	const updatePortfolio = (body: any) => fetch(`/portfolios?id=${id}`, 'PATCH', body);

	const navigate = useNavigate();

	return useMutation({
		mutationFn: id? updatePortfolio : postPortfolio,
		onSuccess: (data) => {
			if(id) {
				queryClient.removeQueries({queryKey: ['portfolios', 'detail', id]});
			}
			queryClient.invalidateQueries({queryKey: ['portfolios'], refetchType: 'all' });
			navigate(`/portfolios/${data.id}`);
		},
	});
};

export const useImageQuery = () => {
  // const accessToken = localStorage.getItem('accessToken');

	const uploadImage = (body: any) => {
		return axios({
      headers: {
        'Content-Type': 'multipart/form-data',
        // accessToken: accessToken,
      },
      method: 'POST',
      url: '/picture',
      data: body,
    });
	};

	return useMutation({
		mutationFn: uploadImage,
	});
}