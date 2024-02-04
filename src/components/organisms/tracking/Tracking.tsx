import { useSelector } from 'react-redux';

import { ProcessIcon, FolderIcon, CancelIcon } from '@/assets/images';
import * as S from "@/components/organisms/tracking/Tracking.styled";
import { userState } from '@/redux/loginSlice';

import { countCommissionStatus } from './Tracking.helpers';

import { Image, Text } from "@/components";

type Props = {
	commissions: any;
};

export default function Tracking({ commissions }: Props) {
	const commissionsStatus = countCommissionStatus(commissions);

	const { authority } = useSelector(userState);

	return(
		<S.Wrapper>
			<S.Content>
				<S.Box>
					<S.LabelGroup>
						<Image src={ProcessIcon} size='2rem' />
						<Text size='bodyMedium'>진행 중</Text>
					</S.LabelGroup>
					<Text size='titleSmall'>{commissionsStatus['진행 중']}</Text>
				</S.Box>

				<S.Box>
					<S.LabelGroup>
						<Image src={FolderIcon} size='2rem' />
						<Text size='bodyMedium'>작업물 도착</Text>
					</S.LabelGroup>
					<Text size='titleSmall'>{commissionsStatus['작업물 도착']}</Text>
				</S.Box>

				<S.Box>
					<S.LabelGroup>
						<Image src={CancelIcon} size='2rem' />
						<Text size='bodyMedium'>취소 · 문제해결</Text>
					</S.LabelGroup>
					<Text size='titleSmall'>{commissionsStatus['취소/문제해결']}</Text>
				</S.Box>

				<S.Box>
					<S.Group>
						<Text size='bodyMedium'>구매 확정</Text>
						<Text size='bodyMedium'>{commissionsStatus['구매 확정']}</Text>
					</S.Group>

					{ authority === 'expert' ?
						<S.Group>
							<Text size='bodyMedium'>작성된 리뷰</Text>
							<Text size='bodyMedium'>{commissionsStatus['작성된 리뷰']}</Text>
						</S.Group>
						:
						<S.Group>
							<Text size='bodyMedium'>작성 가능한 리뷰</Text>
							<Text size='bodyMedium'>{commissionsStatus['작성 가능한 리뷰']}</Text>
						</S.Group>
					}

					<S.Group>
						<Text size='bodyMedium'>주문 취소</Text>
						<Text size='bodyMedium'>{commissionsStatus['주문 취소']}</Text>
					</S.Group>
				</S.Box>
			</S.Content>
		</S.Wrapper>
	)
}