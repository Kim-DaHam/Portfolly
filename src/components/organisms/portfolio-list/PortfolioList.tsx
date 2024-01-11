import { useState } from "react";
import { useSelector } from "react-redux";

import { GridBox } from "./PortfolioList.styled";

import PortfolioItem from "@/components/molecules/portfolio-item/PortfolioItem";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { section } from "@/redux/sectionSlice";
import { Portfolio } from "@/types/portfolio";
import { usePortfoliosQuery } from "@/utils/api-service/portfolio";

type Props = {
	category: string;
}

export default function PortfolioList({category}: Props) {
	const [count, setCount] = useState(10);
	const [loadData, setLoadData] = useState(true);

	const currentSection = useSelector(section);

	const { data: portfolios, fetchNextPage, hasNextPage } = usePortfoliosQuery(currentSection, { filterKey: 'category', filterValue: category});

	const loadNextPage = () => {
		const allPortfoliosCount = portfolios ? portfolios.length : 0;
		const isOnePageLoaded = (count === allPortfoliosCount) ? true : false;

		if(isOnePageLoaded && !hasNextPage) {
			setLoadData(false);
			return;
		}

		if(isOnePageLoaded && hasNextPage) {
			fetchNextPage();
		}
		setCount(prev => prev + 10);
	}

	const setObservationTarget = useIntersectionObserver(loadNextPage);

	return (
		<GridBox>
			{ portfolios && portfolios.map((portfolio: Portfolio, index: number)=>{
				if(index < count) {
					return(
						<PortfolioItem key={portfolio.id} portfolio={portfolio}/>
					)
				}})
			}
			{ loadData &&
				<div ref={setObservationTarget}></div>
			}
		</GridBox>
	)
}