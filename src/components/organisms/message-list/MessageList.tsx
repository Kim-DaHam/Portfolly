import { UseFormGetValues, UseFormSetValue } from 'react-hook-form';

import * as S from '@/components/organisms/message-list/MessageList.styled';

import type { Messages, SetState } from '@/types';

import { Text, FileModal, Message } from '@/components';

type Props = {
	messageList: Messages;
	getValues: UseFormGetValues<any>;
	setValue: UseFormSetValue<any>;
	isFileModalOpen: boolean;
	handleFileModal: SetState<boolean>;
};

export default function MessageList({ messageList={}, getValues, setValue, isFileModalOpen, handleFileModal }: Props) {
	const messageKeys = messageList && Object.keys(messageList);

	return (
		<S.Wrapper id='message-box'>
			{ messageList ?
				<S.Content>
						{ messageKeys.map((docKey: string) => {
							return (
								<Message
									key={docKey}
									message={messageList[docKey]}
									partnerProfileImage={messageList[docKey].from.profileImage}
								/>
							)
						})}
				</S.Content>
			:
				<S.Notification>
					<Text size='label' color='lightgray'>
						아직 메세지가 없어요.
					</Text>
				</S.Notification>
			}

			{ isFileModalOpen &&
				<FileModal
					handleFileModal={handleFileModal}
					setValue={setValue}
					getValues={getValues}
				/>
			}
		</S.Wrapper>
	)
}