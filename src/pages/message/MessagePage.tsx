import { useQueryClient, useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ErrorBoundary as ApiErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

import * as S from '@/pages/message/MessagePage.styled';
import { MessageRoom as TMessageRoom } from "@/types";

import { usePageErrorAlert } from "@/hooks";
import { useMessageRoomMutation, useMessageRoomQuery } from "@/utils";

import { ApiErrorFallback, MessageRoom, MessageRoomList, Text } from '@/components';

export default function MessagePage() {
	const urlParams = new URL(window.location.href).searchParams;
	const roomId = urlParams.get('room_id') as string;
	const partnerId = urlParams.get('partner_id') as string;
	const portfolioId = urlParams.get('portfolio_id') as string;

	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { reset } = useQueryErrorResetBoundary();
	const { data: messageRoom, isError } = useMessageRoomQuery(roomId);
	usePageErrorAlert(isError);

	const messageRoomMutation = useMessageRoomMutation(partnerId, portfolioId);

	useEffect(() => {
		if(roomId) return;
		const messageRoomList: TMessageRoom[] = queryClient.getQueryData(["messageRoom","list"])!;
		const room = messageRoomList?.find((room: TMessageRoom) => room.partner!.id === partnerId);

		if(!messageRoomList) return;
		if(room) {
			navigate(`/messages?room_id=${room.id}`);
			return;
		}
		messageRoomMutation.mutate();
	}, [messageRoom]);

	return(
		<S.Wrapper>
			<S.Content>
				<S.MessageSection>
					<ApiErrorBoundary FallbackComponent={ApiErrorFallback} onReset={reset}>
						<MessageRoomList />
					</ApiErrorBoundary>
				</S.MessageSection>

					{ messageRoom?
						<MessageRoom
							messageRoom={messageRoom}
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