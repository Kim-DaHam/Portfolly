import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import * as S from '@/components/molecules/message/Message.styled';
import { userState } from '@/redux/loginSlice';

import type { Message } from '@/types';

import { toLocalTimeString } from '@/utils';

import { Image, MultiMediaMessage, Text } from '@/components';

type Props = {
	message: Message;
	partnerProfileImage: string;
};

export default function Message({ message, partnerProfileImage }: Props) {
	const { id: userId } = useSelector(userState);
	const isOwned = message.from.id === userId ? true : false;
	const isLongMessage = message.content.length > 21 || message.files !== null;
	const hasFiles = message.files ? true : false;
	const hasText = message.content.length > 0 ? true : false;

	return (
		<Fragment>
			{	hasFiles && hasText ?
				<Fragment>
					<S.Wrapper
						$isOwned={isOwned}
						$isLongMessage={isLongMessage}
					>
						<MultiMediaMessage files={message.files} />
					</S.Wrapper>

					<S.Wrapper
						$isOwned={isOwned}
						$isLongMessage={isLongMessage}
					>
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
							<Text size='bodySmall' color='white'>
								{message.content}
							</Text>
						</S.Content>

						<Text size='bodySmall' color='lightgray'>
							{toLocalTimeString(message.createdAt)}
						</Text>
					</S.Wrapper>
				</Fragment>
				:
				<S.Wrapper
					$isOwned={isOwned}
					$isLongMessage={isLongMessage}
				>
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
						{ hasFiles ?
							<MultiMediaMessage files={message.files} />
							:
							<Text size='bodySmall' color='white'>
								{message.content}
							</Text>
						}
					</S.Content>

					<Text size='bodySmall' color='lightgray'>
						{toLocalTimeString(message.createdAt)}
					</Text>
				</S.Wrapper>
			}
		</Fragment>
	)
}