import { ImageBox, TextBox } from "./ProfileSkeleton.styled";

import { PorfolioProfileLayout, SpanBox } from "@/components/molecules/profile/portfolio-profile/PortfolioProfile.styled";
import { IComponentFactory } from "@/types";
import { Profile } from "@/types/profile";

type Props = {
	profile: Profile;
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

function ProfileSkeleton({profile}: Props) {
	return(
		<>
			{renderProfileSkeleton(profile)}
		</>
	)
}

export default ProfileSkeleton;