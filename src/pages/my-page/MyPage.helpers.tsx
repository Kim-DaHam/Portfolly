import { Introduce, Management, PortfolioList, Review } from "@/components";
import { User, Navigation as TNavigation } from "@/pages/my-page/MyPage";
import { Navigation } from "@/pages/my-page/MyPage.styled";
import { IComponentFactory, SetState } from "@/types";

export const renderNavigation = (user: User, handleNavigation: SetState<TNavigation>, isMyPage: boolean) => {
	const ComponentFactory: IComponentFactory = {
		expert: (
			<>
			<Navigation onClick={()=>handleNavigation('introduce')}>
				소개
			</Navigation>
			<Navigation onClick={()=>handleNavigation('portfolios')} >
				포트폴리오
			</Navigation>
			<Navigation onClick={()=>handleNavigation('review')}>
				리뷰
			</Navigation>
			{ isMyPage &&
				<>
				<Navigation onClick={()=>handleNavigation('management')}>
					판매 관리
				</Navigation>

				<Navigation onClick={()=>handleNavigation('bookmarks')}>
					북마크
				</Navigation>
				</>
			}
			</>
		),
		client: (
			<>
			<Navigation onClick={()=>handleNavigation('introduce')}>
				소개
			</Navigation>
			<Navigation onClick={()=>handleNavigation('review')}>
				리뷰
			</Navigation>
			{ isMyPage &&
				<Navigation onClick={()=>handleNavigation('management')}>
					구매 관리
				</Navigation>
			}
			</>
		),
	}

	return ComponentFactory[user];
}

export const renderDescription = (navigation: TNavigation)=>{
	const ComponentFactory: IComponentFactory = {
		introduce: (
			<Introduce />
		),
		portfolio: (
			<PortfolioList />
		),
		review: (
			<Review />
		),
		management: (
			<Management />
		),
		bookmarks: (
			<PortfolioList />
		)
	}

	return ComponentFactory[navigation];
}