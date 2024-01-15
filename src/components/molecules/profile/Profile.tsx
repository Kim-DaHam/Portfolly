import { useNavigate } from "react-router-dom";

import { Image } from '@/components/atoms/index';
import * as S from "@/components/molecules/profile/Profile.styled";
import { Heading, Text } from "@/styles/Text.styled";
import { IComponentFactory } from "@/types";

export type Profile = 'portfolio-item' | 'portfolio-detail' | 'mypage' | 'review' | 'message';

type Props = {
	type: Profile;
	user: any;
}

export default function Profile({type, user}: Props) {
	const navigate = useNavigate();

	return(
		<S.Wrapper $type={type}>
			{renderProfile(type, user, navigate)}
		</S.Wrapper>
	)
}

const renderProfile = (type: Profile, user: any, navigate: any) => {
	const ComponentFactory:IComponentFactory = {
    'portfolio-item': (
			<>
				<Image size='3.5rem' src={user.profileImage} alt='user profile' shape='foursquare'/>
				<S.SpanBox onClick={()=>navigate(`/portfolios/${user.id}`)}>
					<Text size='Medium' color='Black'>{user.title}</Text>
					<Text size='Small' color='Gray'>{user.nickname}</Text>
				</S.SpanBox>
			</>
		),
		'portfolio-detail': (
			<>
				<Image size='5rem' src={user.profileImage} alt='user profile' shape='foursquare'/>
				<Heading size='Small'>{user.nickname}</Heading>
			</>
		),
  }

  return ComponentFactory[type];
}