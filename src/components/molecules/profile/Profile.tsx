import { useNavigate } from "react-router-dom";

import * as S from "@/components/molecules/profile/Profile.styled";

import type { IComponentFactory } from "@/types";

import { Image, Rating, Text } from '@/components';

export type Profile = 'user' | 'portfolio' | 'portfolio-card' | 'portfolio-detail' | 'my-page' | 'message';

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
		'user': (
			<>
				<Image size='3.5rem' src={user.profileImage} alt='user profile' shape='foursquare' />
				<S.SpanBox onClick={()=>navigate(`/portfolios/${user.id}`)}>
					<Text size='bodySmall' color='gray'>{user.nickname}</Text>
				</S.SpanBox>
			</>
		),
		'portfolio': (
			<>
				<Image size='3.5rem' src={user.thumbnailUrl} alt='user profile' shape='foursquare' onClick={()=>navigate(`/portfolios/${user.id}`)}/>
				<S.SpanBox>
					<Text size='bodySmall' color='gray' onClick={()=>navigate(`/portfolios/${user.id}`)}>{user.title}</Text>
					<Text size='bodySmall' color='gray'>{user.summary}</Text>
				</S.SpanBox>
			</>
		),
    'portfolio-card': (
			<>
				<Image size='3.5rem' src={user.profileImage} alt='user profile' shape='foursquare' />
				<S.SpanBox onClick={()=>navigate(`/portfolios/${user.id}`)}>
					<Text size='bodyMedium'>{user.title}</Text>
					<Text size='bodySmall' color='gray'>{user.nickname}</Text>
				</S.SpanBox>
			</>
		),
		'portfolio-detail': (
			<>
				<Image size='5rem' src={user.profileImage} alt='user profile' shape='foursquare' />
				<Text size='titleSmall'>{user.nickname}</Text>
			</>
		),
		'my-page': (
			<>
				<Image size='150px' src={user.profileImage} alt='user-profile' shape='foursquare' />
				<S.Box>
					<Text size='title'>{user.nickname}</Text>
					{ user.authority === 'expert' &&
						<Rating readonly score={user.activity.score}/>
					}
				</S.Box>
			</>
		),
		'message': (
			<S.MessageProfileWrapper>
				<Image size='3.5rem' src={user.profileImage} alt='user-profile' shape='circle' />
				<Text size='titleSmall'>{user.nickname}</Text>
			</S.MessageProfileWrapper>
		),
  }

  return ComponentFactory[type];
}