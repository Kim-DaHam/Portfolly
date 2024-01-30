import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiPencil as PencilIcon } from "react-icons/bi";
"react-icons/fi";
import { RxExit as ExitIcon } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

import { Button, Message, MessageRoomList, Profile, Selector, Text } from '@/components';
import * as S from '@/pages/message/MessagePage.styled';
import { useMessageRoomQuery } from "@/utils";

export type FormValues = {
	message: string;
	memo: string;
};

const defaultValues: FormValues = {
	message: '',
	memo: '',
};

export default function MessagePage() {
	const urlParams = new URL(window.location.href).searchParams;
	const partnerId = urlParams.get('partner_id');

	const navigate = useNavigate();
	const { data: message } = useMessageRoomQuery(partnerId);
	// const { register, handleSubmit, setValue } = useForm<FormValues>({
		// 	mode: 'onSubmit',
		// 	defaultValues: defaultValues,
		// });

	useEffect(() => {
		if(message && !partnerId) {
			navigate(`/messages?partner_id=${message.partner.id}`);
		}

		if(message && message.messages.length > 0) {
			const messageBox = document.querySelector('#message-box') as HTMLElement;
			messageBox.scrollTop = messageBox.scrollHeight;
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
						<>
						<S.TitleBox>
							<Text type='common'>{message.partner.nickname}</Text>
							<ExitIcon size={24} />
						</S.TitleBox>

						<S.Box>
							<S.MessageBox id='message-box'>
								{ message.messages.length > 0 ?
									<>
									{ message.messages.map((item: any) => {
										return <Message message={item} key={item.id} partnerProfileImage={message.partner.profileImage}/>
									})}
									</>
									:
									<> 아직 메세지가 없어요.</>
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
						</>
						:
						<S.NotificationBox>
							여러분의 전문가와 대화를 시작하세요!
						</S.NotificationBox>
					}

					<S.InputBox>
						<S.TextArea />
						<S.Box>
							<S.LabelButton>파일 첨부</S.LabelButton>
							<Button color='gray'>전송</Button>
						</S.Box>
					</S.InputBox>
				</S.MessageSection>
			</S.Content>
		</S.Wrapper>
	)
}