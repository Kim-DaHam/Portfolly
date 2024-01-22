import { Link } from "react-router-dom";

import { Image, Text } from "@/components";
import * as S from '@/components/molecules/items/portfolio-item/PortfolioItem.styled';

type Props = {
	portfolio: any;
};

export default function PortfolioItem({portfolio}: Props) {
	return(
		<S.Wrapper>
			<Link to={`/portfolios/${portfolio.id}`}>
				<Image
					src={portfolio.image}
					alt={portfolio.title}
					size='100%'
					shape='foursquare'
				/>
			</Link>

			<S.Box>
				<Link to={`/portfolios/${portfolio.id}`}>
					<Text type='common'>{portfolio.title}</Text>
				</Link>
				<Text type='small'>{portfolio.summary}</Text>
			</S.Box>
		</S.Wrapper>
	)
}