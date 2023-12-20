import { Heading as Count } from "@/styles/Text.styled";
import { Box, BoxGroup, TrackingLayout } from "./Tracking.styled";

export function Tracking() {
	return (
		<TrackingLayout>
			<BoxGroup>
				<Box>
					<LabelGroup>
						<div>아이콘</div>
						<Text size='Medium'>진행중</Text>
					</LabelGroup>
					<Count size='Small'>0</Count>
				</Box>

				<Box>
					<LabelGroup>
						<div>아이콘</div>
						<Text size='Medium'>진행중</Text>
					</LabelGroup>
					<Count size='Small'>0</Count>
				</Box>

				<Box>
					<LabelGroup>
						<div>아이콘</div>
						<Text size='Medium'>진행중</Text>
					</LabelGroup>
					<Count size='Small'>0</Count>
				</Box>

				<Box>
					<TextGroup>
						<Text size='Medium'>구매 확정</Text>
						<Text size='Medium'>0</Text>
					</TextGroup>

					<TextGroup>
						<Text size='Medium'>작성 가능한 리뷰</Text>
						<Text size='Medium'>0</Text>
					</TextGroup>

					<TextGroup>
						<Text size='Medium'>주문 취소</Text>
						<Text size='Medium'>0</Text>
					</TextGroup>
				</Box>
			</BoxGroup>
		</TrackingLayout>
	);
}
