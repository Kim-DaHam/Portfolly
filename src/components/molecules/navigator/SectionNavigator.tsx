import { useState } from "react";
import { FiMoreHorizontal as Icon} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Popper from "../popper/Popper";
import { Group, Item } from "../popper/Popper.styled";

import { SectionNavigatorBox, SectionNavigatorLayout, SectionTitle } from "./SectionNavigator.styled";

import { SquareButton as MoreButton } from "@/components/atoms/button/Button.styled";
import usePopup from "@/hooks/usePopup";
import { Section, SectionEndPoint } from "@/types/portfolio";

const sections: Section[] = ['Android/iOS', 'Web', 'Illustration', 'Photo', 'Video'];

function SectionNavigator() {
	const [section, setSection] = useState('Android/iOS')
	const [isPopUp, menuButtonCoordinate, popUp, popOut] = usePopup();

	const navigate = useNavigate();

	const navigateSection = (section: Section)=> {
		popOut();
		setSection(section);
		navigate(`/main/${SectionEndPoint[section]}`);
	}

	return(
		<SectionNavigatorLayout>
			<SectionNavigatorBox>
				<SectionTitle>{section}</SectionTitle>

				<MoreButton color='White' onClick={popUp}>
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
						{sections.map((section: Section, index:number)=>{
							return(
								<Item onClick={()=>navigateSection(section)} key={index}>{section}</Item>
							)
						})}
					</Group>
				</Popper>
			}
		</SectionNavigatorLayout>
	)
}

export default SectionNavigator;