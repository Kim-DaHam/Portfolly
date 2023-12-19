import { Navigation } from "./MyPage.styled";
import { User, Navigation as TNavigation } from "./MyPage.type";

import Introduce from "@/components/organisms/profile-description/Introduce";
import Management from "@/components/organisms/profile-description/Management";
import PortfolioList from "@/components/organisms/profile-description/PortfolioList";
import Review from "@/components/organisms/profile-description/Review";
import { IComponentFactory, SetState } from "@/types";


export const renderNavigation = (user:User, handleNavigation:SetState<TNavigation>) => {
	const ComponentFactory: IComponentFactory = {
		Expert: (
			<>
			<Navigation onClick={()=>handleNavigation('Introduce')}>
				소개
			</Navigation>
			<Navigation onClick={()=>handleNavigation('Portfolio')} >
				포트폴리오
			</Navigation>
			<Navigation onClick={()=>handleNavigation('Review')}>
				리뷰
			</Navigation>
			{ true && // 본인이면
				<Navigation onClick={()=>handleNavigation('Management')}>
					판매 관리
				</Navigation>
			}
			</>
		),
		Client: (
			<>
			<Navigation onClick={()=>handleNavigation('Introduce')}>
				소개
			</Navigation>
			<Navigation onClick={()=>handleNavigation('Review')}>
				리뷰
			</Navigation>
			{ true && // 본인이면
				<Navigation onClick={()=>handleNavigation('Management')}>
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
		Introduce: (
			<Introduce/>
		),
		Portfolio: (
			<PortfolioList/>
		),
		Review: (
			<Review/>
		),
		Management: (
			<Management/>
		),
	}

	return ComponentFactory[navigation];
}