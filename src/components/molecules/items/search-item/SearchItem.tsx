import * as S from '@/components/molecules/items/search-item/SearchItem.styled';

type Props = {
	type: 'filter' | 'keyword';
};

export default function SearchItem({ type }: Props) {
	return(
		<S.Wrapper type={type}>

		</S.Wrapper>
	)
}