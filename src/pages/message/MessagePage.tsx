import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { MessageRoom, MessageRoomList } from '@/components';
import * as S from '@/pages/message/MessagePage.styled';
import { useMessageRoomQuery } from "@/utils";

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

	return(
		<S.Wrapper>
			<S.Content>
				{ message &&
					<MessageRoomList messageRooms={message.messageRooms}/>
				}

				{ message && message.messageRooms.length > 0 ?
					<MessageRoom message={message} />
					:
					<S.NotificationBox>
						여러분의 전문가와 대화를 시작하세요!
					</S.NotificationBox>
				}
			</S.Content>
		</S.Wrapper>
	)
}