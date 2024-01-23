import { useSelector } from 'react-redux';

import { countCommissionState } from './Tracking.helpers';

import { ProcessIcon, FolderIcon, CancelIcon } from '@/assets/images';
import { Image, Text } from "@/components";
import * as S from "@/components/organisms/tracking/Tracking.styled";
import { authority } from '@/redux/loginSlice';

type Props = {
	commissions: any;
};

export default function Tracking({ commissions }: Props) {
	const commissionsState = countCommissionState(commissions);

	const auth = useSelector(authority);

	return(
		<S.Wrapper>
			<S.Content>
				<S.Box>
					<S.LabelGroup>
						<Image src={ProcessIcon} size='2rem' />
						<Text type='common'>진행 중</Text>
					</S.LabelGroup>
					<Text type='titleSmall'>{commissionsState['진행 중']}</Text>
				</S.Box>

				<S.Box>
					<S.LabelGroup>
						<Image src={FolderIcon} size='2rem' />
						<Text type='common'>작업물 도착</Text>
					</S.LabelGroup>
					<Text type='titleSmall'>{commissionsState['작업물 도착']}</Text>
				</S.Box>

				<S.Box>
					<S.LabelGroup>
						<Image src={CancelIcon} size='2rem' />
						<Text type='common'>취소 · 문제해결</Text>
					</S.LabelGroup>
					<Text type='titleSmall'>{commissionsState['취소/문제해결']}</Text>
				</S.Box>

				<S.Box>
					<S.Group>
						<Text type='common'>구매 확정</Text>
						<Text type='common'>{commissionsState['구매 확정']}</Text>
					</S.Group>

					{ auth === 'expert' ?
						<S.Group>
							<Text type='common'>작성된 리뷰</Text>
							<Text type='common'>{commissionsState['작성된 리뷰']}</Text>
						</S.Group>
						:
						<S.Group>
							<Text type='common'>작성 가능한 리뷰</Text>
							<Text type='common'>{commissionsState['작성 가능한 리뷰']}</Text>
						</S.Group>
					}

					<S.Group>
						<Text type='common'>주문 취소</Text>
						<Text type='common'>{commissionsState['주문 취소']}</Text>
					</S.Group>
				</S.Box>
			</S.Content>
		</S.Wrapper>
	)
}