import { Image, Text } from "@/components";
import * as S from '@/components/molecules/items/portfolio-item/PortfolioItem.styled';

type Props = {
	portfolio: any;
};

export default function PortfolioItem({portfolio}: Props) {
	return(
		<S.Wrapper>
			<Image src={portfolio.image} alt={portfolio.title} size='100%' shape='foursquare' />

			<S.Box>
				<Text type='common'>{portfolio.title}</Text>
				<Text type='small'>{portfolio.summary}</Text>
			</S.Box>
		</S.Wrapper>
	)
}