import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Image, Text } from '@/components';
import * as S from '@/components/molecules/items/messageRoom-item/MessageRoomItem.styled';
import { toLocalDataString } from '@/utils';


type Props = {
	message: any;
}

export default function MessageRoomItem({ message }: Props) {
	const navigate = useNavigate();

	const searchParams = new URL(window.location.href).searchParams;
	const partnerId = searchParams.get('partner_id') as string;
	const isClicked = Number(partnerId) === message.partner.id;

	return (
		<S.Wrapper onClick={() => navigate(`/messages?partner_id=${message.partner.id}`)} $isClicked={isClicked}>
			<Image
				src={message.partner.profileImage}
				alt='사용자 프로필'
				size='3.2rem'
				shape='circle'
			/>

			<S.Box>
				<S.LabelBox>
					<Text type='label'>{message.partner.nickname}</Text>
					<Text type='label' color='gray'>{toLocalDataString(new Date(message.timestamp))}</Text>
				</S.LabelBox>

				<S.MessageBox>
					<Text type='common'>{message.lastMessage}</Text>
				</S.MessageBox>
			</S.Box>
		</S.Wrapper>
	)
}