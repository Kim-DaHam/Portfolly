import { FiMoreHorizontal } from "react-icons/fi";

import { SquareButton } from "../button/Button.styled";
import ToggleButton from "../button/ToggleButton";

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
						<ToggleButton type='Bookmark'/>

						<SquareButton color='Gray' type="Icon">
							<FiMoreHorizontal/>
						</SquareButton>
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
			<Image type={type}/>
			{renderProfile(type)}
		</ProfileContainer>
	)
}

export default Profile;