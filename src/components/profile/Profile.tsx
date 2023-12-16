import { ButtonBox, PortfolioTitle, ProfileContainer, UserName, Image, SpanBox } from "./Profile.styled";

import { IComponentFactory } from "@/types";

type Profile = 'Default' | 'Portfolio' | 'Chat';

interface ProfileProps {
	type: Profile;
}

const renderProfile = (type: Profile) => {
	const ComponentFactory: IComponentFactory = {
		Default: (
			<>
				<UserName type={type}>username</UserName>
			</>
		),
		Portfolio: (
			<>
				<SpanBox>
					<UserName type={type}>username</UserName>
					<PortfolioTitle>PortfolioTitle</PortfolioTitle>
				</SpanBox>

					<ButtonBox className='button-box'>
						<div></div>
						<div></div>
						{/* 북마크, 메뉴 버튼 */}
					</ButtonBox>
			</>
		),
		Chat: (
			<></>
		)
	}

	return ComponentFactory[type];
}

function Profile({type}: ProfileProps) {
	return(
		<ProfileContainer type={type}>
			{/* <ABox/> */}
			<Image type={type}/>
			{renderProfile(type)}
		</ProfileContainer>
	)
}

export default Profile;