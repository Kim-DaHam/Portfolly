import { ImageBox, TextBox } from "./ProfileSkeleton.styled";

import { PorfolioProfileLayout, SpanBox } from "@/components/molecules/profile/portfolio-profile/PortfolioProfile.styled";
import { Profile } from "@/components/molecules/profile/Profile";
import { IComponentFactory } from "@/types";

type Props = {
	profile: Profile;
}

export default function ProfileSkeleton({profile}: Props) {
	return(
		<>
			{renderProfileSkeleton(profile)}
		</>
	)
}

const renderProfileSkeleton = (profile: Profile) => {
	const ComponentFactory:IComponentFactory = {
    'portfolio-item': (
			<PorfolioProfileLayout>
				<ImageBox/>
				<SpanBox>
					<TextBox/>
					<TextBox/>
				</SpanBox>
			</PorfolioProfileLayout>
		),
  }

  return ComponentFactory[profile];
}