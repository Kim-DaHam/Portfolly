import * as S from '@/pages/message/MessagePage.styled';

import { usePageErrorAlert } from "@/hooks";
import { useMessageRoomQuery } from "@/utils";

import { MessageRoom, MessageRoomList, Text } from '@/components';

export default function MessagePage() {
	const urlParams = new URL(window.location.href).searchParams;
	const partnerId = urlParams.get('partner_id');

	const { data: messageRoom, isError } = useMessageRoomQuery(partnerId);
	usePageErrorAlert(isError);

	console.log(messageRoom)

	return(
		<S.Wrapper>
			<S.Content>
				<MessageRoomList messageRoomList={messageRoom?.messageRoomList}/>

				{ messageRoom?.messageRoom ?
					<MessageRoom
						messageRoom={messageRoom.messageRoom}
					/>
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