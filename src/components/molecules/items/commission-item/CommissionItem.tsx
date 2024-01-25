import React, { HTMLAttributes, useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, CommissionModal, Rating, ReviewItem, Text } from '@/components';
import * as S from '@/components/molecules/items/commission-item/CommissionItem.styled';
import { useModal } from '@/hooks';
import { authority } from '@/redux/loginSlice';
import { eventStopPropagation, toLocalDataString } from '@/utils';

type Props = HTMLAttributes<HTMLDivElement> & {
	commission: any;
	index: number;
};

export default function CommissionItem({ commission, index }: Props) {
	const [isReviewOpen, setIsReviewOpen] = useState(false);

	const auth = useSelector(authority);
	const { handleModal, isModalOpen } = useModal();

	const handleReviewButton = (event: React.MouseEvent) => {
		eventStopPropagation(event);
		setIsReviewOpen(prev => !prev);
	};

	return (
		<S.Wrapper>
			<S.Content onClick={handleModal}>
				<Text type='small'>{index}</Text>
				<S.Box>
					<Text type='common'>{commission.details.title}</Text>
					<Text type='small'>{commission.client.nickname}</Text>
					<Text type='small'>{toLocalDataString(new Date(commission.createdAt))}</Text>
				</S.Box>
				{ commission.review &&
					<Button color='gray' onClick={handleReviewButton}>
						{isReviewOpen ? '리뷰 닫기' : '리뷰 확인'}
					</Button>
				}
				{ auth === 'client' && !commission.review && !isReviewOpen &&
					<Button color='gray' onClick={handleReviewButton}>리뷰 작성</Button>
				}
			</S.Content>

			{ isModalOpen &&
				<CommissionModal commission={commission} handleModal={handleModal} />
			}

			{ isReviewOpen && auth === 'expert' &&
				<S.ReviewBox>
					<ReviewItem review={commission.review}/>
				</S.ReviewBox>
			}

			{ isReviewOpen && auth === 'client' &&
				<S.ReviewBox>
					<S.Form>
						<Rating />
						<S.TextArea />

						<S.ButtonBox>
							<Button color='gray'>등록하기</Button>
						</S.ButtonBox>
					</S.Form>
				</S.ReviewBox>
			}
		</S.Wrapper>
	)
}