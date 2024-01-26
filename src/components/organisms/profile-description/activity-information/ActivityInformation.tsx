import { useSelector } from "react-redux";

import { Text } from "@/components";
import * as S from "@/components/organisms/profile-description/activity-information/ActivityInformation.styled";
import { authority } from "@/redux/loginSlice";

type Props = {
	auth: 'expert' | 'client';
	activity: any;
};

export default function ActivityInformation({ auth, activity }: Props) {

	return(
		<S.Wrapper>
			<Text type='common'>활동 정보</Text>
			<S.Box>
				<S.Group>
					<Text type='label'>총 작업 수</Text>
					<Text type='common'>{activity.commissions.length}</Text>
				</S.Group>

				{ auth === 'expert' &&
					<S.Group>
						<Text type='label'>만족도</Text>
						<Text type='common'>{activity.score}%</Text>
					</S.Group>
				}

				<S.Group>
					<Text type='label'>연락 가능 시간</Text>
					<Text type='common'>{activity.contactTime}</Text>
				</S.Group>
			</S.Box>
		</S.Wrapper>
	)
}