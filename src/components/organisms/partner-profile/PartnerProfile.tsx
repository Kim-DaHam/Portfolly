import { useSelector } from "react-redux";

import { Text, Button, Profile } from "@/components";
import * as S from "@/components/organisms/partner-profile/PartnerProfile.styled";
import { authority } from "@/redux/loginSlice";

type Props = {
	message: any;
};

export default function PartnerProfile({ message }: Props) {

	const auth = useSelector(authority);

	return(
		<S.Wrapper>
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

			{ message.commissionStatus === null && auth === 'expert' &&
				<Button color='black' size='full'>의뢰 폼 전송</Button>
			}

			{ message.commissionStatus !== null &&
				<Button color='gray' size='full'>의뢰 폼 확인</Button>
			}
		</S.Wrapper>
	)
}