import styled from "styled-components";

import PortfolioThumbnailSkeleton from "../portfolio-thumbnail/PortfolioThumbnailSkeleton";
import ProfileSkeleton from "../profile/ProfileSkeleton";

import { Profile } from "@/components/molecules/profile/Profile";
import { GridBox } from "@/components/organisms/portfolio-list/PortfolioList.styled";
import * as mixins from '@/styles/mixins';

type Props = {
	profile: Profile;
}

export default function PortfolioListSkeleton({profile}: Props) {
	return(
		<GridBox>
			{ new Array(12).fill(1).map((_, index: number)=>{
				return(
					<GridItem key={index}>
						<PortfolioThumbnailSkeleton/>
						<ProfileSkeleton type={profile}/>
					</GridItem>
				)
			})}
		</GridBox>
	)
}

const GridItem = styled.div`
	${mixins.flexColumn}
	gap: 0.5rem;
`;