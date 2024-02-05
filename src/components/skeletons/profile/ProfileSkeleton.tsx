import { Profile } from "@/components/molecules/profile/Profile";
import { Wrapper, SpanBox } from "@/components/molecules/profile/Profile.styled";
import * as S from "@/components/skeletons/profile/ProfileSkeleton.styled";

import type { IComponentFactory } from "@/types";

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
		'user': (
			<>
				<S.ImageBox/>
				<SpanBox>
					<S.TextBox/>
				</SpanBox>
			</>
		),
		'portfolio': (
			<>
				<S.ImageBox/>
				<SpanBox>
					<S.TextBox/>
					<S.TextBox/>
				</SpanBox>
			</>
		),
    'portfolio-card': (
			<>
				<S.ImageBox/>
				<SpanBox>
					<S.TextBox/>
					<S.TextBox/>
				</SpanBox>
			</>
		),
		'portfolio-detail': (
			<>
				<S.ImageBox/>
				<S.TextBox/>
			</>
		),
		'my-page': (
			<>
				<S.ImageBox/>
				<SpanBox>
					<S.TextBox/>
					<S.TextBox/>
				</SpanBox>
			</>
		),
		'message-room': (
			<>
				<S.ImageBox/>
				<SpanBox>
					<S.TextBox/>
				</SpanBox>
			</>
		),
  }

  return ComponentFactory[type];
}