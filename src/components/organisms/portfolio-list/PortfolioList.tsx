import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "@/components/organisms/portfolio-list/PortfolioList.styled";
import { section } from "@/redux/sectionSlice";

import type { Portfolio } from "@/types";

import { useIntersectionObserver } from "@/hooks";
import { usePortfoliosQuery } from "@/utils";

import { PortfolioCard, Text } from "@/components";

export const SESSION_STORAGE_KEY = 'lastClickedPortfolio';

type Props = {
	filter: {[key in string]: string};
};

const ITEMS_PER_SHOW = 6;

export default function PortfolioList({ filter }: Props) {
	const [showsNum, setShowsNum] = useState<number>(ITEMS_PER_SHOW);

	const currentSection = useSelector(section);

	const {
		data: portfolios,
		fetchNextPage,
		hasNextPage,
	} = usePortfoliosQuery(
		currentSection,
		filter,
		);

	const hasNextPerShows = portfolios.length > showsNum || hasNextPage;

	const loadNextPage = () => {
		const isLastPortfoliosLessThanPerShow = (portfolios.length - showsNum) < ITEMS_PER_SHOW;

		if(showsNum === portfolios.length && hasNextPage) {
			fetchNextPage();
			return;
		}
		if(isLastPortfoliosLessThanPerShow) {
			setShowsNum(prev => prev + (portfolios.length - showsNum));
			return;
		}
		setShowsNum(prev => prev + ITEMS_PER_SHOW);
	};

	const setObservationTarget = useIntersectionObserver(loadNextPage);

	const saveScrollAndPage = (index: number) => {
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify({
      anchorPosition: window.pageYOffset,
      clickedPortfolioIndex: index,
    }));
  };

	useEffect(() => {
		const getStorage = sessionStorage.getItem(SESSION_STORAGE_KEY);
		if(!getStorage) return;

		const { anchorPosition, clickedPortfolioIndex } = JSON.parse(getStorage);

		setShowsNum(clickedPortfolioIndex);

		setTimeout(() => {
      window.scrollTo({
        top: anchorPosition,
      });
    }, 500);
		return () => sessionStorage.removeItem(SESSION_STORAGE_KEY);
	}, []);

	return (
		<S.Wrapper>
			<S.GridBox section={currentSection}>
				{ portfolios?.length > 0 ?
					portfolios.map((portfolio: Portfolio, index: number)=>{
						if(index >= showsNum) return;
						return(
							<PortfolioCard
								key={portfolio.id}
								portfolio={portfolio}
								onClick={() => saveScrollAndPage(++index)}
							/>
						)
					})
					:
					<S.Notification>
						<Text size='bodyLarge' color='lightgray'>
							해당하는 아이템이 없습니다.
						</Text>
					</S.Notification>
				}
			</S.GridBox>

			{ hasNextPerShows &&
				<S.ObserveDiv ref={setObservationTarget}></S.ObserveDiv>
			}
		</S.Wrapper>
	)
}