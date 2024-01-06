import { FiMoreHorizontal as Icon} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Popper from "../popper/Popper";
import { Group, Item } from "../popper/Popper.styled";

import { SectionNavigatorBox, SectionNavigatorLayout, SectionTitle } from "./SectionNavigator.styled";

import { SquareButton as MoreButton } from "@/components/atoms/button/Button.styled";
import usePopup from "@/hooks/usePopup";
import { section as sectionSlice, setSection } from "@/redux/sectionSlice";
import { Section } from "@/types/portfolio";
import { stringToUrlParameter } from "@/utils/path";

const sections: Section[] = ['Android/iOS', 'Web', 'Illustration', 'Photo', 'Video'];

function SectionNavigator() {
	const { isPopUp, coordinate, popUp, popOut } = usePopup();
	const currentSection = useSelector(sectionSlice);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSection = (section: Section)=> {
		popOut();
		dispatch(setSection(section));
		navigate(`/main/${stringToUrlParameter(section)}`);
	};

	return(
		<SectionNavigatorLayout>
			<SectionNavigatorBox>
				<SectionTitle>{currentSection}</SectionTitle>

				<MoreButton color='White' onClick={popUp}>
					<Icon color='gray'/>
				</MoreButton>
			</SectionNavigatorBox>

			{isPopUp &&
				<Popper coordinate={coordinate} popOut={popOut}>
					<Group size='Fit'>
						{sections.map((section: Section, index:number)=>{
							return(
								<Item onClick={()=>handleSection(section)} key={index}>{section}</Item>
							)
						})}
					</Group>
				</Popper>
			}
		</SectionNavigatorLayout>
	)
}

export default SectionNavigator;