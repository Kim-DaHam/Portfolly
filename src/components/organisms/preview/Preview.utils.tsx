import PortfolioItem from "../portfolio-item/PortfolioItem";

import { Portfolio, Section } from "@/types/portfolio";

export const renderPortfolioItems = (section: Section, portfolios: Portfolio[], count: number)=> {
	const portfolioItems = [];

	for(let i=0; i < count; i++) {
		portfolioItems.push(
			<PortfolioItem section={section} key={i} portfolio={portfolios[i]}/>
		)
	}

	return portfolioItems;
};