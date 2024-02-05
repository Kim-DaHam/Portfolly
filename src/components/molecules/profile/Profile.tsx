import { useNavigate } from "react-router-dom";

import * as S from "@/components/molecules/profile/Profile.styled";

import type { IComponentFactory } from "@/types";

import { Image, Rating, Text } from '@/components';

export type Profile = 'user' | 'portfolio' | 'portfolio-card' | 'portfolio-detail' | 'my-page' | 'message-room';

type Props = {
	type: Profile;
	user?: any;
	portfolio?: any;
}

export default function Profile({type, user, portfolio}: Props) {
	const navigate = useNavigate();

	return(
		<S.Wrapper $type={type}>
			{renderProfile(type, navigate, user, portfolio)}
		</S.Wrapper>
	)
}

const renderProfile = (type: Profile, navigate: any, user?: any, portfolio?: any) => {
	const ComponentFactory:IComponentFactory = {
		'user': (
			<>
				<Image
					size='3.5rem'
					src={user?.profileImage}
					alt='user profile'
					shape='foursquare'
					onClick={()=>navigate(`/profile/${user?.id}`)}
				/>
				<S.SpanBox onClick={()=>navigate(`/profile/${user?.id}`)}>
					<Text size='bodySmall' color='gray'>{user?.nickname}</Text>
				</S.SpanBox>
			</>
		),
		'portfolio': (
			<>
				<Image
					size='3.5rem'
					src={portfolio?.thumbnailUrl}
					alt='user profile' shape='foursquare'
					onClick={()=>navigate(`/portfolios/${portfolio?.id}`)}
				/>
				<S.SpanBox>
					<Text
						size='bodySmall'
						color='gray'
						onClick={()=>navigate(`/portfolios/${portfolio?.id}`)}
					>
						{portfolio?.title}
					</Text>
					<Text
						size='bodySmall'
						color='gray'
					>
						{portfolio?.summary}
					</Text>
				</S.SpanBox>
			</>
		),
    'portfolio-card': (
			<>
				<Image
					size='2.6rem'
					src={user?.profileImage}
					alt='user profile'
					shape='circle'
				/>
				<S.SpanBox onClick={()=>navigate(`/portfolios/${portfolio?.id}`)}>
					<Text size='bodyMedium'>{portfolio?.title}</Text>
					<Text size='bodySmall' color='gray'>{user?.nickname}</Text>
				</S.SpanBox>
			</>
		),
		'portfolio-detail': (
			<>
				<Image
					size='5rem'
					src={user?.profileImage}
					alt='user profile'
					shape='foursquare'
					onClick={()=>navigate(`/profiles/${user?.id}`)}
				/>
				<Text size='titleSmall'>
					{user?.nickname}
				</Text>
			</>
		),
		'my-page': (
			<>
				<Image
					size='150px'
					src={user?.profileImage}
					alt='user-profile'
					shape='foursquare'
				/>
				<S.Box>
					<Text size='title'>
						{user?.nickname}
					</Text>
					{ user?.authority === 'expert' &&
						<Rating readonly score={user?.activity.score}/>
					}
				</S.Box>
			</>
		),
		'message': (
			<S.MessageProfileWrapper>
				<Image
					size='3.5rem'
					src={user?.profileImage}
					alt='user-profile'
					shape='circle'
				/>
				<Text size='titleSmall'>
					{user?.nickname}
				</Text>
			</S.MessageProfileWrapper>
		),
  }

  return ComponentFactory[type];
}