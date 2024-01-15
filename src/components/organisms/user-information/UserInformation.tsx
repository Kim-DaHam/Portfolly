import * as S from "@/components/organisms/user-information/UserInformation.styled";
import { Label, Text } from "@/styles/Text.styled";

export default function UserInformation() {
	return(
		<S.Wrapper>
			<Label>활동 정보</Label>
			<S.Box>
				<S.Group>
					<Text size='Medium'>총 작업 수</Text>
					<Text size='Medium'>0개</Text>
				</S.Group>

				<S.Group>
					<Text size='Medium'>만족도</Text>
					<Text size='Medium'>0%</Text>
				</S.Group>

				<S.Group>
					<Text size='Medium'>연락 가능 시간</Text>
					<Text size='Medium'>언제나 가능</Text>
				</S.Group>
			</S.Box>
		</S.Wrapper>
	)
}