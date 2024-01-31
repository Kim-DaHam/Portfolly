import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiPaperclip as ClipIcon } from "react-icons/fi";
"react-icons/fi";
import { useNavigate } from "react-router-dom";

import { Button, MessageRoom, MessageRoomList } from '@/components';
import * as S from '@/pages/message/MessagePage.styled';
import { useMessageRoomQuery } from "@/utils";

export type FormValues = {
	file: any;
	message: string;
	memo: string;
};

const defaultValues: FormValues = {
	file: null,
	message: '',
	memo: '',
};

export default function MessagePage() {
	const urlParams = new URL(window.location.href).searchParams;
	const partnerId = urlParams.get('partner_id') || '';

	const navigate = useNavigate();
	const { data: message } = useMessageRoomQuery(partnerId);

	const { register, handleSubmit, setValue } = useForm<FormValues>({
			mode: 'onSubmit',
			defaultValues: defaultValues,
	});

	const uploadFile = () => {

	};

	const onSubmit = () => {

	};

	useEffect(() => {
		if(message && !partnerId) {
			navigate(`/messages?partner_id=${message.partner.id}`);
		}
	}, [message]);

	return(
		<S.Wrapper>
			<S.Content>
				{ message &&
					<MessageRoomList messageRooms={message.messageRooms}/>
				}

				<S.MessageSection>
					{ message && message.messageRooms.length > 0 ?
						<MessageRoom message={message} />
						:
						<S.NotificationBox>
							여러분의 전문가와 대화를 시작하세요!
						</S.NotificationBox>
					}

					<S.InputBox>
						<S.TextArea
							{...register('message', {
								required: '메시지를 입력하세요',
							})}
						/>
						<S.Box>
							<S.FileInput>
								<S.Input type='file' id='file-input' {...register('file')} />
								<S.Label htmlFor='file-input' onClick={uploadFile}>
									<ClipIcon size={17} color='gray'/>
									파일 첨부
								</S.Label>
							</S.FileInput>

							<Button color='gray' onClick={handleSubmit(onSubmit)}>
								전송
							</Button>
						</S.Box>
					</S.InputBox>
				</S.MessageSection>
			</S.Content>
		</S.Wrapper>
	)
}