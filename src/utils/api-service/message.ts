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

// 대화방 목록 불러오기
export const useMessageRoomsQuery = () => {
	const getMessageRooms = () => fetch(`/messageRooms`, 'GET');

	return useQuery({
		queryKey: messageKeys.lists('list'),
		queryFn: getMessageRooms,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};

// 대화방 불러오기
export const useMessageRoomQuery = (roomId: string | null) => {
	const getMessageRoom = () => fetch(`/messageRoom?room_id=${roomId}&page=${1}`, 'GET');

	return useQuery({
		queryKey: roomId ? messageKeys.detail(roomId) : messageKeys.all,
		queryFn: getMessageRoom,
		staleTime: Infinity,
		gcTime: Infinity,
		throwOnError: false,
	});
};

// 대화방 삭제하기
export const useMessageRoomDeleteMutation = (roomId: string) => {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const messageRoomList = queryClient.getQueryData(['messageRoom', 'list']) as any[];
	const copyMessageRoomList = messageRoomList && JSON.parse(JSON.stringify(messageRoomList));

	const deleteMessageRoom = () => fetch(`/messageRooms?room_id=${roomId}`, 'DELETE');

	return useMutation({
		mutationFn: deleteMessageRoom,

		onSuccess: () => {
			if(messageRoomList) {
				messageRoomList.forEach((room: MessageRoom, index: number) => {
					if(room.id !== roomId) return;
					copyMessageRoomList.splice(index, 1);
					return false;
				});
				queryClient.setQueryData(['messageRoom', 'list'], copyMessageRoomList);
			}
			queryClient.removeQueries({queryKey: ['messageRoom', `${roomId}`]});
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

// 메세지 전송
export const useMessageSendMutation = (roomId: string) => {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const messageRoom = queryClient.getQueryData(['messageRoom', roomId]) as any[];
	const messageRoomList = queryClient.getQueryData(['messageRoom', 'list']) as any[];
	const copyMessageRoom = messageRoom && JSON.parse(JSON.stringify(messageRoom));
	const copyMessageRoomList = messageRoomList && JSON.parse(JSON.stringify(messageRoomList));

	const sendMessage = (body: any) => fetch(`/message?room_id=${roomId}`, 'POST', body);

	return useMutation({
		mutationFn: sendMessage,

		onSuccess: (response) => {
			copyMessageRoom.messages[response.id] = response.message;
			copyMessageRoom.lastMessage = response.message;
			queryClient.setQueryData(['messageRoom', roomId], copyMessageRoom);

			copyMessageRoomList.forEach((room: MessageRoom) => {
				if(room.id !== roomId) return;
				room.lastMessage = {
					id: response.id,
					...response.message,
				};
			});
			queryClient.setQueryData(['messageRoom', 'list'], copyMessageRoomList);
		},

		onError: () => {
			dispatch(setToast({id: 0, type: 'error', message: '메세지 전송을 실패했습니다.'}));
			return;
		},
	});
};