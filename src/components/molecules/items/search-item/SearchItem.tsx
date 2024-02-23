import * as S from '@/components/molecules/items/search-item/SearchItem.styled';

import type { TSearchItem } from '@/components/organisms/search-item-list/SearchItemList';

import { Text } from '@/components';

type Props = {
	type: TSearchItem;
	content: {
		title: string,
		summary?: string,
		count?: number,
	}
};

export default function SearchItem({ type, content }: Props) {
	return(
		<S.Wrapper type={type}>
			{ (type === 'category' || type === 'tag') &&
				<>
					<Text size='bodyMedium'>
						{content.title}
					</Text>
					<Text size='label'>
						{content.count}
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