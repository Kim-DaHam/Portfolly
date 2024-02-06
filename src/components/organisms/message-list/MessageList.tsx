import { useEffect } from 'react';
import { UseFormGetValues, UseFormSetValue } from 'react-hook-form';

import * as S from '@/components/organisms/message-list/MessageList.styled';

import type { SetState } from '@/types';

import { Text, FileModal, Message } from '@/components';

type Props = {
	message: any;
	getValues: UseFormGetValues<any>;
	setValue: UseFormSetValue<any>;
	isFileModalOpen: boolean;
	handleFileModal: SetState<boolean>;
};

export default function MessageList({ message, getValues, setValue, isFileModalOpen, handleFileModal }: Props) {

	useEffect(() => {
		const messageBox = document.querySelector('#message-box') as HTMLElement;
		messageBox.scrollTop = messageBox.scrollHeight;
	}, []);

	return (
		<S.Wrapper id='message-box'>
			<>
			{ message.messages.length > 0 ?
				<>
				{ message.messages.map((item: any) => {
					return (
						<Message
							message={item}
							key={item.id}
							partnerProfileImage={message.partner.profileImage}
						/>
					)
				})}
				</>
				:
				<S.Notification>
					<Text size='label' color='lightgray'>
						아직 메세지가 없어요.
					</Text>
				</S.Notification>
			}
			</>

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