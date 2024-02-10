import { useNavigate } from 'react-router-dom';

import * as S from '@/components/molecules/items/messageRoom-item/MessageRoomItem.styled';

import type { MessageRoom } from '@/types';

import { Image, Text } from '@/components';

type Props = {
	messageRoom: MessageRoom;
}

export default function MessageRoomItem({ messageRoom }: Props) {
	const navigate = useNavigate();

	const searchParams = new URL(window.location.href).searchParams;
	const partnerId = searchParams.get('partner_id') as string;
	const isClicked = partnerId === messageRoom.partner!.id;

	return (
		<S.Wrapper onClick={() => navigate(`/messages?partner_id=${messageRoom.partner!.id}`)} $isClicked={isClicked}>
			<Image
				src={messageRoom.partner!.profileImage}
				alt='사용자 프로필'
				size='3.2rem'
				shape='circle'
			/>

			<S.Box>
				<S.LabelBox>
					<Text size='label'>{messageRoom.partner!.nickname}</Text>
					<Text size='label' color='gray'>

					</Text>
				</S.LabelBox>

				<S.MessageBox>
					<Text size='bodyMedium'>

					</Text>
				</S.MessageBox>
			</S.Box>
		</S.Wrapper>
	)
}