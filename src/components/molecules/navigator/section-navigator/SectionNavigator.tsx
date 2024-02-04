import { FiMoreHorizontal as Icon} from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { sections } from "@/assets/data/fields";
import * as S from "@/components/molecules/navigator/section-navigator/SectionNavigator.styled";
import { Group, Item } from "@/components/molecules/popper/Popper.styled";
import { section as sectionSlice } from "@/redux/sectionSlice";

import type { Section } from "@/types";

import { usePopup } from "@/hooks";
import { stringToUrlParameter } from "@/utils";

import { Button, Popper, Text } from "@/components";

export default function SectionNavigator() {
	const currentSection = useSelector(sectionSlice);
	const { isPopUp, coordinate, popUp, popOut } = usePopup();

	const navigate = useNavigate();

	const handleSection = (event: React.MouseEvent)=> {
		const section = event.currentTarget.textContent as Section;
		popOut();
		navigate(`/main/${stringToUrlParameter(section)}`);
	};

	return(
		<S.Wrapper>
			<Text size='bodyMedium'>{currentSection}</Text>

			<Button color='white' shape='round' onClick={popUp}>
				<Icon color='gray'/>
			</Button>

			{isPopUp &&
				<Popper coordinate={coordinate} popOut={popOut}>
					<Group size='fit'>
						{sections.map((section: Section, index: number)=>{
							return(
								<Item onClick={handleSection} key={index}>{section}</Item>
							)
						})}
					</Group>
				</Popper>
			}
		</S.Wrapper>
	)
}