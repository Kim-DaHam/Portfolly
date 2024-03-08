import { useQuery } from "@tanstack/react-query";

import { callApi } from "@/utils";

const userKeys = {
  all: ['users'] as const,
  lists: (type: string) => [...userKeys.all, type] as const,
  list: (type: string, filters: string | object) => [...userKeys.lists(type), { filters }] as const,
  detail: (id: string) => ['user', id] as const,
}

export const useUserQuery = (id: string) => {
	const getUsers = () => callApi(`/users?id=${id}`, 'GET');

	return useQuery({
		queryKey: userKeys.detail(id),
		queryFn: getUsers,
		staleTime: Infinity,
		gcTime: Infinity,
		throwOnError: false,
	});
};