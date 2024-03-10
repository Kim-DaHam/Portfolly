import { useEffect, useState } from "react";

import * as S from '@/components/organisms/message-room-list/MessageRoomList.styled';
import { MessageStatus, type MessageRoom } from "@/types";

import { useMessageRoomsQuery } from "@/utils";

import { Text, MessageRoomItem, Selector } from "@/components";

export default function MessageRoomList() {
	const [messageFilter, setMessageFilter] = useState<MessageStatus | '전체'>('전체');
	const [filteredMessageRooms, setFilteredMessageRooms] = useState<MessageRoom[]>([]);

	const { data: messageRoomList } = useMessageRoomsQuery();

	const filterMessageRooms = () => {
		if(messageFilter === '전체') {
			setFilteredMessageRooms(messageRoomList);
		}
		if(messageFilter === '안 읽음') {
			const filteredRooms = messageRoomList.filter((room: any) => {
				return room.isRead === false;
			})
			setFilteredMessageRooms(filteredRooms);
		}
		if(messageFilter === '거래 중') {
			const filteredRooms = messageRoomList.filter((room: any) => {
				return room.commission && room.commission.details.status !== '구매 확정';
			})
			setFilteredMessageRooms(filteredRooms);
		}
		return;
	};

	useEffect(() => {
		filterMessageRooms();
	}, [messageFilter, messageRoomList]);

	return (
		<S.Wrapper>
			<S.SearchBox>
				<Selector
					type='messageStatus'
					placeholder='전체'
					handleSelectorValue={setMessageFilter}
					size='7rem'
				/>
			</S.SearchBox>

			<S.MessageRoomBox>
				{ filteredMessageRooms?.length > 0 ?
					<>
						{ filteredMessageRooms?.map((room: any) => {
								return <MessageRoomItem messageRoom={room} key={room.id}/>
						})}
					</>
					:
					<S.Notification>
						<Text size='label' color='lightgray'>
							메세지 0건
						</Text>
					</S.Notification>
				}
			</S.MessageRoomBox>

		</S.Wrapper>
	)
}