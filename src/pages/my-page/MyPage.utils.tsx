import { Navigation } from "./MyPage.styled";

import { IComponentFactory, SetState } from "@/types";

type User = 'Expert' | 'Client';

export const renderNavigation = (user:User, handleNavigation:SetState) => {
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