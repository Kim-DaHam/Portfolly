import { Text } from "@/components";
import * as S from "@/components/organisms/profile-description/activity-information/ActivityInformation.styled";

export default function ActivityInformation() {
	return(
		<S.Wrapper>
			<Text type='label'>활동 정보</Text>
			<S.Box>
				<S.Group>
					<Text type='common'>총 작업 수</Text>
					<Text type='common'>0개</Text>
				</S.Group>

				<S.Group>
					<Text type='common'>만족도</Text>
					<Text type='common'>0%</Text>
				</S.Group>

				<S.Group>
					<Text type='common'>연락 가능 시간</Text>
					<Text type='common'>언제나 가능</Text>
				</S.Group>
			</S.Box>
		</S.Wrapper>
	)
}