import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { fetch } from "@/utils";

const messageKeys = {
  all: ['messages'] as const,
  lists: (type: string) => [...messageKeys.all, type] as const,
  list: (type: string, filters: string | object) => [...messageKeys.lists(type), { filters }] as const,
  detail: (id: string) => ['message', id] as const,
}

export const useMessageRoomQuery = (partnerId: string) => {
	const getMessages = () => fetch(`/messageRooms?partner_id=${partnerId}&page=${1}`, 'GET');

	return useQuery({
		queryKey: partnerId !== null ? messageKeys.detail(partnerId) : messageKeys.all,
		queryFn: getMessages,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};

export const useMessageRoomDeleteMutation = (partnerId: string) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const deleteMessageRoom = () => fetch(`/messageRooms?partner_id=${partnerId ? partnerId : ''}`, 'DELETE');

	return useMutation({
		mutationFn: deleteMessageRoom,
		onSuccess: () => {
			queryClient.removeQueries({queryKey: ['message', partnerId]});
			navigate(`/messages`);
		},
	});
};