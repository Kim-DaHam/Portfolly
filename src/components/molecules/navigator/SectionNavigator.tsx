import { FiMoreHorizontal as Icon} from "react-icons/fi";

import Popper from "../popper/Popper";

import { SectionNavigatorBox, SectionNavigatorLayout, SectionTitle } from "./SectionNavigator.styled";

import { SquareButton as MoreButton } from "@/components/atoms/button/Button.styled";
import usePopup from "@/hooks/usePopup";

function SectionNavigator() {
	const [isPopUp, menuButtonCoordinate, popUp, popOut] = usePopup();

	return(
		<SectionNavigatorLayout>
			<SectionNavigatorBox>
				<SectionTitle>Section</SectionTitle>

				<MoreButton color='Transparency' size='Fit' onClick={popUp}>
					<Icon color='gray'/>
				</MoreButton>
			</SectionNavigatorBox>

			{isPopUp &&
				<Popper
					type='SectionNavigator'
					right={menuButtonCoordinate.right}
					bottom={menuButtonCoordinate.bottom}
					popOut={popOut}
				/>
			}
		</SectionNavigatorLayout>
	)
}

export default SectionNavigator;