import React, { HTMLAttributes, useState } from 'react';
import { useSelector } from 'react-redux';

import * as S from '@/components/molecules/items/commission-item/CommissionItem.styled';
import { userState } from '@/redux/loginSlice';

import { useModal } from '@/hooks';
import { eventStopPropagation, toLocalDateString } from '@/utils';

import { Button, CommissionModal, ReviewForm, ReviewItem, Text } from '@/components';

type Props = HTMLAttributes<HTMLDivElement> & {
	commission: any;
	index: number;
};

export default function CommissionItem({ commission, index }: Props) {
	const [isReviewOpen, setIsReviewOpen] = useState(false);

	const { authority } = useSelector(userState);

	const { handleModal, isModalOpen } = useModal();

	const handleReviewButton = (event: React.MouseEvent) => {
		eventStopPropagation(event);
		setIsReviewOpen(prev => !prev);
	};

	return (
		<S.Wrapper>
			<S.Content onClick={handleModal}>
				<Text size='bodySmall'>{index}</Text>
				<S.Box>
					<Text size='bodyMedium'>{commission.details.title}</Text>
					<Text size='bodySmall'>{commission.client.nickname}</Text>
					<Text size='bodySmall'>{toLocalDateString(new Date(commission.createdAt))}</Text>
				</S.Box>
				{ authority === 'expert' && commission.review &&
					<Button color='gray' onClick={handleReviewButton}>
						{isReviewOpen ? '리뷰 닫기' : '리뷰 확인'}
					</Button>
				}
				{ !isReviewOpen && authority === 'client' && !commission.review &&
					<Button color='gray' onClick={handleReviewButton}>리뷰 작성</Button>
				}
			</S.Content>

			{ isModalOpen &&
				<CommissionModal commission={commission} handleModal={handleModal} />
			}

			{ isReviewOpen && authority === 'expert' &&
				<S.ReviewBox>
					<ReviewItem review={commission.review}/>
				</S.ReviewBox>
			}

			{ isReviewOpen && authority === 'client' && !commission.review &&
				<ReviewForm handleReviewOpen={setIsReviewOpen} commission={commission} />
			}
		</S.Wrapper>
	)
}