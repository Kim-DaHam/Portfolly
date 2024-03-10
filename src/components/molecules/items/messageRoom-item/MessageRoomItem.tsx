import { useNavigate } from 'react-router-dom';

import * as S from '@/components/molecules/items/messageRoom-item/MessageRoomItem.styled';

import type { MessageRoom } from '@/types';

import { toLocalDateString } from '@/utils';

import { Image, Text } from '@/components';

type Props = {
	messageRoom: MessageRoom;
}

export default function MessageRoomItem({ messageRoom }: Props) {
	const navigate = useNavigate();

	const searchParams = new URL(window.location.href).searchParams;
	const roomId = searchParams.get('room_id') as string;
	const isClicked = roomId === messageRoom.id;

	return (
		<S.Wrapper
			onClick={() => navigate(`/messages?room_id=${messageRoom.id}`)}
			$isClicked={isClicked}
		>
			<Image
				src={messageRoom.partner!.profileImage}
				alt='사용자 프로필'
				size='3.2rem'
				shape='circle'
			/>

			<S.Box>
				<S.LabelBox>
					<Text size='label'>
						{messageRoom.partner!.nickname}
					</Text>
					<Text size='label' color='gray'>
						{ messageRoom.lastMessage ?
							toLocalDateString(messageRoom.lastMessage?.createdAt)
							:
							''
						}
					</Text>
				</S.LabelBox>

				<S.MessageBox>
					<Text size='bodyMedium'>
						{messageRoom.lastMessage?.content}
					</Text>
				</S.MessageBox>
			</S.Box>
		</S.Wrapper>
	)
}