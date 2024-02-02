import { useSelector } from 'react-redux';

import { Image, Text } from '@/components';
import * as S from '@/components/molecules/message/Message.styled';
import { userId } from '@/redux/loginSlice';
import { toLocalTimeString } from '@/utils';

type Props = {
	message: any;
	partnerProfileImage: string;
}

export default function Message({ message, partnerProfileImage }: Props) {
	const loginId = useSelector(userId);
	const isOwned = message.userId === loginId ? true : false;

	return (
		<S.Wrapper $isOwned={isOwned}>
			{ isOwned ?
				<>
					<Text type='label' color='lightgray'>{toLocalTimeString(new Date(message.createdAt))}</Text>
					<S.Content $isOwned={isOwned}>
						{message.message}
					</S.Content>
				</>
				:
				<>
					<Image src={partnerProfileImage} alt='프로필 이미지' size='3rem' shape='circle'/>
					<S.Content $isOwned={isOwned}>
						{message.message}
					</S.Content>
					<Text type='label' color='lightgray'>{toLocalTimeString(new Date(message.createdAt))}</Text>
				</>
			}
		</S.Wrapper>
	)
}