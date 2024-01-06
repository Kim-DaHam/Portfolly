import { useState } from "react";
import { useSelector } from "react-redux";

import { GridBox } from "./PortfolioList.styled";

import PortfolioItem from "@/components/organisms/portfolio-list/portfolio-item/PortfolioItem";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { section } from "@/redux/sectionSlice";
import { Portfolio } from "@/types/portfolio";
import { usePortfoliosQuery } from "@/utils/api-service/portfolio";

const LOADED_DATA_COUNT = 10;
const LIMIT = 100;

type Props = {
	category: string;
}

export default function PortfolioList({category}: Props) {
	const [lastPage, setLastPage] = useState(LOADED_DATA_COUNT);
	const [loadNextPage, setLoadNextPage] = useState(true);

	const currentSection = useSelector(section);

	const { data: portfolios } = usePortfoliosQuery(LIMIT, currentSection, { filterKey: 'category', filterValue: category});

	const loadNewPortfolios = ()=> {
		if(lastPage === LIMIT) {
			setLoadNextPage(false);
		}
		setLastPage(prev=>prev + LOADED_DATA_COUNT);
	}

	const setObservationTarget = useIntersectionObserver(loadNewPortfolios);

	return (
		<GridBox>
			{ portfolios && portfolios.map((portfolio: Portfolio, index: number)=>{
				if(index < lastPage) {
					return(
						<PortfolioItem key={portfolio.id} portfolio={portfolio}/>
					)
				}})
			}
			{ loadNextPage &&
				<div ref={setObservationTarget}></div>
			}
		</GridBox>
	)
}