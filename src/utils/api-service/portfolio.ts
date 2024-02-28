import { useMutation, useQuery, useQueryClient, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Toggle } from '@/components/atoms/button/ToggleButton';

import type { Portfolio, Section } from '@/types';

import { section, setToast } from '@/redux';
import { fetch, getFilterQueryString, toUrlParameter } from "@/utils";

export const PAGE_PER_DATA = 100;

const portfolioKeys = {
  all: ['portfolios'] as const,
  lists: (type: string) => [...portfolioKeys.all, type] as const,
  list: (type: string, filters: string | object) => [...portfolioKeys.lists(type), { filters }] as const,
  details: () => [...portfolioKeys.all, 'detail'] as const,
  detail: (id: string) => [...portfolioKeys.details(), id] as const,
}

// 포트폴리오 목록 가져오기
export const usePortfoliosQuery = (section: Section, filter: {[key in string]: string}) => {
	let filterQueryString = ``;

	Object.keys(filter).forEach((filterType: string) => {
		filterQueryString += `${filterType}=${toUrlParameter(filter[filterType])}&`;
	});

	if(!filter['appCategory']) {
		filterQueryString += `appCategory=전체&`;
	}
	filterQueryString = filterQueryString.slice(0, -1);

	const getPortfolios = ({ pageParam }: { pageParam: number }) => {
		return fetch(`/portfolios?page=${pageParam}&section=${section}&${filterQueryString}`, 'GET');
	};

	return useSuspenseInfiniteQuery({
		queryKey: portfolioKeys.list(section, filter),
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


// 분야별 top3 포트폴리오 가져오기
export const useTopPortfoliosQuery = () => {
	const getTopPortfolios = () => fetch('/top-portfolios', 'GET');

	return useQuery({
		queryKey: portfolioKeys.lists('top'),
		queryFn: getTopPortfolios,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};

// 카테고리, 태그별 개수 가져오기
export const usePortfoliosCountQuery = (section: Section) => {
	const getTopPortfolios = () => fetch(`/portfolios/count?section=${section}`, 'GET');

	return useQuery({
		queryKey: portfolioKeys.lists('count'),
		queryFn: getTopPortfolios,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};

// 포트폴리오 상세보기 데이터 가져오기
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
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const currentSection = useSelector(section);

	const queryClient = useQueryClient();
	const deletePortfolio = () => fetch(`/portfolios?id=${id}`, 'DELETE');

	return useMutation({
		mutationFn: deletePortfolio,
		onSuccess: () => {
			queryClient.removeQueries({queryKey: ['portfolios', 'detail', id]})
			dispatch(setToast({id: 0, type:'success', message: '포트폴리오를 삭제했습니다.'}));
			navigate(`/main/${toUrlParameter(currentSection)}`);
		},
		onError: () => {
			dispatch(setToast({id: 0, type:'error', message: '삭제를 실패했습니다.'}));
		},
	});
};

// 좋아요, 북마크 버튼
export const useToggleButtonQuery = (portfolioId: string, type: Toggle) => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();
	const currentSection = useSelector(section);
	const filter = getFilterQueryString();

	const portfolioDetailQueryKey = ['portfolios', 'detail', portfolioId];
	const portfolioAllQueryKey = [
		'portfolios',
		currentSection,
		{filters: {
			appCategory: filter.appCategory,
		}}];

	const prevPortfolioAll = queryClient.getQueryData(portfolioAllQueryKey) as any;
	const prevPortfolio = queryClient.getQueryData(portfolioDetailQueryKey) as Portfolio | undefined;

	const portfolioList = prevPortfolioAll &&
		JSON.parse(JSON.stringify(prevPortfolioAll)) as any;

	const portfolio = prevPortfolio &&
		JSON.parse(JSON.stringify(prevPortfolio)) as Portfolio;

	const handleToggleButton = () => fetch(`/${type}?id=${portfolioId}`, 'POST');

	return useMutation({
		mutationFn: handleToggleButton,
		onMutate: async () => {
			// 메인 페이지에서의 북마크 등록인 경우
			if(prevPortfolioAll && type === 'bookmark') {
				await queryClient.cancelQueries({queryKey: portfolioAllQueryKey});

				portfolioList.pages.flat().forEach((portfolio: Portfolio) => {
					if(portfolio.id !== portfolioId) return;
					portfolio.isBookmarked = !portfolio.isBookmarked;
					return false;
				})

				queryClient.setQueryData(portfolioAllQueryKey, portfolioList);
			}

			// 포트폴리오 디테일 페이지에서의 북마크/좋아요 등록인 경우
			if(prevPortfolio) {
				await queryClient.cancelQueries({queryKey: portfolioDetailQueryKey});

				if(type === 'bookmark'){
					portfolio!.isBookmarked = !prevPortfolio.isBookmarked;
				}
				if(type === 'like'){
					portfolio!.isLiked = !prevPortfolio.isLiked;
					if(prevPortfolio.isLiked){
						portfolio!.likes = prevPortfolio.likes - 1;
					}
					else portfolio!.likes = prevPortfolio.likes + 1;
				}

				queryClient.setQueryData(portfolioDetailQueryKey, portfolio);
			}
		},
		onSuccess: () => {
			if(prevPortfolioAll && type === 'bookmark') {
				return queryClient.setQueryData(portfolioAllQueryKey, portfolioList);
			}
			return queryClient.setQueryData(portfolioDetailQueryKey, portfolio);
		},
		onError: () => {
			if(prevPortfolioAll) {
				queryClient.setQueryData(portfolioAllQueryKey, prevPortfolioAll);
			}
			if(prevPortfolio) {
				queryClient.setQueryData(portfolioDetailQueryKey, prevPortfolio);
			}
			if(type === 'bookmark') {
				dispatch(setToast({id: 0, type:'error', message: '북마크 등록을 실패했습니다.'}));
			}
			if(type === 'like') {
				dispatch(setToast({id: 0, type:'error', message: '좋아요 등록을 실패했습니다.'}));
			}
			return;
		},
	})
};

// 포트폴리오 작성/수정
export const usePortfolioPostQuery = (id?: string) => {
	const queryClient = useQueryClient();
	const portfolioDetailQueryKey = ['portfolios', 'detail', id];
	const postPortfolio = (body: any) => fetch(`/portfolios`, 'POST', body);
	const updatePortfolio = (body: any) => fetch(`/portfolios?id=${id}`, 'PATCH', body);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	return useMutation({
		mutationFn: id? updatePortfolio : postPortfolio,
		onSuccess: (response) => {
			if(id) {
				queryClient.setQueryData(portfolioDetailQueryKey, response);
			}
			queryClient.setQueryData(['portfolios', 'detail', response.id], response);
			// queryClient.invalidateQueries({portfolioDetailQueryKey: ['portfolios'], refetchType: 'all' });
			navigate(`/portfolios/${response.id}`);
			dispatch(setToast({id: 0, type:'success', message: '포트폴리오가 등록되었습니다.'}));
		},
		onError: () => {
			dispatch(setToast({id: 0, type:'success', message: '포트폴리오 등록에 실패했습니다.'}));
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