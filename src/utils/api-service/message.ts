import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import type { MessageRoom } from "@/types";

import { setToast } from "@/redux";
import { callApi } from "@/utils";

const messageKeys = {
  all: ['messageRoom'] as const,
  lists: (type: string) => [...messageKeys.all, type] as const,
  list: (type: string, filters: string | object) => [...messageKeys.lists(type), { filters }] as const,
  detail: (id: string) => [...messageKeys.all, id] as const,
}

// 대화방 목록 불러오기
export const useMessageRoomsQuery = () => {
	const getMessageRooms = () => callApi(`/messageRooms`, 'GET');

	return useQuery({
		queryKey: messageKeys.lists('list'),
		queryFn: getMessageRooms,
		staleTime: Infinity,
		gcTime: Infinity,
	});
};

// 대화방 생성하기
export const useMessageRoomMutation = (partnerId: string, portfolioId: string) => {
	const queryClient = useQueryClient();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const messageRoomList = queryClient.getQueryData(['messageRoom', 'list']) as any[];
	const copyMessageRoomList = messageRoomList && JSON.parse(JSON.stringify(messageRoomList));

	const createMessageRoom = () => callApi(`/messageRooms?partner_id=${partnerId}&portfolio_id=${portfolioId}`, 'POST');

	return useMutation({
		mutationFn: createMessageRoom,

		onSuccess: (response) => {
			if(messageRoomList) {
				copyMessageRoomList.push({
					id: response.id,
					partner: response.expert,
					commission: response.commission,
					lastMessage: response.lastMessage,
				});
				queryClient.setQueryData(['messageRoom', 'list'], copyMessageRoomList);
			}
			queryClient.setQueryData(['messageRoom', response.id], response);
			navigate(`/messages?room_id=${response.id}`);
			return;
		},

		onError: () => {
			dispatch(setToast({id: 0, type: 'error', message: '요청을 실패했습니다.'}));
			return;
		},
	});
};

// 대화방 불러오기
export const useMessageRoomQuery = (roomId: string | null) => {
	const getMessageRoom = () => callApi(`/messageRoom?room_id=${roomId}&page=${1}`, 'GET');

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

	const deleteMessageRoom = () => callApi(`/messageRooms?room_id=${roomId}`, 'DELETE');

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

	const sendMessage = async (body: any) => {
		const response = await fetch(`/message?room_id=${roomId}`, {
			method: 'POST',
			body: body,
		});
		return response.json();
	};

	return useMutation({
		mutationFn: sendMessage,

		onSuccess: (response: any) => {
			copyMessageRoom.messages[response.id] = response.message;
			copyMessageRoom.lastMessage = response.message;
			queryClient.setQueryData(['messageRoom', roomId], copyMessageRoom);

			copyMessageRoomList.forEach((room: MessageRoom) => {
				if(room.id !== roomId) return;
				room.lastMessage = {
					id: response.id,
					...response.message,
					content: response.message.content.length > 0 ?
						response.message.content : response.message.files[0].name,
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