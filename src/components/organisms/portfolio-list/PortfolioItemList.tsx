import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "@/components/organisms/portfolio-list/PortfolioItemList.styled";
import { section } from "@/redux/sectionSlice";
import { Portfolio } from "@/types";

import { useIntersectionObserver } from "@/hooks";
import { usePortfoliosQuery } from "@/utils";

import { PortfolioCard, Text } from "@/components";

type Props = {
	category: string;
};

const ITEMS_PER_SHOW = 10;
export const SESSION_STORAGE_KEY = "lastClickedPortfolio";

export default function PortfolioItemList({category}: Props) {
	const [count, setCount] = useState(ITEMS_PER_SHOW);
	const [loadData, setLoadData] = useState(true);

	const currentSection = useSelector(section);

	const {
		data: portfolios,
		fetchNextPage, hasNextPage
} = usePortfoliosQuery(
		currentSection,
		{
			filterKey: 'category',
			filterValue: category
		}
	);

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
		setCount(prev => prev + ITEMS_PER_SHOW);
	}

	const setObservationTarget = useIntersectionObserver(loadNextPage);

	const saveScroll = (index: number) => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({
      anchorPosition: window.pageYOffset,
      clickedPortfolioIndex: index,
    }));
  };

	useEffect(() => {
		const getStorage = sessionStorage.getItem(SESSION_STORAGE_KEY);
		if(!getStorage) return;

		const { anchorPosition } = JSON.parse(getStorage);

		setTimeout(() => {
      window.scrollTo({
        top: anchorPosition,
      });

    }, 1000);
		return () => sessionStorage.removeItem(SESSION_STORAGE_KEY);
	}, []);

	return (
		<S.GridBox>
			{ portfolios && portfolios.length > 0 ?
				portfolios.map((portfolio: Portfolio, index: number)=>{
					if(index < count) {
						return(
							<PortfolioCard key={index} portfolio={portfolio} onClick={()=>saveScroll(++index)}/>
						)
				}})
				:
				<S.Notification>
					<Text size='bodyLarge' color='lightgray'>
						해당하는 아이템이 없습니다.
					</Text>
				</S.Notification>
			}
			{ loadData &&
				<div ref={setObservationTarget}></div>
			}
		</S.GridBox>
	)
}