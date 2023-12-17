import { FiMoreHorizontal as Icon} from "react-icons/fi";

import { SquareButton as MoreButton } from "../button/Button.styled";
import Popper from "../popper/Popper";

import { SectionMenuBox, SectionMenuLayout, SectionTitle } from "./SectionMenu.styled";

import useOpenMenu from "@/hooks/useOpenMenu";

function SectionMenu() {
	const [isPopUp, menuButtonCoordinate, popUp, popOut] = useOpenMenu();

	return(
		<SectionMenuLayout>
			<SectionMenuBox>
				<SectionTitle>Section</SectionTitle>

				<MoreButton color='Transparency' onClick={popUp}>
					<Icon color='gray'/>
				</MoreButton>
			</SectionMenuBox>

			{isPopUp &&
				<Popper
					type='section'
					right={menuButtonCoordinate.right}
					bottom={menuButtonCoordinate.bottom}
					popOut={popOut}
				/>
			}
		</SectionMenuLayout>
	)
}

export default SectionMenu;