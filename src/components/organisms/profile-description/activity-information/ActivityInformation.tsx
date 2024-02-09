import * as S from "@/components/organisms/profile-description/activity-information/ActivityInformation.styled";

import type { UserProfile } from "@/types";

import { Text } from "@/components";

type Props = {
	auth: 'expert' | 'client';
	activity: UserProfile;
	commissionCount: number;
};

export default function ActivityInformation({ auth, activity, commissionCount }: Props) {

	return(
		<S.Wrapper>
			<S.Box>
				<S.Group>
					<Text size='label'>총 작업 수</Text>
					<Text size='bodyMedium'>
						{commissionCount}
					</Text>
				</S.Group>

				{ auth === 'expert' &&
					<S.Group>
						<Text size='label'>만족도</Text>
						<Text size='bodyMedium'>
							{activity?.score}%
						</Text>
					</S.Group>
				}

				<S.Group>
					<Text size='label'>연락 가능 시간</Text>
					<Text size='bodyMedium'>
						{activity?.contactTime}
					</Text>
				</S.Group>
			</S.Box>
		</S.Wrapper>
	)
}