import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { PortfolioItem } from "@/components";
import * as S from "@/components/organisms/portfolio-list/PortfolioItemList.styled";
import { useIntersectionObserver } from "@/hooks";
import { section } from "@/redux/sectionSlice";
import { Portfolio } from "@/types";
import { usePortfoliosQuery } from "@/utils";

type Props = {
	category: string;
}

const ITEMS_PER_PAGE = 10;
export const SESSIONSTORAGE_KEY = "lastClickedPortfolio";

export default function PortfolioItemList({category}: Props) {
	const [count, setCount] = useState(ITEMS_PER_PAGE);
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
		setCount(prev => prev + ITEMS_PER_PAGE);
	}

	const setObservationTarget = useIntersectionObserver(loadNextPage);

	const saveScroll = (index: number) => {
    sessionStorage.setItem(SESSIONSTORAGE_KEY, JSON.stringify({
      anchorPosition: window.pageYOffset,
      clickedPortfolioIndex: index,
    }));
  };

	useEffect(() => {
		const getStorage = sessionStorage.getItem(SESSIONSTORAGE_KEY);
		if(!getStorage) return;

		const { anchorPosition } = JSON.parse(getStorage);

		setTimeout(() => {
      window.scrollTo({
        top: anchorPosition,
      });

    }, 1000);
		return () => sessionStorage.removeItem(SESSIONSTORAGE_KEY);
	}, []);

	return (
		<S.GridBox>
			{ portfolios && portfolios.map((portfolio: Portfolio, index: number)=>{
				if(index < count) {
					return(
						<PortfolioItem key={index} portfolio={portfolio} onClick={()=>saveScroll(++index)}/>
					)
				}})
			}
			{ loadData &&
				<div ref={setObservationTarget}></div>
			}
		</S.GridBox>
	)
}