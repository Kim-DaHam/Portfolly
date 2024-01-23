import { ProcessIcon, FolderIcon, CancelIcon } from '@/assets/images';
import { Image, Text } from "@/components";
import * as S from "@/components/organisms/tracking/Tracking.styled";

export default function Tracking() {
	return(
		<S.Wrapper>
			<S.Content>
				<S.Box>
					<S.LabelGroup>
						<Image src={ProcessIcon} size='2rem' />
						<Text type='common'>진행중</Text>
					</S.LabelGroup>
					<Text type='small'>0</Text>
				</S.Box>

				<S.Box>
					<S.LabelGroup>
						<Image src={FolderIcon} size='2rem' />
						<Text type='common'>작업물 도착</Text>
					</S.LabelGroup>
					<Text type='small'>0</Text>
				</S.Box>

				<S.Box>
					<S.LabelGroup>
						<Image src={CancelIcon} size='2rem' />
						<Text type='common'>취소 · 문제해결</Text>
					</S.LabelGroup>
					<Text type='small'>0</Text>
				</S.Box>

				<S.Box>
					<S.Group>
						<Text type='common'>구매 확정</Text>
						<Text type='common'>0</Text>
					</S.Group>

					<S.Group>
						<Text type='common'>작성 가능한 리뷰</Text>
						<Text type='common'>0</Text>
					</S.Group>

					<S.Group>
						<Text type='common'>주문 취소</Text>
						<Text type='common'>0</Text>
					</S.Group>
				</S.Box>
			</S.Content>
		</S.Wrapper>
	)
}