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
	const isLongText = message.content.length > 21;
	const isMultiMedia = message.files !== null;
	const hasFiles = message.files ? true : false;
	const hasText = message.content.length > 0 ? true : false;

	return (
		<Fragment>
			{	hasFiles && hasText ?
				<S.Wrapper
					$isOwned={isOwned}
					$isLongMessage={true}
				>
					<Image
						src={partnerProfileImage}
						alt='프로필 이미지'
						size='3rem'
						shape='circle'
					/>

					<S.Box $isOwned={isOwned}>
						<S.Content
							$isOwned={isOwned}
							$isLongMessage={isLongText}
						>
							<Text size='bodySmall' color='white'>
								{message.content}
							</Text>
						</S.Content>

						<S.Content
							$isOwned={isOwned}
							$isLongMessage={isMultiMedia}
						>
							<MultiMediaMessage files={message.files} />
						</S.Content>
					</S.Box>

					<Text size='bodySmall' color='lightgray'>
						{toLocalTimeString(message.createdAt)}
					</Text>
				</S.Wrapper>
				:
				<S.Wrapper
					$isOwned={isOwned}
					$isLongMessage={isLongText || isMultiMedia}
				>
					<Image
						src={partnerProfileImage}
						alt='프로필 이미지'
						size='3rem'
						shape='circle'
					/>

					<S.Content
						$isOwned={isOwned}
						$isLongMessage={isLongText || isMultiMedia}
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