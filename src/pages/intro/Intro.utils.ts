import { portfolios } from "./IntroPage.constants";

import { Portfolio } from "@/mocks/data/portfolios";

export const separatePortfolioSection = (portfolioList: Portfolio[])=> {
	portfolioList?.map((portfolio: Portfolio)=>{
		if(portfolio.sectionId === 1) portfolios['Android/iOS'].push(portfolio);
		if(portfolio.sectionId === 2) portfolios['Web'].push(portfolio);
		if(portfolio.sectionId === 3) portfolios['Illustration'].push(portfolio);
		if(portfolio.sectionId === 4) portfolios['Photo'].push(portfolio);
		if(portfolio.sectionId === 5) portfolios['Video'].push(portfolio);
	});
}