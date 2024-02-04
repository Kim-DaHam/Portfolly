import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { FiPaperclip as ClipIcon } from "react-icons/fi";
import { RxExit as ExitIcon } from "react-icons/rx";
import { useDispatch } from "react-redux";

import * as S from '@/components/organisms/message-room/MessageRoom.styled';
import { setToast } from "@/redux/toastSlice";

import { useMessageRoomDeleteMutation } from "@/utils";

import { Text, AlertModal, PartnerProfile, MessageList, Button } from '@/components';

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
	const [isFileModalOpen, setIsFileModalOpen] = useState(false);
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
		setIsFileModalOpen(prev=>!prev);
		setValue('files', uploadedFiles);
		fileInput.value = '';
	};

	const onSubmit = () => {

	};

	return (
		<S.Wrapper>
			<S.TitleBox>
				<Text size='bodyMedium'>{message.partner.nickname}</Text>
				<ExitIcon size={24} onClick={() => setIsExitModalOpen(prev=>!prev)}/>
			</S.TitleBox>

			<S.Box>
				<MessageList
					message={message}
					setValue={setValue}
					getValues={getValues}
					isFileModalOpen={isFileModalOpen}
					handleFileModal={setIsFileModalOpen}
				/>
				<PartnerProfile message={message} />
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