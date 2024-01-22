import { useEffect, useState } from "react";

import { Pagination, PortfolioItem } from "@/components";
import * as S from "@/components/organisms/profile-description/portfolio-list/PortfolioList.styled";

type Props = {
	portfolios: any[];
}

const PAGE_SHOW = 12;

export default function PortfolioList({portfolios}: Props) {
	const [page, setPage] = useState(1);

	useEffect(() => {
		const params = new URL(window.location.href).searchParams;
		const page = params.get('page') as string;
		setPage(Number(page));
	}, []);

	return(
		<S.Wrapper>
			<S.GridBox>
				{ portfolios.map((portfolio: any, index: number) => {
					const isRangeOfPage = index >= (page - 1) * PAGE_SHOW && index < page * PAGE_SHOW;

					if(isRangeOfPage) {
						return <PortfolioItem portfolio={portfolio} key={portfolio.id} />
					}
				})}
			</S.GridBox>

			<Pagination handlePage={setPage} count={portfolios.length} pageShow={PAGE_SHOW}/>
		</S.Wrapper>
	)
}