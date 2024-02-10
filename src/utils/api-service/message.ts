import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import type { MessageRoom } from "@/types";

import { setToast } from "@/redux";
import { fetch } from "@/utils";

const messageKeys = {
  all: ['messageRoom'] as const,
  lists: (type: string) => [...messageKeys.all, type] as const,
  list: (type: string, filters: string | object) => [...messageKeys.lists(type), { filters }] as const,
  detail: (id: string) => [...messageKeys.all, id] as const,
}

// 메세지룸 정보 불러오기
export const useMessageRoomQuery = (partnerId: string | null) => {
	const getMessageRoom = () => fetch(`/messageRoom?partner_id=${partnerId}&page=${1}`, 'GET');

	return useQuery({
		queryKey: partnerId ? messageKeys.detail(partnerId) : messageKeys.all,
		queryFn: getMessageRoom,
		staleTime: Infinity,
		gcTime: Infinity,
		throwOnError: false,
	});
};

// 메세지룸 삭제하기
export const useMessageRoomDeleteMutation = (partnerId: string) => {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const messageRoom = queryClient.getQueryData(['messageRoom']) as any;
	const copyMessageRoom = messageRoom && JSON.parse(JSON.stringify(messageRoom));

	const deleteMessageRoom = () => fetch(`/messageRooms?partner_id=${partnerId}`, 'DELETE');

	return useMutation({
		mutationFn: deleteMessageRoom,

		onSuccess: () => {
			if(messageRoom) {
				messageRoom.messageRoomList.forEach((room: MessageRoom, index: number) => {
					if(room.partner!.id !== partnerId) return;
					copyMessageRoom.messageRoomList.splice(index, 1);
					return false;
				});
				queryClient.setQueryData(['messageRoom'], copyMessageRoom);
			}
			queryClient.removeQueries({queryKey: ['messageRoom', `${partnerId}`]});
			navigate(`/messages`);
			dispatch(setToast({id: 0, type: 'success', message: '대화방에서 나갔습니다.'}));
			return;
		},

		onError: () => {
			dispatch(setToast({id: 0, type: 'error', message: '요청을 실패했습니다.'}));
			return;
		},
	});
};