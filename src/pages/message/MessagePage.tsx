import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiPencil as PencilIcon } from "react-icons/bi";
import { FiStar as StarIcon } from
"react-icons/fi";
import { RxExit as ExitIcon } from "react-icons/rx";

import { Button, MessageRoomItem, Profile, Selector, Text } from '@/components';
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
	const [messageFilter, setMessageFilter] = useState('전체');
	const [filteredMessageRooms, setFilteredMessageRooms] = useState<any[]>([]);

	const urlParams = new URL(window.location.href).searchParams;
	const partnerId = urlParams.get('partner_id') || '';

	const { data: messageRoom } = useMessageRoomQuery(partnerId);

	// const { register, handleSubmit, setValue } = useForm<FormValues>({
	// 	mode: 'onSubmit',
	// 	defaultValues: defaultValues,
	// });

	const filterMessageRooms = () => {
		if(messageFilter === '전체') {
			return setFilteredMessageRooms(messageRoom?.messageRooms);
		}

		if(messageFilter === '안 읽음') {
			const filteredRooms = messageRoom.messageRooms.filter((room: any) => {
				return room.isRead === false;
			})

			return setFilteredMessageRooms(filteredRooms);
		}

		if(messageFilter === '거래 중') {
			const filteredRooms = messageRoom?.messageRooms.filter((message: any) => {
				return message.commissionStatus !== '구매 확정' && message.commissionStatus !== null;
			})

			return setFilteredMessageRooms(filteredRooms);
		}
	};

	useEffect(() => {
		if(!messageRoom) {
			return;
		}
		filterMessageRooms();
	}, [messageRoom, messageFilter]);

	return(
		<S.Wrapper>
			<S.Content>
				<S.MessageSection>
					<S.SearchBox>
						<Selector type='messageState' placeholder='전체' setSelectorValue={setMessageFilter} size='7rem' />
					</S.SearchBox>

					<S.MessageBox>
						{ filteredMessageRooms.length > 0 ?
							<>
								{ filteredMessageRooms.map((room: any) => {
										return <MessageRoomItem message={room} key={room.id}/>
								})}
							</>
							:
							<S.CenterBox>
								메세지 0건
							</S.CenterBox>
						}
					</S.MessageBox>
				</S.MessageSection>

				<S.ChatSection>
					<S.TitleBox>
						<S.FlexColumnBox>
							<S.FlexRow>
								<Text type='common'>Username</Text>
								<StarIcon size={17} />
							</S.FlexRow>

							<S.FlexRow>
								<Text type='label'>메모 없음</Text>
								<PencilIcon size={16} />
							</S.FlexRow>
						</S.FlexColumnBox>

						<ExitIcon size={24} />
					</S.TitleBox>

					<S.Box>
						<S.ChatBox>
							{ messageRoom ?
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
				</S.ChatSection>
			</S.Content>
		</S.Wrapper>
	)
}