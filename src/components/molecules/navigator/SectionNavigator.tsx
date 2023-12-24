import { FiMoreHorizontal as Icon} from "react-icons/fi";

import Popper from "../popper/Popper";
import { Group, Item } from "../popper/Popper.styled";

import { SectionNavigatorBox, SectionNavigatorLayout, SectionTitle } from "./SectionNavigator.styled";

import { SquareButton as MoreButton } from "@/components/atoms/button/Button.styled";
import usePopup from "@/hooks/usePopup";

function SectionNavigator() {
	const [isPopUp, menuButtonCoordinate, popUp, popOut] = usePopup();

	return(
		<SectionNavigatorLayout>
			<SectionNavigatorBox>
				<SectionTitle>Section</SectionTitle>

				<MoreButton color='Transparency' onClick={popUp}>
					<Icon color='gray'/>
				</MoreButton>
			</SectionNavigatorBox>

			{isPopUp &&
				<Popper
					right={menuButtonCoordinate.right}
					bottom={menuButtonCoordinate.bottom}
					popOut={popOut}
				>
					<Group size='Fit'>
						<Item>Android/iOS</Item>
						<Item>Web</Item>
						<Item>Illustration</Item>
						<Item>Graphics</Item>
						<Item>Video</Item>
					</Group>
				</Popper>
			}
		</SectionNavigatorLayout>
	)
}

export default SectionNavigator;