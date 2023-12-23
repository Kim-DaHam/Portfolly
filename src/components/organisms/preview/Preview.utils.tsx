import PortfolioItem from "../portfolio-item/PortfolioItem";

import { Portfolio } from "@/mocks/data/portfolios";
import { Section } from "@/types/portfolio";

export const renderPortfolioItems = (section: Section, portfolios: Portfolio[], count: number)=> {
	const portfolioItems = [];

	for(let i=0; i < count; i++) {
		portfolioItems.push(
			<PortfolioItem type={section} key={i} portfolio={portfolios[i]}/>
		)
	}

	return portfolioItems;
};