import PortfolioItemSkeleton from "../portfolio-item/PortfolioItemSkeleton";
import ProfileSkeleton from "../profile/ProfileSkeleton";

import { Profile } from "@/components/molecules/profile/Profile";
import { GridBox } from "@/components/organisms/portfolio-list/PortfolioList.styled";

type Props = {
	profile: Profile;
}

export default function PortfolioListSkeleton({profile}: Props) {
	return(
		<GridBox>
			{ new Array(12).fill(1).map((_, index: number)=>{
				return(
					<div key={index}>
						<PortfolioItemSkeleton/>
						<ProfileSkeleton profile={profile}/>
					</div>
				)
			})}
		</GridBox>
	)
}