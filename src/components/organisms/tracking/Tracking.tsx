import * as S from "@/components/organisms/tracking/Tracking.styled";
import { Heading as Count, Text } from "@/styles/Text.styled";

export default function Tracking() {
	return(
		<S.Wrapper>
			<S.Content>
				<S.Box>
					<S.LabelGroup>
						<div>아이콘</div>
						<Text size='Medium'>진행중</Text>
					</S.LabelGroup>
					<Count size='Small'>0</Count>
				</S.Box>

				<S.Box>
					<S.LabelGroup>
						<div>아이콘</div>
						<Text size='Medium'>진행중</Text>
					</S.LabelGroup>
					<Count size='Small'>0</Count>
				</S.Box>

				<S.Box>
					<S.LabelGroup>
						<div>아이콘</div>
						<Text size='Medium'>진행중</Text>
					</S.LabelGroup>
					<Count size='Small'>0</Count>
				</S.Box>

				<S.Box>
					<S.Group>
						<Text size='Medium'>구매 확정</Text>
						<Text size='Medium'>0</Text>
					</S.Group>

					<S.Group>
						<Text size='Medium'>작성 가능한 리뷰</Text>
						<Text size='Medium'>0</Text>
					</S.Group>

					<S.Group>
						<Text size='Medium'>주문 취소</Text>
						<Text size='Medium'>0</Text>
					</S.Group>
				</S.Box>
			</S.Content>
		</S.Wrapper>
	)
}