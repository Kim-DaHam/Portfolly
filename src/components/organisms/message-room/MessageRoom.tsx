import { Text, Profile, Message } from '@/components';
import * as S from '@/components/organisms/message-room/MessageRoom.styled';

type Props = {
	message: any;
}

export default function MessageRoom({ message }: Props) {
	return (
		<S.Wrapper>
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
		</S.Wrapper>
	)
}