import { ProfileLayout, SpanBox } from "./Profile.styled";

import Image from '@/components/atoms/image/Image';
import { Text } from "@/styles/Text.styled";
import { IComponentFactory } from "@/types";

export type Profile = 'portfolio-item' | 'portfolio-detail' | 'mypage' | 'review' | 'message';

type Props = {
	type: Profile;
	user: any;
}

export default function Profile({type, user}: Props) {
	return(
		<>
			{renderProfile(type, user)}
		</>
	)
}

const renderProfile = (type: Profile, user: any) => {
	const ComponentFactory:IComponentFactory = {
    'portfolio-item': (
			<ProfileLayout $type={type}>
				<Image src={user.profileImage} alt='user profile' size='3.5rem' shape='foursquare'/>
				<SpanBox>
					<Text size='Medium' color='Black'>{user.title}</Text>
					<Text size='Small' color='Gray'>{user.name}</Text>
				</SpanBox>
			</ProfileLayout>
		),
  }

  return ComponentFactory[type];
}