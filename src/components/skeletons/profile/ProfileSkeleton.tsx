import { ImageBox, TextBox } from "./ProfileSkeleton.styled";

import { Profile } from "@/components/molecules/profile/Profile";
import { ProfileLayout, SpanBox } from "@/components/molecules/profile/Profile.styled";
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
			<ProfileLayout $profile={profile}>
				<ImageBox/>
				<SpanBox>
					<TextBox/>
					<TextBox/>
				</SpanBox>
			</ProfileLayout>
		),
  }

  return ComponentFactory[profile];
}