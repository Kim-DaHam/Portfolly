import * as S from '@/components/molecules/items/search-item/SearchItem.styled';

import { Text } from '@/components';

type Props = {
	type: 'filter' | 'keyword';
};

export default function SearchItem({ type }: Props) {
	return(
		<S.Wrapper type={type}>
			{ type === 'filter' &&
				<>
					<Text size='bodyMedium'>
						category
					</Text>
					<Text size='label'>
						0
					</Text>
				</>
			}

			{ type === 'keyword' &&
				<S.FlexBox>
					<Text size='bodyMedium'>
						keyword
					</Text>
					<Text size='label'>
						summary
					</Text>
				</S.FlexBox>
			}
		</S.Wrapper>
	)
}