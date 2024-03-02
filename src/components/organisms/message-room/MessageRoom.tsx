import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiPaperclip as ClipIcon } from "react-icons/fi";
import { RxExit as ExitIcon } from "react-icons/rx";
import { useDispatch } from "react-redux";

import * as S from '@/components/organisms/message-room/MessageRoom.styled';

import type { MessageRoom } from "@/types";

import { setToast } from "@/redux";
import { useMessageRoomDeleteMutation, useMessageSendMutation } from "@/utils";

import { Text, AlertModal, PartnerProfile, MessageList, Button } from '@/components';

type Props = {
	messageRoom: MessageRoom;
}

export type MessageFormValues = {
	files: File[];
	message: string;
};

const defaultValues: MessageFormValues = {
	files: [],
	message: '',
};

export default function MessageRoom({ messageRoom }: Props) {
	const [isFileModalOpen, setIsFileModalOpen] = useState(false);
	const [isExitModalOpen, setIsExitModalOpen] = useState(false);

	const urlParams = new URL(window.location.href).searchParams;
	const roomId = urlParams.get('room_id') as string;

	const { register, handleSubmit, setValue, getValues } = useForm<MessageFormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	const dispatch = useDispatch();
	const sendMessageMutation = useMessageSendMutation(roomId);
	const deleteMessageRoomMutation = useMessageRoomDeleteMutation(roomId);

	const exitMessageRoom = () => {
		deleteMessageRoomMutation.mutate();
		setIsExitModalOpen(prev=>!prev);
	};

	const addFile = (event: ChangeEvent) => {
		const fileInput = event.target as HTMLInputElement;
		const uploadedFiles = Array.from(fileInput.files!);

		if(uploadedFiles!.length > 10) {
			dispatch(setToast({id: 0, type: 'error', message: '파일은 최대 10개까지 첨부 가능합니다.'}));
			uploadedFiles.splice(10);
		}

		setValue('files', uploadedFiles);
		setIsFileModalOpen(prev => !prev);
	};

	const handleEnterKey = (event: React.KeyboardEvent) => {
		if(event.key !== 'Enter') return;
		handleSubmit(onSubmit)();
		return;
	};

	const onSubmit = (form: MessageFormValues) => {
		console.log('in')
		sendMessageMutation.mutate(form, {
			onSuccess: () => {
				setValue('files', []);
				setValue('message', '');
				setIsFileModalOpen(false);
			},
		});
	};

	useEffect(() => {
		const messageBox = document.querySelector('#message-box') as HTMLElement;
		messageBox.scrollTop = messageBox.scrollHeight;
		setIsFileModalOpen(false);
	}, [messageRoom]);

	return (
		<S.Wrapper>
			<S.TitleBox>
				<Text size='label'>{messageRoom.partner?.nickname}</Text>
				<ExitIcon size={24} onClick={() => setIsExitModalOpen(prev=>!prev)}/>
			</S.TitleBox>

			<S.Box>
				<MessageList
					messageList={messageRoom.messages!}
					setValue={setValue}
					getValues={getValues}
					isFileModalOpen={isFileModalOpen}
					handleFileModal={setIsFileModalOpen}
				/>
				<PartnerProfile
					messageRoom={messageRoom}
				/>
			</S.Box>

			<S.InputBox>
				<S.TextInput
					placeholder='메세지를 입력하세요.'
					onKeyPress={handleEnterKey}
					{...register('message', {
						validate: () => getValues('message').length > 0 ? true : false,
					})}
				/>

				<S.Box>
					<S.FileInput>
						<S.Input type='file' id='file-input' onChange={addFile} multiple />
						<S.Label htmlFor='file-input'>
							<ClipIcon size={17} color='gray'/>
							파일 첨부
						</S.Label>
					</S.FileInput>
				</S.Box>

				<Button color='gray' onClick={handleSubmit(onSubmit)}>
					전송
				</Button>
			</S.InputBox>

			<AlertModal
				type='messageRoom'
				onConfirm={exitMessageRoom}
				handleModal={() => setIsExitModalOpen(prev=>!prev)}
				$modalState={isExitModalOpen}
			/>
		</S.Wrapper>
	)
}