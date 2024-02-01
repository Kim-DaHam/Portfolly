import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiPaperclip as ClipIcon } from "react-icons/fi";
import { RxExit as ExitIcon } from "react-icons/rx";
import { useDispatch } from "react-redux";

import { Text, Profile, Message, AlertModal, Button, FileModal } from '@/components';
import * as S from '@/components/organisms/message-room/MessageRoom.styled';
import { setToast } from "@/redux/toastSlice";
import { useMessageRoomDeleteMutation } from "@/utils";

type Props = {
	message: any;
}

export type FormValues = {
	files: File[];
	message: string;
	memo: string;
};

const defaultValues: FormValues = {
	files: [],
	message: '',
	memo: '',
};

export default function MessageRoom({ message }: Props) {
	const [isFileItemOpen, setIsFileItemOpen] = useState(false);
	const [isExitModalOpen, setIsExitModalOpen] = useState(false);

	const dispatch = useDispatch();

	const deleteMessageRoomMutation = useMessageRoomDeleteMutation(message.partner.id);

	const { register, handleSubmit, setValue, getValues } = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
});

	const exitMessageRoom = () => {
		deleteMessageRoomMutation.mutate();
		setIsExitModalOpen(prev=>!prev);
	};

	const addFile = (event: ChangeEvent) => {
		const fileInput = event.target as HTMLInputElement;
		const uploadedFiles = Array.from(fileInput.files!);

		if(fileInput.files!.length > 10) {
			dispatch(setToast({id: 1, type: 'error', message: '파일은 최대 10개까지 첨부 가능합니다.'}));
		}

		setValue('files', uploadedFiles);
		setIsFileItemOpen(prev=>!prev);

		fileInput.value = '';
	};

	const onSubmit = () => {

	};

	useEffect(() => {
		const messageBox = document.querySelector('#message-box') as HTMLElement;
		messageBox.scrollTop = messageBox.scrollHeight;
	}, []);

	return (
		<S.Wrapper>
			<S.TitleBox>
				<Text type='common'>{message.partner.nickname}</Text>
				<ExitIcon size={24} onClick={() => setIsExitModalOpen(prev=>!prev)}/>
			</S.TitleBox>

			<S.Box>
				<S.MessageBox id='message-box'>
					<>
					{ message.messages.length > 0 ?
						<>
						{ message.messages.map((item: any) => {
							return <Message message={item} key={item.id} partnerProfileImage={message.partner.profileImage}/>
						})}
						</>
						:
						<> 아직 메세지가 없어요.</>
					}
					</>

					{ isFileItemOpen &&
						<FileModal files={getValues('files')} />
					}
				</S.MessageBox>

				<S.ProfileBox>
					<Profile type='message' user={message.partner} />

					<S.ActivityBox>
						<S.Box>
							<Text type='label'>만족도</Text>
							<Text type='label'>{message.partner.score}</Text>
						</S.Box>
						<S.Box>
							<Text type='label'>연락 가능 시간</Text>
							<Text type='label'>{message.partner.contactTime}</Text>
						</S.Box>
					</S.ActivityBox>

					<Text type='label'>전문가 서비스</Text>
					<Profile type='portfolio' user={message.portfolio} />
				</S.ProfileBox>
			</S.Box>

			<S.InputBox>
				<S.TextArea
					{...register('message', {
						required: '메시지를 입력하세요',
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

					<Button color='gray' onClick={handleSubmit(onSubmit)}>
						전송
					</Button>
				</S.Box>
			</S.InputBox>

			{ isExitModalOpen &&
				<AlertModal
					type='messageRoom'
					onClick={exitMessageRoom}
					handleModal={() => setIsExitModalOpen(prev=>!prev)}
				/>
			}
		</S.Wrapper>
	)
}