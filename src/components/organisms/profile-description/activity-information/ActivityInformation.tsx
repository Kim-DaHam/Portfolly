import * as S from "@/components/organisms/profile-description/activity-information/ActivityInformation.styled";

import { Text } from "@/components";

type Props = {
	auth: 'expert' | 'client';
	activity: any;
};

export default function ActivityInformation({ auth, activity }: Props) {

	return(
		<S.Wrapper>
			<Text size='bodyMedium'>활동 정보</Text>
			<S.Box>
				<S.Group>
					<Text size='label'>총 작업 수</Text>
					<Text size='bodyMedium'>{activity.commissions.length}</Text>
				</S.Group>

				{ auth === 'expert' &&
					<S.Group>
						<Text size='label'>만족도</Text>
						<Text size='bodyMedium'>{activity.score}%</Text>
					</S.Group>
				}

				<S.Group>
					<Text size='label'>연락 가능 시간</Text>
					<Text size='bodyMedium'>{activity.contactTime}</Text>
				</S.Group>
			</S.Box>
		</S.Wrapper>
	)
}