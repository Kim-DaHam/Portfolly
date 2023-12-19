
import { Image, ProfileLayout } from "./Profile.styled";
import { renderProfile } from "./Profile.utils";


type Profile = 'Default' | 'Portfolio' | 'Chat';

type Props = {
	type: Profile;
}

function Profile({type}: Props) {

	return(
		<ProfileLayout type={type}>
			<Image type={type}/>
			{renderProfile(type)}
		</ProfileLayout>
	)
}

export default Profile;