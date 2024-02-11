import { useSelector } from 'react-redux';

import * as S from '@/components/molecules/message/Message.styled';
import { userState } from '@/redux/loginSlice';

import { toLocalTimeString } from '@/utils';

import { Image, MultiMediaMessage, Text } from '@/components';

type Props = {
	message: any;
	partnerProfileImage: string;
};

export default function Message({ message, partnerProfileImage }: Props) {
	const { id: userId } = useSelector(userState);
	const isOwned = message.from.id === userId ? true : false;
	const isLongMessage = message.message.length > 21 || message.files?.length > 0;
	const isOnlyText = message.files ? false : true;

	return (
		<S.Wrapper
			$isOwned={isOwned}
			$isLongMessage={isLongMessage}
		>
			{ isOwned ?
				<>
					<Text size='bodySmall' color='lightgray'>
						{toLocalTimeString(message.createdAt)}
					</Text>
					<S.Content
						$isOwned={isOwned}
						$isLongMessage={isLongMessage}
					>
						{	isOnlyText ?
							<Text size='bodySmall'>
								{message.message}
							</Text>
						:
							<MultiMediaMessage files={message.files} />
						}
					</S.Content>
				</>
				:
				<>
					<Image
						src={partnerProfileImage}
						alt='프로필 이미지'
						size='3rem'
						shape='circle'
					/>
					<S.Content
						$isOwned={isOwned}
						$isLongMessage={isLongMessage}
					>
						{	isOnlyText ?
							<Text size='bodySmall' color='white'>
								{message.message}
							</Text>
						:
							<MultiMediaMessage files={message.files} />
						}
					</S.Content>
					<Text size='bodySmall' color='lightgray'>
						{toLocalTimeString(message.createdAt)}
					</Text>
				</>
			}
		</S.Wrapper>
	)
}