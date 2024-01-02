import { useState } from "react";

import PortfolioItem from "../portfolio-item/PortfolioItem";

import { GridBox, GridItem } from "./PortfolioList.styled";

import PortfolioProfile from "@/components/molecules/profile/portfolio-profile/PortfolioProfile";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { Portfolio, Section } from "@/types/portfolio";
import { usePortfoliosQuery } from "@/utils/api-service/portfolio";

const LOADED_DATA_COUNT = 10;
const LIMIT = 100;

type Props = {
	currentSection: Section;
	category: string;
}

function PortfolioList({currentSection, category}: Props) {
	const [lastPage, setLastPage] = useState(LOADED_DATA_COUNT);
	const [loadNextPage, setLoadNextPage] = useState(true);

	const { data } = usePortfoliosQuery(LIMIT, currentSection, { filterKey: 'category', filterValue: category});
	const portfolios = data;

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
						<GridItem key={portfolio.id}>
							<PortfolioItem type={currentSection} portfolio={portfolio}/>
							<PortfolioProfile portfolio={portfolio}/>
						</GridItem>
					)
				}})
			}
			{ loadNextPage &&
				<div ref={setObservationTarget}></div>
			}
		</GridBox>
	)
}

export default PortfolioList;