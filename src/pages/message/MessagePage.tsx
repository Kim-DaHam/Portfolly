import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as S from '@/pages/message/MessagePage.styled';

import { useMessageRoomQuery } from "@/utils";

import { MessageRoom, MessageRoomList, Text } from '@/components';

export default function MessagePage() {
	const urlParams = new URL(window.location.href).searchParams;
	const partnerId = urlParams.get('partner_id') || '';

	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { data: message } = useMessageRoomQuery(partnerId);

	useEffect(() => {
		if(message && message.messageRooms.length > 0 && !partnerId) {
			navigate(`/messages?partner_id=${message.partner.id}`);
			queryClient.removeQueries({queryKey: ['messages']});
		}
	}, [message]);

	console.log(message)

	if(!message) return null;

	return(
		<S.Wrapper>
			<S.Content>
				<MessageRoomList messageRooms={message?.messageRooms}/>

				{ message?.messageRooms.length > 0 ?
					<MessageRoom message={message} />
					:
					<S.NotificationBox>
						<Text size='label'>
							아직 메세지가 없어요.
						</Text>
						<Text size='bodyMedium' color='gray'>
							Portfolly에서 원하는 전문가와 대화할 수 있어요.
							<br/>
							지금 바로 시작해보세요!
						</Text>
					</S.NotificationBox>
				}
			</S.Content>
		</S.Wrapper>
	)
}