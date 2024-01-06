import PortfolioItemSkeleton from "../portfolio-item/PortfolioItemSkeleton";
import ProfileSkeleton from "../profile/ProfileSkeleton";

import { GridBox, GridItem } from "@/components/organisms/portfolio-list/PortfolioList.styled";
import { Profile } from "@/types/profile";

type Props = {
	profile: Profile;
}

export default function PortfolioListSkeleton({profile}: Props) {
	return(
		<GridBox>
			{ new Array(12).fill(1).map((_, index: number)=>{
				return(
					<GridItem key={index}>
						<PortfolioItemSkeleton/>
						<ProfileSkeleton profile={profile}/>
					</GridItem>
				)
			})}
		</GridBox>
	)
}