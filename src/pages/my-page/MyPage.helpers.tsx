import { Introduce, Management, PortfolioList, Review } from "@/components";
import { Navigation as TNavigation } from "@/pages/my-page/MyPage";
import { Navigation } from "@/pages/my-page/MyPage.styled";
import { IComponentFactory, SetState, User } from "@/types";

type Authority = 'expert' | 'client';

export const renderNavigation = (auth: Authority, handleNavigation: SetState<TNavigation>, isMyPage: boolean) => {
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

	return ComponentFactory[auth];
}

export const renderDescription = (navigation: TNavigation, user: User)=>{
	const ComponentFactory: IComponentFactory = {
		introduce: (
			<Introduce user={user.profile}/>
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