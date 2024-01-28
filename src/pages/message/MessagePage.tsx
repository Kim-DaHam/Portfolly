import { Button } from '@/components';
import * as S from '@/pages/message/MessagePage.styled';

export default function MessagePage() {
	return(
		<S.Wrapper>
			<S.Content>
				<S.MessageSection>
					<S.SearchBox>

					</S.SearchBox>

					<S.MessageBox>

					</S.MessageBox>
				</S.MessageSection>

				<S.ChatSection>
					<S.UserNameBox>

					</S.UserNameBox>

					<S.ChatBox>
						{/* 채팅 화면, 유저 프로필 */}
					</S.ChatBox>

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