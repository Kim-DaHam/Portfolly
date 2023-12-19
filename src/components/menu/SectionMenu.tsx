import { FiMoreHorizontal as Icon} from "react-icons/fi";

import Popper from "../popper/Popper";

import { SectionMenuBox, SectionMenuLayout, SectionTitle } from "./SectionMenu.styled";

import { SquareButton as MoreButton } from "@/components/atoms/button/Button.styled";
import usePopup from "@/hooks/usePopup";

function SectionMenu() {
	const [isPopUp, menuButtonCoordinate, popUp, popOut] = usePopup();

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
					type='SectionMenu'
					right={menuButtonCoordinate.right}
					bottom={menuButtonCoordinate.bottom}
					popOut={popOut}
				/>
			}
		</SectionMenuLayout>
	)
}

export default SectionMenu;