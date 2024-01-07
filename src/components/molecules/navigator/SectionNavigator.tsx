import { FiMoreHorizontal as Icon} from "react-icons/fi";
import { useSelector } from "react-redux";

import Popper from "../popper/Popper";
import { Group, Item } from "../popper/Popper.styled";

import { SectionNavigatorLayout, SectionTitle } from "./SectionNavigator.styled";

import { SquareButton as MoreButton } from "@/components/atoms/button/Button.styled";
import usePopup from "@/hooks/usePopup";
import useSectionNavigator from "@/hooks/useSectionNavigator";
import { section as sectionSlice } from "@/redux/sectionSlice";
import { Section } from "@/types/portfolio";

const sections: Section[] = ['Android/iOS', 'Web', 'Illustration', 'Photo', 'Video'];

export default function SectionNavigator() {
	const currentSection = useSelector(sectionSlice);
	const { isPopUp, coordinate, popUp, popOut } = usePopup();
	const { handleSection } = useSectionNavigator();

	const handleSectionNavigator = (event: React.MouseEvent) => {
		const section = event.currentTarget.textContent as Section;
		popOut();
		handleSection(section);
	}

	return(
		<SectionNavigatorLayout>
			<SectionTitle>{currentSection}</SectionTitle>

			<MoreButton color='White' onClick={popUp}>
				<Icon color='gray'/>
			</MoreButton>

			{isPopUp &&
				<Popper coordinate={coordinate} popOut={popOut}>
					<Group size='Fit'>
						{sections.map((section: Section, index: number)=>{
							return(
								<Item onClick={handleSectionNavigator} key={index}>{section}</Item>
							)
						})}
					</Group>
				</Popper>
			}
		</SectionNavigatorLayout>
	)
}