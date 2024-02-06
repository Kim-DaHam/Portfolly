import { useEffect, useState } from "react";

import * as S from '@/components/organisms/message-room-list/MessageRoomList.styled';

import { Text, MessageRoomItem, Selector } from "@/components";

type Props = {
	messageRooms: any;
}

export default function MessageRoomList({ messageRooms }: Props) {
	const [messageFilter, setMessageFilter] = useState('전체');
	const [filteredMessageRooms, setFilteredMessageRooms] = useState<any[]>([]);

	const filterMessageRooms = () => {
		if(messageFilter === '전체') {
			return setFilteredMessageRooms(messageRooms);
		}
		if(messageFilter === '안 읽음') {
			const filteredRooms = messageRooms.filter((room: any) => {
				return room.isRead === false;
			})
			return setFilteredMessageRooms(filteredRooms);
		}
		if(messageFilter === '거래 중') {
			const filteredRooms = messageRooms.filter((message: any) => {
				return message.commissionStatus !== '구매 확정' && message.commissionStatus !== null;
			})
			return setFilteredMessageRooms(filteredRooms);
		}
	};

	useEffect(() => {
		filterMessageRooms();
	}, [messageFilter]);

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
				{ filteredMessageRooms.length > 0 ?
					<>
						{ filteredMessageRooms.map((room: any) => {
								return <MessageRoomItem message={room} key={room.id}/>
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