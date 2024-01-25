import { HTMLAttributes } from 'react';
import { useSelector } from 'react-redux';

import { Button, Text } from '@/components';
import * as S from '@/components/molecules/items/commission-item/CommissionItem.styled';
import { authority } from '@/redux/loginSlice';
import { toLocalDataString } from '@/utils';

type Props = HTMLAttributes<HTMLDivElement> & {
	commission: any;
	index: number;
};

export default function CommissionItem({ commission, index }: Props) {

	const auth = useSelector(authority);

	return (
		<S.Wrapper>
			<Text type='small'>{index}</Text>
			<S.Box>
				<Text type='common'>{commission.details.title}</Text>
				<Text type='small'>{commission.client.nickname}</Text>
				<Text type='small'>{toLocalDataString(new Date(commission.createdAt))}</Text>
			</S.Box>
			{ commission.review &&
				<Button color='gray' shape='square'>리뷰 확인</Button>
			}
			{ auth === 'client' && !commission.review &&
				<Button color='gray' shape='square'>리뷰 작성</Button>
			}
		</S.Wrapper>
	)
}