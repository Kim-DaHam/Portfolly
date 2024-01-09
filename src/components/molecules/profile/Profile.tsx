import { useNavigate } from "react-router-dom";

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
	const navigate = useNavigate();

	return(
		<>
			{renderProfile(type, user, navigate)}
		</>
	)
}

const renderProfile = (type: Profile, user: any, navigate: any) => {
	const handlePortfolioProfile = () => {
		navigate(`/portfolios/${user.portfolio.id}`, {
			state: user.portfolio,
		});
	}

	const ComponentFactory:IComponentFactory = {
    'portfolio-item': (
			<ProfileLayout $type={type}>
				<Image src={user.portfolio.user.profileImage} alt='user profile' size='3.5rem' shape='foursquare'/>
				<SpanBox onClick={handlePortfolioProfile}>
					<Text size='Medium' color='Black'>{user.portfolio.title}</Text>
					<Text size='Small' color='Gray'>{user.portfolio.user.name}</Text>
				</SpanBox>
			</ProfileLayout>
		),
  }

  return ComponentFactory[type];
}