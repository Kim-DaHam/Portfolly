import { useSelector } from "react-redux";
import styled from "styled-components";

import { Profile } from "@/components/molecules/profile/Profile";
import { GridBox } from "@/components/organisms/portfolio-list/PortfolioList.styled";
import * as mixins from '@/styles/mixins';

import { section } from "@/redux";

import { PortfolioCardSkeleton, ProfileSkeleton } from "@/components";

type Props = {
	type: Profile;
}

export default function PortfolioListSkeleton({ type }: Props) {
	const currentSection = useSelector(section);

	return(
		<GridBox section={currentSection}>
			{ new Array(12).fill(1).map((_, index: number)=>{
				return(
					<GridItem key={index}>
						<PortfolioCardSkeleton/>
						<ProfileSkeleton type={type}/>
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