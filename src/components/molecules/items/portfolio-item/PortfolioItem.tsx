import { Image, Text } from "@/components";
import * as S from '@/components/molecules/items/portfolio-item/PortfolioItem.styled';
import { Portfolio } from "@/types";

type Props = {
	portfolio: Portfolio;
};

export default function PortfolioItem({portfolio}: Props) {
	return(
		<S.Wrapper>
			<S.Thumbnail>
				<Image src="" alt="" size='5rem'/>
			</S.Thumbnail>

			<S.Box>
				<Text type='common'>Title</Text>
				<Text type='small'>Date</Text>
			</S.Box>
		</S.Wrapper>
	)
}