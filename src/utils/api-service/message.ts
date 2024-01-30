import { useQuery } from "@tanstack/react-query";

import { fetch } from "@/utils";

const messageKeys = {
  all: ['messages'] as const,
  lists: (type: string) => [...messageKeys.all, type] as const,
  list: (type: string, filters: string | object) => [...messageKeys.lists(type), { filters }] as const,
  detail: (id: string) => ['message', id] as const,
}

export const useMessageRoomQuery = (partnerId: string | null) => {
	const getMessages = () => fetch(`/messageRooms?partner_id=${partnerId ? partnerId : ''}&page=${1}`, 'GET');

	return useQuery({
		queryKey: partnerId !== null ? messageKeys.detail(partnerId) : messageKeys.all,
		queryFn: getMessages,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};