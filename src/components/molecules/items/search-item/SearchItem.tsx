import { HTMLAttributes } from "react";
import { FiPlus as PlusIcon} from "react-icons/fi";

import * as S from '@/components/molecules/items/search-item/SearchItem.styled';

import type { TSearchItem } from '@/components/organisms/search-item-list/SearchItemList';

import { Image, Text } from '@/components';

type Props = HTMLAttributes<HTMLDivElement> & {
	$type: TSearchItem;
	$content: {
		title: string,
		summary?: string,
		count?: number,
		thumbnail?: string,
	}
};

export default function SearchItem({ $type, $content, ...attributes }: Props) {
	return(
		<S.Wrapper $type={$type} {...attributes}>
			{ ($type === 'category' || $type === 'tag') &&
				<>
					<Text size='bodyMedium'>
						{$content.title}
					</Text>
					<Text size='label'>
						{$content.count}
					</Text>
				</>
			}

			{ $type === 'keyword' &&
				<>
					{	$content.thumbnail ?
						<Image
							src={$content.thumbnail!}
							alt='portfolio-thumbnail'
							size='2.5rem'
							shape='foursquare'
						/>
						:
						<S.IconBox>
							<PlusIcon size={18} />
						</S.IconBox>
					}
					<S.TextBox>
						<Text size='bodyMedium'>
							{$content.title}
						</Text>
						<Text size='label'>
							{$content.summary}
						</Text>
					</S.TextBox>
				</>
			}
		</S.Wrapper>
	)
}