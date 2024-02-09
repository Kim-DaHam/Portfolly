import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "@/components/organisms/portfolio-list/PortfolioItemList.styled";
import { section } from "@/redux/sectionSlice";

import type { Portfolio } from "@/types";

import { useIntersectionObserver } from "@/hooks";
import { usePortfoliosQuery } from "@/utils";

import { PortfolioCard, Text } from "@/components";

type Props = {
	category: string;
};

const ITEMS_PER_SHOW = 6;

export const SESSION_STORAGE_KEY = "lastClickedPortfolio";

export default function PortfolioItemList({ category }: Props) {
	const [showsNum, setShowsNum] = useState<number>(ITEMS_PER_SHOW);

	const currentSection = useSelector(section);

	const {
		data: portfolios,
		fetchNextPage,
		hasNextPage,
	} = usePortfoliosQuery(
		currentSection,
		{
			filterKey: 'category',
			filterValue: category,
		}
	);

	const loadNextPage = () => {
		if(hasNextPage) {
			fetchNextPage();
		}
	};

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

	useEffect(() => {
		const isLastPortfoliosLessThanPerShows = showsNum + ITEMS_PER_SHOW > portfolios.length;

		if(isLastPortfoliosLessThanPerShows) {
			setShowsNum(prev => prev + (portfolios.length - showsNum));
			return;
		}
		setShowsNum(prev => prev + ITEMS_PER_SHOW);
	}, [portfolios]);

	return (
		<S.Wrapper>
			<S.GridBox>
				{ portfolios?.length > 0 ?
					portfolios.map((portfolio: Portfolio, index: number)=>{
						if(index < showsNum) {
							return(
								<PortfolioCard
									key={index}
									portfolio={portfolio}
									onClick={() => saveScroll(++index)}
								/>
							)
					}})
					:
					<S.Notification>
						<Text size='bodyLarge' color='lightgray'>
							해당하는 아이템이 없습니다.
						</Text>
					</S.Notification>
				}
			</S.GridBox>

			{ hasNextPage &&
				<S.ObserveDiv ref={setObservationTarget}></S.ObserveDiv>
			}
		</S.Wrapper>
	)
}