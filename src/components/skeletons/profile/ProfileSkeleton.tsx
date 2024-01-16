import { ImageBox, TextBox } from "./ProfileSkeleton.styled";

import { Profile } from "@/components/molecules/profile/Profile";
import { Wrapper, SpanBox } from "@/components/molecules/profile/Profile.styled";
import { IComponentFactory } from "@/types";

type Props = {
	type: Profile;
}

export default function ProfileSkeleton({type}: Props) {
	return(
		<Wrapper $type={type}>
			{renderProfileSkeleton(type)}
		</Wrapper>
	)
}

const renderProfileSkeleton = (type: Profile) => {
	const ComponentFactory:IComponentFactory = {
    'portfolio-item': (
			<>
				<ImageBox/>
				<SpanBox>
					<TextBox/>
					<TextBox/>
				</SpanBox>
			</>
		),
		'portfolio-detail': (
			<>
				<ImageBox/>
				<TextBox/>
			</>
		),
  }

  return ComponentFactory[type];
}