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
		<>
			{renderProfile(type, navigate, user, portfolio)}
		</>
	)
}

const renderProfile = (type: Profile, navigate: any, user?: any, portfolio?: any) => {
	const ComponentFactory:IComponentFactory = {
		'user': (
			<S.UserProfileWrapper>
				<Image
					size='3.5rem'
					src={user?.profileImage}
					alt='user profile'
					shape='circle'
					onClick={()=>navigate(`/profile/${user?.id}`, {state: {prevUrl: location.href}})}
				/>
				<S.SpanBox onClick={()=>navigate(`/profile/${user?.id}`, {state: {prevUrl: location.href}})}>
					<Text size='bodySmall' color='gray'>{user?.nickname}</Text>
				</S.SpanBox>
			</S.UserProfileWrapper>
		),
		'portfolio': (
			<S.PortfolioProfileWrapper>
				<Image
					size='3.5rem'
					src={portfolio?.thumbnailUrl}
					alt='portfolio thumbnail'
					onClick={()=>navigate(`/portfolios/${portfolio?.id}`)}
				/>
				<S.SpanBox>
					<Text
						cursor
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
			</S.PortfolioProfileWrapper>
		),
    'portfolio-card': (
			<S.PortfolioCardProfileWrapper>
				<Image
					size='2.6rem'
					src={user?.profileImage}
					alt='user profile'
					shape='circle'
				/>
				<S.SpanBox onClick={()=>navigate(`/portfolios/${portfolio?.id}`)}>
					<Text size='label'>{portfolio?.title}</Text>
					<Text size='bodySmall' color='gray'>{user?.nickname}</Text>
				</S.SpanBox>
			</S.PortfolioCardProfileWrapper>
		),
		'portfolio-detail': (
			<S.ColumnProfileWrapper>
				<Image
					size='5rem'
					src={user?.profileImage}
					alt='user profile'
					shape='foursquare'
					onClick={()=>navigate(`/profile/${user?.id}`, {state: {prevUrl: location.href}})}
				/>
				<Text
					cursor
					size='bodyLarge'
					onClick={()=>navigate(`/profile/${user?.id}`, {state: {prevUrl: location.href}})}
				>
					{user?.nickname}
				</Text>
			</S.ColumnProfileWrapper>
		),
		'my-page': (
			<S.MyPageProfileWrapper>
				<Image
					size='9rem'
					src={user?.profileImage}
					alt='user-profile'
					shape='foursquare'
				/>
				<S.SpanBox>
					<Text size='headingSmall'>
						{user?.nickname}
					</Text>
					{ user?.authority === 'expert' &&
						<Rating readonly score={user?.profile.score}/>
					}
				</S.SpanBox>
			</S.MyPageProfileWrapper>
		),
		'message-room': (
			<S.ColumnProfileWrapper>
				<Image
					size='3.5rem'
					src={user?.profileImage}
					alt='user-profile'
					shape='circle'
				/>
				<Text size='bodyLarge'>
					{user?.nickname}
				</Text>
			</S.ColumnProfileWrapper>
		),
  }

  return ComponentFactory[type];
}