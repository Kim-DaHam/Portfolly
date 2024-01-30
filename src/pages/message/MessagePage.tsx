import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiPencil as PencilIcon } from "react-icons/bi";
"react-icons/fi";
import { RxExit as ExitIcon } from "react-icons/rx";

import { Button, MessageRoomList, Profile, Selector, Text } from '@/components';
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
	const partnerId = urlParams.get('partner_id') || '';

	const { data: message } = useMessageRoomQuery(partnerId);

	// const { register, handleSubmit, setValue } = useForm<FormValues>({
	// 	mode: 'onSubmit',
	// 	defaultValues: defaultValues,
	// });

	return(
		<S.Wrapper>
			<S.Content>
					{ message &&
						<MessageRoomList messageRooms={message.messageRooms}/>
					}

				<S.MessageSection>
					<S.TitleBox>
						<S.FlexColumnBox>
								<Text type='common'>Username</Text>

							<S.FlexRow>
								<Text type='label'>메모 없음</Text>
								<PencilIcon size={16} />
							</S.FlexRow>
						</S.FlexColumnBox>

						<ExitIcon size={24} />
					</S.TitleBox>

					<S.Box>
						<S.ChatBox>
							{ message ?
								<>
									아직 메세지가 없어요.
								</>
								:
								<></>
							}
						</S.ChatBox>

						<S.ProfileBox>
							<Profile type='message' user={{nickname: '', profileImage: ''}} />
							<S.ActivityBox>
								<S.Box>
									<Text type='label'>만족도</Text>
									<Text type='label'>100%</Text>
								</S.Box>
								<S.Box>
									<Text type='label'>연락 가능 시간</Text>
									<Text type='label'>-</Text>
								</S.Box>
							</S.ActivityBox>
							<Text type='label'>전문가 서비스</Text>
							<Profile type='portfolio' user={{nickname: '', profileImage: ''}} />
						</S.ProfileBox>
					</S.Box>

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