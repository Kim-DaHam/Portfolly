import { ImageBox, TextBox } from "./ProfileSkeleton.styled";

import { Profile } from "@/components/molecules/profile/Profile";
import { ProfileLayout, SpanBox } from "@/components/molecules/profile/Profile.styled";
import { IComponentFactory } from "@/types";

type Props = {
	type: Profile;
}

export default function ProfileSkeleton({type}: Props) {
	return(
		<>
			{renderProfileSkeleton(type)}
		</>
	)
}

const renderProfileSkeleton = (type: Profile) => {
	const ComponentFactory:IComponentFactory = {
    'portfolio-item': (
			<ProfileLayout $type={type}>
				<ImageBox/>
				<SpanBox>
					<TextBox/>
					<TextBox/>
				</SpanBox>
			</ProfileLayout>
		),
  }

  return ComponentFactory[type];
}