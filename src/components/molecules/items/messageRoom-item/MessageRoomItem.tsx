import { useNavigate } from 'react-router-dom';

import * as S from '@/components/molecules/items/messageRoom-item/MessageRoomItem.styled';

import { toLocalDateString } from '@/utils';

import { Image, Text } from '@/components';

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
					<Text size='label'>{message.partner.nickname}</Text>
					<Text size='label' color='gray'>{toLocalDateString(new Date(message.timestamp))}</Text>
				</S.LabelBox>

				<S.MessageBox>
					<Text size='bodyMedium'>{message.lastMessage}</Text>
				</S.MessageBox>
			</S.Box>
		</S.Wrapper>
	)
}