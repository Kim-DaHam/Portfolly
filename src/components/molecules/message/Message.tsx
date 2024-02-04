import { useSelector } from 'react-redux';

import * as S from '@/components/molecules/message/Message.styled';
import { userState } from '@/redux/loginSlice';

import { toLocalTimeString } from '@/utils';

import { Image, Text } from '@/components';

type Props = {
	message: any;
	partnerProfileImage: string;
}

export default function Message({ message, partnerProfileImage }: Props) {
	const { id: userId } = useSelector(userState);
	const isOwned = message.userId === userId ? true : false;

	return (
		<S.Wrapper $isOwned={isOwned}>
			{ isOwned ?
				<>
					<Text size='label' color='lightgray'>{toLocalTimeString(new Date(message.createdAt))}</Text>
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
					<Text size='label' color='lightgray'>{toLocalTimeString(new Date(message.createdAt))}</Text>
				</>
			}
		</S.Wrapper>
	)
}