import { Pagination, PortfolioItem } from "@/components";
import * as S from "@/components/organisms/profile-description/portfolio-list/PortfolioList.styled";

type Props = {
	user: any;
}

export default function PortfolioList({user}: Props) {
	return(
		<S.Wrapper>
			<S.GridBox>
				{ user.portfolios.map((portfolio: any) => {
					return <PortfolioItem portfolio={portfolio} key={portfolio.id} />
				})}
			</S.GridBox>

			<Pagination/>
		</S.Wrapper>
	)
}