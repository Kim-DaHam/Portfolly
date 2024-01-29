import { useForm } from "react-hook-form";
import { BiPencil as PencilIcon } from "react-icons/bi";
import { FiSearch as SearchIcon, FiStar as StarIcon } from
"react-icons/fi";
import { RxExit as ExitIcon } from "react-icons/rx";

import { Button, Profile, Selector, Text } from '@/components';
import * as S from '@/pages/message/MessagePage.styled';

export type FormValues = {
	content: string;
};

const defaultValues: FormValues = {
	content: '',
};

export default function MessagePage() {
	const { register, reset, handleSubmit, setValue } = useForm<FormValues>({
		mode: 'onSubmit',
		defaultValues: defaultValues,
	});

	return(
		<S.Wrapper>
			<S.Content>
				<S.MessageSection>
					<S.SearchBox>
						<Selector type='messageState' placeholder='전체' setValue={setValue} size='7rem' />
						<SearchIcon size={20} />
					</S.SearchBox>

					<S.MessageBox>
						{ true && // 메세지 목록 없으면
							<>메세지 0건</>
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